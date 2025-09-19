// Application State
        const MedicalAgent = {
            currentAgent: 'Dr. Marie Dubois',
            donations: [],
            bloodStock: [
                { group: 'A+', quantity: 245, status: 'Bon', expiry: '2024-10-15', location: 'Frigo A-1', lastUpdate: '2024-09-18 08:30' },
                { group: 'A-', quantity: 78, status: 'Faible', expiry: '2024-09-28', location: 'Frigo B-1', lastUpdate: '2024-09-18 07:15' },
                { group: 'B+', quantity: 156, status: 'Bon', expiry: '2024-11-02', location: 'Frigo A-2', lastUpdate: '2024-09-18 09:20' },
                { group: 'B-', quantity: 45, status: 'Critique', expiry: '2024-09-30', location: 'Frigo C-1', lastUpdate: '2024-09-17 16:45' },
                { group: 'AB+', quantity: 67, status: 'Faible', expiry: '2024-09-30', location: 'Frigo C-2', lastUpdate: '2024-09-18 12:15' },
                { group: 'AB-', quantity: 23, status: 'Critique', expiry: '2024-09-25', location: 'Frigo B-3', lastUpdate: '2024-09-17 14:20' },
                { group: 'O+', quantity: 312, status: 'Bon', expiry: '2024-10-20', location: 'Frigo A-3', lastUpdate: '2024-09-18 11:10' },
                { group: 'O-', quantity: 89, status: 'Critique', expiry: '2024-09-25', location: 'Frigo B-2', lastUpdate: '2024-09-18 06:50' }
            ],
            stats: {
                todayDonations: 0,
                totalDonors: 247,
                totalStock: 1015,
                weeklyGoal: 85
            }
        };

        // Utility Functions
        function formatDateTime(date = new Date()) {
            return date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        function formatTime(date = new Date()) {
            return date.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        function showNotification(message, type = 'success', duration = 5000) {
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
            alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
            
            alertDiv.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'danger' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>
                    <span>${message}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            
            document.body.appendChild(alertDiv);
            
            setTimeout(() => {
                if (alertDiv.parentElement) {
                    alertDiv.remove();
                }
            }, duration);
        }

        function showLoading(show = true) {
            const overlay = document.getElementById('loadingOverlay');
            if (show) {
                overlay.classList.add('show');
            } else {
                overlay.classList.remove('show');
            }
        }

        function calculateAge(birthDate) {
            const today = new Date();
            const birth = new Date(birthDate);
            let age = today.getFullYear() - birth.getFullYear();
            const monthDiff = today.getMonth() - birth.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            
            return age;
        }

        function validateEligibility(donorData) {
            const errors = [];
            
            // Age validation
            const age = calculateAge(donorData.birthDate);
            if (age < 18 || age > 70) {
                errors.push('Âge non conforme (18-70 ans requis)');
            }
            
            // Weight validation
            if (donorData.weight < 50) {
                errors.push('Poids insuffisant (minimum 50 kg)');
            }
            
            // Hemoglobin validation
            const minHb = donorData.gender === 'F' ? 12.5 : 13.0;
            if (donorData.hemoglobin < minHb) {
                errors.push(`Hémoglobine insuffisante (minimum ${minHb} g/dL)`);
            }
            
            // Last donation validation
            if (donorData.lastDonation) {
                const lastDonation = new Date(donorData.lastDonation);
                const daysSince = Math.floor((new Date() - lastDonation) / (1000 * 60 * 60 * 24));
                if (daysSince < 56) { // 8 weeks
                    errors.push(`Délai insuffisant depuis le dernier don (${daysSince} jours, minimum 56)`);
                }
            }
            
            return errors;
        }

        // Initialize Application
        function initializeApp() {
            updateDateTime();
            updateStats();
            populateBloodStocks();
            setupFormHandlers();
            setupRealTimePreview();
            updateHistoryTable();
            
            // Update time every minute
            setInterval(updateDateTime, 60000);
        }

        function updateDateTime() {
            document.getElementById('currentDateTime').textContent = formatDateTime();
        }

        function updateStats() {
            document.getElementById('todayDonations').textContent = MedicalAgent.stats.todayDonations;
            document.getElementById('totalDonors').textContent = MedicalAgent.stats.totalDonors.toLocaleString();
            document.getElementById('totalStock').textContent = MedicalAgent.stats.totalStock.toLocaleString();
            document.getElementById('weeklyGoal').textContent = MedicalAgent.stats.weeklyGoal + '%';
        }

        // Form Handlers
        function setupFormHandlers() {
            const form = document.getElementById('donationForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                handleDonationSubmission();
            });

            form.addEventListener('reset', function() {
                document.getElementById('donorPreview').classList.remove('show');
                document.getElementById('emptyPreview').style.display = 'block';
            });
        }

        function setupRealTimePreview() {
            const form = document.getElementById('donationForm');
            const inputs = form.querySelectorAll('input, select');
            
            inputs.forEach(input => {
                input.addEventListener('input', updateDonorPreview);
                input.addEventListener('change', updateDonorPreview);
            });
        }

        function updateDonorPreview() {
            const form = document.getElementById('donationForm');
            const formData = new FormData(form);
            
            const firstName = formData.get('donorFirstName') || formData.get('firstName');
            const lastName = formData.get('donorLastName') || formData.get('lastName');
            const birthDate = formData.get('donorBirthDate') || formData.get('birthDate');
            const bloodGroup = formData.get('bloodGroup');
            const weight = formData.get('donorWeight') || formData.get('weight');
            const donationType = formData.get('donationType');
            
            if (firstName || lastName || bloodGroup) {
                const preview = document.getElementById('donorPreview');
                const emptyPreview = document.getElementById('emptyPreview');
                
                const age = birthDate ? calculateAge(birthDate) : '';
                
                preview.innerHTML = `
                    <h6 class="text-primary mb-3">Aperçu du Don</h6>
                    <div class="row">
                        <div class="col-6">
                            <strong>Donneur:</strong><br>
                            <span class="text-muted">${firstName || ''} ${lastName || ''}</span>
                        </div>
                        <div class="col-6">
                            <strong>Âge:</strong><br>
                            <span class="text-muted">${age || '--'} ans</span>
                        </div>
                        <div class="col-6 mt-2">
                            <strong>Groupe:</strong><br>
                            <span class="badge bg-danger">${bloodGroup || '--'}</span>
                        </div>
                        <div class="col-6 mt-2">
                            <strong>Poids:</strong><br>
                            <span class="text-muted">${weight || '--'} kg</span>
                        </div>
                        <div class="col-12 mt-2">
                            <strong>Type de don:</strong><br>
                            <span class="text-muted">${donationType || '--'}</span>
                        </div>
                    </div>
                `;
                
                preview.classList.add('show');
                emptyPreview.style.display = 'none';
            } else {
                document.getElementById('donorPreview').classList.remove('show');
                document.getElementById('emptyPreview').style.display = 'block';
            }
        }

        function handleDonationSubmission() {
            const form = document.getElementById('donationForm');
            const formData = new FormData(form);
            
            // Collect form data
            const donorData = {
                id: Date.now(),
                firstName: formData.get('donorFirstName') || formData.get('firstName'),
                lastName: formData.get('donorLastName') || formData.get('lastName'),
                birthDate: formData.get('donorBirthDate') || formData.get('birthDate'),
                gender: formData.get('donorGender') || formData.get('gender'),
                phone: formData.get('donorPhone') || formData.get('phone'),
                email: formData.get('donorEmail') || formData.get('email'),
                bloodGroup: formData.get('bloodGroup'),
                weight: parseInt(formData.get('donorWeight') || formData.get('weight')),
                hemoglobin: parseFloat(formData.get('hemoglobin')),
                bloodPressure: formData.get('bloodPressure'),
                donationType: formData.get('donationType'),
                lastDonation: formData.get('lastDonation'),
                quantity: parseInt(formData.get('donationQuantity') || formData.get('quantity')),
                notes: formData.get('medicalNotes') || formData.get('notes'),
                timestamp: new Date(),
                agent: MedicalAgent.currentAgent,
                status: 'Complété'
            };

            // Validate eligibility
            const errors = validateEligibility(donorData);
            if (errors.length > 0) {
                showNotification('Critères d\'éligibilité non remplis:<br>• ' + errors.join('<br>• '), 'danger', 8000);
                return;
            }

            // Show loading
            showLoading(true);
            form.classList.add('form-submitted');

            // Simulate processing
            setTimeout(() => {
                // Add donation to records
                MedicalAgent.donations.push(donorData);
                
                // Update stats
                MedicalAgent.stats.todayDonations++;
                updateStats();
                
                // Update blood stock
                const stockItem = MedicalAgent.bloodStock.find(item => item.group === donorData.bloodGroup);
                if (stockItem) {
                    stockItem.quantity += Math.floor(donorData.quantity / 450); // Convert mL to units
                    stockItem.lastUpdate = new Date().toISOString();
                    
                    // Update status based on new quantity
                    if (stockItem.quantity >= 200) stockItem.status = 'Bon';
                    else if (stockItem.quantity >= 100) stockItem.status = 'Faible';
                    else stockItem.status = 'Critique';
                }
                
                // Update displays
                populateBloodStocks();
                updateHistoryTable();
                
                // Hide loading
                showLoading(false);
                form.classList.remove('form-submitted');
                
                // Show success message
                document.getElementById('successMessage').innerHTML = `
                    Don de ${donorData.firstName} ${donorData.lastName} (${donorData.bloodGroup}) 
                    enregistré avec succès.<br>
                    Quantité: ${donorData.quantity}mL
                `;
                
                // Show success modal
                new bootstrap.Modal(document.getElementById('successModal')).show();
                
                // Reset form
                form.reset();
                updateDonorPreview();
                
            }, 2000);
        }

        // Blood Stock Management
        function populateBloodStocks() {
            const container = document.getElementById('bloodStockDisplay');
            container.innerHTML = '';
            
            MedicalAgent.bloodStock.forEach(stock => {
                const card = createBloodStockCard(stock);
                container.appendChild(card);
            });
        }

        function createBloodStockCard(stock) {
            const div = document.createElement('div');
            
            let cardClass = 'blood-o';
            let iconClass = 'blood-o';
            if (stock.group.includes('A') && !stock.group.includes('AB')) {
                cardClass = 'blood-a';
                iconClass = 'blood-a';
            } else if (stock.group.includes('B') && !stock.group.includes('AB')) {
                cardClass = 'blood-b';
                iconClass = 'blood-b';
            } else if (stock.group.includes('AB')) {
                cardClass = 'blood-ab';
                iconClass = 'blood-ab';
            }
            
            let statusClass = '';
            switch (stock.status) {
                case 'Bon': statusClass = 'status-bon'; break;
                case 'Faible': statusClass = 'status-faible'; break;
                case 'Critique': statusClass = 'status-critique'; break;
            }

            const daysUntilExpiry = Math.ceil((new Date(stock.expiry) - new Date()) / (1000 * 60 * 60 * 24));
            
            div.className = `blood-card ${cardClass}`;
            div.innerHTML = `
                <div class="blood-type">
                    <div class="blood-icon ${iconClass}">
                        ${stock.group}
                    </div>
                    <span>${stock.group}</span>
                </div>
                <div class="quantity-display">
                    ${stock.quantity} poches
                </div>
                <div class="mb-3">
                    <span class="stock-status ${statusClass}">${stock.status}</span>
                </div>
                <div class="row">
                    <div class="col-6">
                        <small class="text-muted">Expiration:</small><br>
                        <strong class="${daysUntilExpiry <= 7 ? 'text-danger' : ''}">${daysUntilExpiry} jours</strong>
                    </div>
                    <div class="col-6">
                        <small class="text-muted">Localisation:</small><br>
                        <strong>${stock.location}</strong>
                    </div>
                </div>
                <div class="mt-3">
                    <small class="text-muted">
                        Dernière MAJ: ${formatTime(new Date(stock.lastUpdate))}
                    </small>
                </div>
            `;
            
            // Add click event for details
            div.addEventListener('click', () => showStockDetails(stock));
            div.style.cursor = 'pointer';
            
            return div;
        }

        function showStockDetails(stock) {
            const details = `
                <div class="row">
                    <div class="col-md-6">
                        <h6>Informations Générales</h6>
                        <p><strong>Groupe sanguin:</strong> ${stock.group}</p>
                        <p><strong>Quantité disponible:</strong> ${stock.quantity} poches</p>
                        <p><strong>Statut:</strong> <span class="badge ${stock.status === 'Bon' ? 'bg-success' : stock.status === 'Faible' ? 'bg-warning' : 'bg-danger'}">${stock.status}</span></p>
                    </div>
                    <div class="col-md-6">
                        <h6>Détails Logistiques</h6>
                        <p><strong>Localisation:</strong> ${stock.location}</p>
                        <p><strong>Date d'expiration:</strong> ${new Date(stock.expiry).toLocaleDateString('fr-FR')}</p>
                        <p><strong>Dernière mise à jour:</strong> ${formatDateTime(new Date(stock.lastUpdate))}</p>
                    </div>
                </div>
            `;
            
            document.getElementById('detailModalBody').innerHTML = details;
            new bootstrap.Modal(document.getElementById('detailModal')).show();
        }

        // History Management
        function updateHistoryTable() {
            const tbody = document.getElementById('historyTableBody');
            const emptyHistory = document.getElementById('emptyHistory');
            
            // Get today's donations
            const today = new Date();
            const todayDonations = MedicalAgent.donations.filter(donation => {
                const donationDate = new Date(donation.timestamp);
                return donationDate.toDateString() === today.toDateString();
            });

            tbody.innerHTML = '';
            
            if (todayDonations.length === 0) {
                emptyHistory.style.display = 'block';
                return;
            }
            
            emptyHistory.style.display = 'none';
            
            todayDonations.forEach(donation => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formatTime(new Date(donation.timestamp))}</td>
                    <td>
                        <strong>${donation.firstName} ${donation.lastName}</strong><br>
                        <small class="text-muted">${calculateAge(donation.birthDate)} ans</small>
                    </td>
                    <td>
                        <span class="badge bg-danger">${donation.bloodGroup}</span>
                    </td>
                    <td>${donation.donationType}</td>
                    <td>${donation.quantity} mL</td>
                    <td>
                        <span class="badge bg-success">${donation.status}</span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="viewDonationDetails(${donation.id})">
                            <i class="bi bi-eye"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function viewDonationDetails(donationId) {
            const donation = MedicalAgent.donations.find(d => d.id === donationId);
            if (!donation) return;
            
            const details = `
                <div class="row">
                    <div class="col-md-6">
                        <h6>Informations Donneur</h6>
                        <p><strong>Nom:</strong> ${donation.firstName} ${donation.lastName}</p>
                        <p><strong>Âge:</strong> ${calculateAge(donation.birthDate)} ans</p>
                        <p><strong>Téléphone:</strong> ${donation.phone}</p>
                        <p><strong>Email:</strong> ${donation.email || 'Non renseigné'}</p>
                    </div>
                    <div class="col-md-6">
                        <h6>Informations Médicales</h6>
                        <p><strong>Groupe sanguin:</strong> ${donation.bloodGroup}</p>
                        <p><strong>Poids:</strong> ${donation.weight} kg</p>
                        <p><strong>Hémoglobine:</strong> ${donation.hemoglobin} g/dL</p>
                        <p><strong>Tension:</strong> ${donation.bloodPressure}</p>
                    </div>
                    <div class="col-12">
                        <h6>Informations du Don</h6>
                        <div class="row">
                            <div class="col-md-4">
                                <p><strong>Type de don:</strong> ${donation.donationType}</p>
                            </div>
                            <div class="col-md-4">
                                <p><strong>Quantité:</strong> ${donation.quantity} mL</p>
                            </div>
                            <div class="col-md-4">
                                <p><strong>Heure:</strong> ${formatTime(new Date(donation.timestamp))}</p>
                            </div>
                        </div>
                        ${donation.notes ? `<p><strong>Notes:</strong> ${donation.notes}</p>` : ''}
                        <p><strong>Agent responsable:</strong> ${donation.agent}</p>
                    </div>
                </div>
            `;
            
            document.getElementById('detailModalBody').innerHTML = details;
            new bootstrap.Modal(document.getElementById('detailModal')).show();
        }

        // Search and Filter Functions
        function setupSearchFilters() {
            const stockSearch = document.getElementById('stockSearch');
            const statusFilter = document.getElementById('statusFilter');
            
            if (stockSearch) {
                stockSearch.addEventListener('input', filterBloodStocks);
            }
            
            if (statusFilter) {
                statusFilter.addEventListener('change', filterBloodStocks);
            }
        }

        function filterBloodStocks() {
            const searchTerm = document.getElementById('stockSearch')?.value.toLowerCase() || '';
            const statusFilter = document.getElementById('statusFilter')?.value || '';
            
            const container = document.getElementById('bloodStockDisplay');
            const cards = container.querySelectorAll('.blood-card');
            
            cards.forEach(card => {
                const bloodGroup = card.querySelector('.blood-type span').textContent.toLowerCase();
                const status = card.querySelector('.stock-status').textContent;
                
                const matchesSearch = bloodGroup.includes(searchTerm);
                const matchesStatus = !statusFilter || status === statusFilter;
                
                if (matchesSearch && matchesStatus) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Utility Functions
        function refreshStocks() {
            const btn = document.getElementById('refreshBtn');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<i class="bi bi-arrow-clockwise me-1 spin"></i>Actualisation...';
            btn.disabled = true;
            
            // Add spin animation
            const style = document.createElement('style');
            style.textContent = '.spin { animation: spin 1s linear infinite; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
            document.head.appendChild(style);
            
            setTimeout(() => {
                // Simulate data refresh
                MedicalAgent.bloodStock.forEach(stock => {
                    stock.lastUpdate = new Date().toISOString();
                });
                
                populateBloodStocks();
                
                btn.innerHTML = originalContent;
                btn.disabled = false;
                
                document.head.removeChild(style);
                showNotification('Stocks actualisés avec succès!', 'success');
            }, 2000);
        }

        function printStockReport() {
            const printWindow = window.open('', '_blank');
            const currentDate = formatDateTime();
            
            let stockRows = '';
            MedicalAgent.bloodStock.forEach(stock => {
                const expiryDate = new Date(stock.expiry).toLocaleDateString('fr-FR');
                stockRows += `
                    <tr>
                        <td>${stock.group}</td>
                        <td>${stock.quantity}</td>
                        <td>${stock.status}</td>
                        <td>${expiryDate}</td>
                        <td>${stock.location}</td>
                    </tr>
                `;
            });
            
            const printContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Rapport de Stock - ${currentDate}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .header { text-align: center; margin-bottom: 30px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                        .status-bon { background-color: #d4edda; }
                        .status-faible { background-color: #fff3cd; }
                        .status-critique { background-color: #f8d7da; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>Rapport de Stock des Poches de Sang</h1>
                        <p>Généré le: ${currentDate}</p>
                        <p>Agent: ${MedicalAgent.currentAgent}</p>
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Groupe Sanguin</th>
                                <th>Quantité</th>
                                <th>Statut</th>
                                <th>Date d'Expiration</th>
                                <th>Localisation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${stockRows}
                        </tbody>
                    </table>
                    
                    <div style="margin-top: 30px;">
                        <p><strong>Résumé:</strong></p>
                        <p>Total poches en stock: ${MedicalAgent.bloodStock.reduce((sum, stock) => sum + stock.quantity, 0)}</p>
                        <p>Stocks critiques: ${MedicalAgent.bloodStock.filter(s => s.status === 'Critique').length}</p>
                        <p>Stocks faibles: ${MedicalAgent.bloodStock.filter(s => s.status === 'Faible').length}</p>
                    </div>
                </body>
                </html>
            `;
            
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.print();
        }

        function printDonationReceipt() {
            if (MedicalAgent.donations.length === 0) return;
            
            const lastDonation = MedicalAgent.donations[MedicalAgent.donations.length - 1];
            const printWindow = window.open('', '_blank');
            
            const printContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Reçu de Don - ${lastDonation.firstName} ${lastDonation.lastName}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e74c3c; padding-bottom: 20px; }
                        .info-section { margin: 20px 0; }
                        .info-row { display: flex; justify-content: space-between; margin: 10px 0; }
                        .thank-you { background-color: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center; margin-top: 30px; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🩸 Reçu de Don de Sang</h1>
                        <p>Centre de Transfusion Sanguine</p>
                    </div>
                    
                    <div class="info-section">
                        <h3>Informations du Donneur</h3>
                        <div class="info-row">
                            <span><strong>Nom:</strong> ${lastDonation.firstName} ${lastDonation.lastName}</span>
                            <span><strong>Date:</strong> ${formatDateTime(new Date(lastDonation.timestamp))}</span>
                        </div>
                        <div class="info-row">
                            <span><strong>Groupe Sanguin:</strong> ${lastDonation.bloodGroup}</span>
                            <span><strong>Âge:</strong> ${calculateAge(lastDonation.birthDate)} ans</span>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3>Détails du Don</h3>
                        <div class="info-row">
                            <span><strong>Type de don:</strong> ${lastDonation.donationType}</span>
                            <span><strong>Quantité:</strong> ${lastDonation.quantity} mL</span>
                        </div>
                        <div class="info-row">
                            <span><strong>Agent responsable:</strong> ${lastDonation.agent}</span>
                            <span><strong>Statut:</strong> ${lastDonation.status}</span>
                        </div>
                    </div>
                    
                    <div class="thank-you">
                        <h3>Merci pour votre générosité !</h3>
                        <p>Votre don peut sauver jusqu'à 3 vies. Prenez soin de vous et n'oubliez pas de vous hydrater.</p>
                        <p><small>Prochain don possible à partir du: ${new Date(new Date(lastDonation.timestamp).getTime() + 56 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR')}</small></p>
                    </div>
                </body>
                </html>
            `;
            
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.print();
        }

        function editDonation() {
            // In a real application, this would open an edit form
            showNotification('Fonctionnalité d\'édition à implémenter', 'info');
        }

        // Real-time updates simulation
        function startRealTimeUpdates() {
            setInterval(() => {
                // Simulate stock changes
                const randomStock = MedicalAgent.bloodStock[Math.floor(Math.random() * MedicalAgent.bloodStock.length)];
                const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
                
                if (randomStock.quantity + change >= 0) {
                    randomStock.quantity = Math.max(0, randomStock.quantity + change);
                    randomStock.lastUpdate = new Date().toISOString();
                    
                    // Update status based on new quantity
                    if (randomStock.quantity >= 200) randomStock.status = 'Bon';
                    else if (randomStock.quantity >= 100) randomStock.status = 'Faible';
                    else randomStock.status = 'Critique';
                    
                    // Update total stock
                    MedicalAgent.stats.totalStock = MedicalAgent.bloodStock.reduce((sum, stock) => sum + stock.quantity, 0);
                    
                    // Update displays if on stocks tab
                    if (document.getElementById('stocks-tab').classList.contains('active')) {
                        populateBloodStocks();
                    }
                    
                    updateStats();
                }
            }, 30000); // Update every 30 seconds
        }

        // Keyboard shortcuts
        function setupKeyboardShortcuts() {
            document.addEventListener('keydown', function(e) {
                // Ctrl/Cmd + Enter to submit form
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    const activeTab = document.querySelector('.tab-pane.active');
                    if (activeTab && activeTab.id === 'donation') {
                        const form = document.getElementById('donationForm');
                        if (form.checkValidity()) {
                            e.preventDefault();
                            handleDonationSubmission();
                        }
                    }
                }
                
                // Ctrl/Cmd + R to refresh stocks
                if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
                    const activeTab = document.querySelector('.tab-pane.active');
                    if (activeTab && activeTab.id === 'stocks') {
                        e.preventDefault();
                        refreshStocks();
                    }
                }
                
                // Escape to close modals
                if (e.key === 'Escape') {
                    const openModals = document.querySelectorAll('.modal.show');
                    openModals.forEach(modal => {
                        bootstrap.Modal.getInstance(modal)?.hide();
                    });
                }
            });
        }

        // Tab change handler
        function setupTabHandlers() {
            const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');
            tabs.forEach(tab => {
                tab.addEventListener('shown.bs.tab', function(e) {
                    const targetId = e.target.getAttribute('data-bs-target').substring(1);
                    
                    switch(targetId) {
                        case 'stocks':
                            populateBloodStocks();
                            setupSearchFilters();
                            break;
                        case 'history':
                            updateHistoryTable();
                            break;
                        case 'donation':
                            updateStats();
                            break;
                    }
                });
            });
        }

        // Form validation enhancement
        function enhanceFormValidation() {
            const form = document.getElementById('donationForm');
            const inputs = form.querySelectorAll('input[required], select[required]');
            
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.value && this.checkValidity()) {
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                    } else if (this.value) {
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                    }
                });
                
                input.addEventListener('input', function() {
                    if (this.classList.contains('is-invalid') && this.checkValidity()) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    }
                });
            });
            
            // Custom validation for blood pressure
            const bpInput = document.getElementById('bloodPressure');
            bpInput.addEventListener('blur', function() {
                const bpPattern = /^\d{2,3}\/\d{2,3}$/;
                if (this.value && !bpPattern.test(this.value)) {
                    this.setCustomValidity('Format attendu: 120/80');
                    this.classList.add('is-invalid');
                } else {
                    this.setCustomValidity('');
                    if (this.value) this.classList.add('is-valid');
                }
            });
            
            // Custom validation for age
            const birthDateInput = document.getElementById('donorBirthDate');
            birthDateInput.addEventListener('change', function() {
                const age = calculateAge(this.value);
                if (age < 18) {
                    this.setCustomValidity('Le donneur doit être âgé d\'au moins 18 ans');
                    this.classList.add('is-invalid');
                    showNotification('Le donneur doit être âgé d\'au moins 18 ans', 'warning');
                } else if (age > 70) {
                    this.setCustomValidity('Le donneur ne peut pas être âgé de plus de 70 ans');
                    this.classList.add('is-invalid');
                    showNotification('Le donneur ne peut pas être âgé de plus de 70 ans', 'warning');
                } else {
                    this.setCustomValidity('');
                    this.classList.add('is-valid');
                }
            });
        }

        // Auto-save form data
        function setupAutoSave() {
            const form = document.getElementById('donationForm');
            const inputs = form.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    const formData = {};
                    const currentFormData = new FormData(form);
                    
                    for (let [key, value] of currentFormData.entries()) {
                        formData[key] = value;
                    }
                    
                    // In a real application, you would save to localStorage or send to server
                    console.log('Auto-saving form data...', formData);
                });
            });
        }

        // Error handling
        function setupErrorHandling() {
            window.addEventListener('error', function(e) {
                console.error('Application error:', e.error);
                showNotification('Une erreur s\'est produite. Veuillez actualiser la page si le problème persiste.', 'danger');
            });
            
            // Handle unhandled promise rejections
            window.addEventListener('unhandledrejection', function(e) {
                console.error('Unhandled promise rejection:', e.reason);
                showNotification('Erreur de traitement des données. Veuillez réessayer.', 'danger');
            });
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            try {
                initializeApp();
                setupTabHandlers();
                setupKeyboardShortcuts();
                enhanceFormValidation();
                setupAutoSave();
                setupErrorHandling();
                startRealTimeUpdates();
                
                // Show welcome message
                setTimeout(() => {
                    showNotification(`Bienvenue, ${MedicalAgent.currentAgent}! Interface prête.`, 'success');
                }, 1000);
                
            } catch (error) {
                console.error('Initialization error:', error);
                showNotification('Erreur d\'initialisation de l\'application', 'danger');
            }
        });

        // Service Worker registration for offline functionality
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // In a production environment, you would register a service worker here
                console.log('Service worker support detected - offline functionality available');
            });
        }

        // Performance monitoring
        window.addEventListener('load', function() {
            if (window.performance && window.performance.timing) {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`Application load time: ${loadTime}ms`);
                
                // Log performance metrics in a real application
                if (loadTime > 3000) {
                    console.warn('Slow application load detected');
                }
            }
        });