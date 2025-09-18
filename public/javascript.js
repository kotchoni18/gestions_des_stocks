

        // Global Application State
        const BloodBankAdmin = {
            currentSection: 'dashboard',
            data: {
                users: [
                    { 
                        id: 1, 
                        firstName: 'Marie', 
                        lastName: 'Dubois', 
                        email: 'marie.dubois@hopital.fr', 
                        role: 'Médecin', 
                        department: 'Hématologie',
                        status: 'Actif', 
                        lastLogin: '2024-09-17 14:30',
                        phone: '01.23.45.67.89'
                    },
                    { 
                        id: 2, 
                        firstName: 'Jean', 
                        lastName: 'Martin', 
                        email: 'jean.martin@labo.fr', 
                        role: 'Technicien', 
                        department: 'Laboratoire',
                        status: 'Actif', 
                        lastLogin: '2024-09-17 10:15',
                        phone: '01.23.45.67.90'
                    },
                    { 
                        id: 3, 
                        firstName: 'Sophie', 
                        lastName: 'Laurent', 
                        email: 'sophie.laurent@banque.fr', 
                        role: 'Laboratin', 
                        department: 'Laboratoire',
                        status: 'Inactif', 
                        lastLogin: '2024-09-10 16:20',
                        phone: '01.23.45.67.91'
                    },
                    { 
                        id: 4, 
                        firstName: 'Pierre', 
                        lastName: 'Moreau', 
                        email: 'pierre.moreau@hopital.fr', 
                        role: 'Médecin', 
                        department: 'Hématologie',
                        status: 'Actif', 
                        lastLogin: '2024-09-17 09:45',
                        phone: '01.23.45.67.92'
                    },
                    { 
                        id: 5, 
                        firstName: 'Claire', 
                        lastName: 'Durand', 
                        email: 'claire.durand@collecte.fr', 
                        role: 'Infirmier', 
                        department: 'Collecte',
                        status: 'Actif', 
                        lastLogin: '2024-09-16 18:30',
                        phone: '01.23.45.67.93'
                    }
                ],
                bloodStock: [
                    { 
                        id: 1, 
                        group: 'A+', 
                        quantity: 245, 
                        collectDate: '2024-09-10',
                        expiry: '2024-10-15', 
                        status: 'Bon', 
                        location: 'Frigo A-1',
                        temperature: 4.2,
                        lastUpdate: '2024-09-17 08:30'
                    },
                    { 
                        id: 2, 
                        group: 'O-', 
                        quantity: 89, 
                        collectDate: '2024-09-08',
                        expiry: '2024-09-25', 
                        status: 'Critique', 
                        location: 'Frigo B-2',
                        temperature: 3.9,
                        lastUpdate: '2024-09-17 07:15'
                    },
                    { 
                        id: 3, 
                        group: 'B+', 
                        quantity: 156, 
                        collectDate: '2024-09-12',
                        expiry: '2024-11-02', 
                        status: 'Bon', 
                        location: 'Frigo A-2',
                        temperature: 4.1,
                        lastUpdate: '2024-09-17 09:20'
                    },
                    { 
                        id: 4, 
                        group: 'AB-', 
                        quantity: 23, 
                        collectDate: '2024-09-05',
                        expiry: '2024-09-30', 
                        status: 'Faible', 
                        location: 'Frigo C-1',
                        temperature: 4.0,
                        lastUpdate: '2024-09-16 16:45'
                    },
                    { 
                        id: 5, 
                        group: 'O+', 
                        quantity: 312, 
                        collectDate: '2024-09-13',
                        expiry: '2024-10-20', 
                        status: 'Bon', 
                        location: 'Frigo A-3',
                        temperature: 4.3,
                        lastUpdate: '2024-09-17 11:10'
                    },
                    { 
                        id: 6, 
                        group: 'A-', 
                        quantity: 78, 
                        collectDate: '2024-09-06',
                        expiry: '2024-09-28', 
                        status: 'Critique', 
                        location: 'Frigo B-1',
                        temperature: 3.8,
                        lastUpdate: '2024-09-17 06:50'
                    },
                    { 
                        id: 7, 
                        group: 'B-', 
                        quantity: 134, 
                        collectDate: '2024-09-11',
                        expiry: '2024-10-25', 
                        status: 'Bon', 
                        location: 'Frigo A-4',
                        temperature: 4.1,
                        lastUpdate: '2024-09-17 10:30'
                    },
                    { 
                        id: 8, 
                        group: 'AB+', 
                        quantity: 67, 
                        collectDate: '2024-09-09',
                        expiry: '2024-09-30', 
                        status: 'Faible', 
                        location: 'Frigo C-2',
                        temperature: 4.2,
                        lastUpdate: '2024-09-17 12:15'
                    }
                ],
                alerts: [
                    { 
                        id: 1,
                        type: 'danger', 
                        title: 'Stock Critique',
                        message: 'Stock O- critique: seulement 89 poches restantes', 
                        time: '2024-09-17 14:30',
                        priority: 'high'
                    },
                    { 
                        id: 2,
                        type: 'warning', 
                        title: 'Expiration Proche',
                        message: 'Expiration prochaine: 45 poches expirent dans 7 jours', 
                        time: '2024-09-17 09:15',
                        priority: 'medium'
                    },
                    { 
                        id: 3,
                        type: 'info', 
                        title: 'Nouveaux Utilisateurs',
                        message: '5 nouveaux utilisateurs inscrits cette semaine', 
                        time: '2024-09-16 16:00',
                        priority: 'low'
                    },
                    { 
                        id: 4,
                        type: 'success', 
                        title: 'Collecte Réussie',
                        message: 'Nouvelle collecte: 45 poches ajoutées au stock', 
                        time: '2024-09-17 11:45',
                        priority: 'low'
                    }
                ]
            },
            charts: {}
        };

        // Utility Functions
        function formatDate(dateString) {
            return new Date(dateString).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `alert alert-${type} notification alert-dismissible fade show`;
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'danger' ? 'exclamation-triangle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>
                    <span>${message}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 5000);
        }

        function updatePageTitle(section) {
            const titles = {
                dashboard: { title: 'Tableau de Bord', subtitle: 'Vue d\'ensemble du système' },
                users: { title: 'Gestion des Utilisateurs', subtitle: 'Gérer les accès et permissions' },
                stock: { title: 'Gestion des Stocks', subtitle: 'Inventaire et suivi des poches' },
                analytics: { title: 'Analytics et Rapports', subtitle: 'Analyses détaillées et tendances' },
                settings: { title: 'Paramètres Système', subtitle: 'Configuration générale' }
            };
            
            document.getElementById('pageTitle').textContent = titles[section].title;
            document.getElementById('pageSubtitle').textContent = titles[section].subtitle;
        }

        // Navigation Functions
        function initNavigation() {
            document.querySelectorAll('[data-section]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const section = link.getAttribute('data-section');
                    showSection(section);
                });
            });

            // Mobile menu toggle
            document.getElementById('menuToggle').addEventListener('click', () => {
                document.getElementById('sidebar').classList.toggle('show');
            });

            // Close mobile menu on outside click
            document.addEventListener('click', (e) => {
                const sidebar = document.getElementById('sidebar');
                const menuToggle = document.getElementById('menuToggle');
                
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('show');
                }
            });
        }

        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update navigation
            document.querySelectorAll('[data-section]').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });

            // Update page title
            updatePageTitle(sectionId);
            
            // Close mobile menu
            document.getElementById('sidebar').classList.remove('show');
            
            // Update current section
            BloodBankAdmin.currentSection = sectionId;

            // Initialize section-specific functionality
            switch(sectionId) {
                case 'dashboard':
                    initDashboard();
                    break;
                case 'users':
                    populateUsersTable();
                    break;
                case 'stock':
                    populateStockTable();
                    break;
                case 'analytics':
                    initAnalyticsCharts();
                    break;
            }
        }

        // Dashboard Functions
        function initDashboard() {
            updateCurrentTime();
            populateBloodGroups();
            populateAlerts();
            initDashboardCharts();
            updateStatistics();
            
            // Update time every minute
            setInterval(updateCurrentTime, 60000);
        }

        function updateCurrentTime() {
            const now = new Date();
            document.getElementById('currentTime').textContent = now.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        function updateStatistics() {
            // Calculate and update statistics
            const totalUsers = BloodBankAdmin.data.users.length;
            const totalStock = BloodBankAdmin.data.bloodStock.reduce((sum, item) => sum + item.quantity, 0);
            const criticalStock = BloodBankAdmin.data.bloodStock.filter(item => item.status === 'Critique').length;
            const todayDonations = 45; // This would come from today's data in a real app

            document.getElementById('totalUsers').textContent = totalUsers.toLocaleString();
            document.getElementById('totalStock').textContent = totalStock.toLocaleString();
            document.getElementById('criticalStock').textContent = criticalStock;
            document.getElementById('todayDonations').textContent = todayDonations;
        }

        function populateBloodGroups() {
            const container = document.getElementById('bloodGroupsContainer');
            const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
            
            container.innerHTML = '';
            
            bloodGroups.forEach(group => {
                const stock = BloodBankAdmin.data.bloodStock.find(s => s.group === group);
                const quantity = stock ? stock.quantity : 0;
                const status = stock ? stock.status : 'Vide';
                
                let colorClass = 'blood-o';
                if (group.includes('A') && !group.includes('AB')) colorClass = 'blood-a';
                else if (group.includes('B') && !group.includes('AB')) colorClass = 'blood-b';
                else if (group.includes('AB')) colorClass = 'blood-ab';
                
                let statusClass = '';
                switch (status) {
                    case 'Bon': statusClass = 'status-bon'; break;
                    case 'Faible': statusClass = 'status-faible'; break;
                    case 'Critique': statusClass = 'status-critique'; break;
                    default: statusClass = 'bg-secondary text-white';
                }
                
                const col = document.createElement('div');
                col.className = 'col-lg-3 col-md-4 col-sm-6 mb-3';
                col.innerHTML = `
                    <div class="blood-group-container">
                        <div class="blood-group-circle ${colorClass}" onclick="viewBloodGroupDetails('${group}')">
                            ${group}
                            ${quantity > 0 ? `<div class="quantity-badge">${quantity > 99 ? '99+' : quantity}</div>` : ''}
                        </div>
                        <h6 class="mb-1 fw-bold">${quantity} poches</h6>
                        <span class="status-badge ${statusClass}">${status}</span>
                    </div>
                `;
                container.appendChild(col);
            });
        }

        function populateAlerts() {
            const container = document.getElementById('alertsContainer');
            container.innerHTML = '';
            
            if (BloodBankAdmin.data.alerts.length === 0) {
                container.innerHTML = `
                    <div class="text-center text-muted py-4">
                        <i class="bi bi-check-circle display-4"></i>
                        <p class="mt-2">Aucune alerte active</p>
                    </div>
                `;
                return;
            }
            
            BloodBankAdmin.data.alerts.forEach(alert => {
                const alertDiv = document.createElement('div');
                alertDiv.className = `alert alert-${alert.type} alert-modern border-${alert.type} mb-3`;
                alertDiv.innerHTML = `
                    <div class="d-flex justify-content-between align-items-start">
                        <div class="flex-grow-1">
                            <div class="d-flex align-items-center mb-1">
                                <i class="bi bi-${alert.type === 'danger' ? 'exclamation-triangle' : 
                                                    alert.type === 'warning' ? 'clock' : 
                                                    alert.type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
                                <strong>${alert.title}</strong>
                                <span class="badge bg-${alert.priority === 'high' ? 'danger' : alert.priority === 'medium' ? 'warning' : 'info'} ms-2">
                                    ${alert.priority === 'high' ? 'Urgent' : alert.priority === 'medium' ? 'Moyen' : 'Info'}
                                </span>
                            </div>
                            <p class="mb-1">${alert.message}</p>
                            <small class="text-muted">${formatDate(alert.time)}</small>
                        </div>
                        <button type="button" class="btn-close" onclick="dismissAlert(${alert.id})"></button>
                    </div>
                `;
                container.appendChild(alertDiv);
            });
        }

        function initDashboardCharts() {
            // Stock Evolution Chart
            const stockCtx = document.getElementById('stockChart').getContext('2d');
            if (BloodBankAdmin.charts.stockChart) {
                BloodBankAdmin.charts.stockChart.destroy();
            }
            
            BloodBankAdmin.charts.stockChart = new Chart(stockCtx, {
                type: 'line',
                data: {
                    labels: ['Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre'],
                    datasets: [{
                        label: 'Stock Total',
                        data: [2100, 2300, 2800, 2650, 2900, 2856],
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0,0,0,0.1)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Group Distribution Chart
            const groupCtx = document.getElementById('groupChart').getContext('2d');
            if (BloodBankAdmin.charts.groupChart) {
                BloodBankAdmin.charts.groupChart.destroy();
            }

            const groupData = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => {
                const stock = BloodBankAdmin.data.bloodStock.find(s => s.group === group);
                return stock ? stock.quantity : 0;
            });

            BloodBankAdmin.charts.groupChart = new Chart(groupCtx, {
                type: 'doughnut',
                data: {
                    labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                    datasets: [{
                        data: groupData,
                        backgroundColor: [
                            '#ff6b6b', '#ee5a24', '#4834d4', '#686de0',
                            '#130f40', '#30336b', '#eb4d4b', '#c0392b'
                        ],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }

        function initAnalyticsCharts() {
            // Monthly Chart
            const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
            if (BloodBankAdmin.charts.monthlyChart) {
                BloodBankAdmin.charts.monthlyChart.destroy();
            }
            
            BloodBankAdmin.charts.monthlyChart = new Chart(monthlyCtx, {
                type: 'bar',
                data: {
                    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                    datasets: [{
                        label: 'Dons Collectés',
                        data: [120, 145, 165, 140],
                        backgroundColor: 'rgba(102, 126, 234, 0.8)',
                        borderColor: '#667eea',
                        borderWidth: 2
                    }, {
                        label: 'Dons Utilisés',
                        data: [90, 110, 130, 120],
                        backgroundColor: 'rgba(16, 185, 129, 0.8)',
                        borderColor: '#10b981',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Yearly Chart
            const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');
            if (BloodBankAdmin.charts.yearlyChart) {
                BloodBankAdmin.charts.yearlyChart.destroy();
            }
            
            BloodBankAdmin.charts.yearlyChart = new Chart(yearlyCtx, {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Dons Annuels',
                        data: [15000, 16500, 18000, 17200, 19500],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Forecast Chart
            const forecastCtx = document.getElementById('forecastChart').getContext('2d');
            if (BloodBankAdmin.charts.forecastChart) {
                BloodBankAdmin.charts.forecastChart.destroy();
            }
            
            BloodBankAdmin.charts.forecastChart = new Chart(forecastCtx, {
                type: 'line',
                data: {
                    labels: ['Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
                    datasets: [{
                        label: 'Prévision Stock',
                        data: [2800, 2950, 3100, 2900, 3200, 3350],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Demande Prévue',
                        data: [2600, 2700, 2850, 2750, 2900, 3000],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Users Management Functions
        function populateUsersTable(filteredUsers = null) {
            const tbody = document.getElementById('usersTableBody');
            const users = filteredUsers || BloodBankAdmin.data.users;
            
            tbody.innerHTML = '';
            
            if (users.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center text-muted py-4">
                            <i class="bi bi-person-x display-4"></i>
                            <p class="mt-2">Aucun utilisateur trouvé</p>
                        </td>
                    </tr>
                `;
                return;
            }
            
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" 
                                 style="width: 45px; height: 45px; font-weight: bold; font-size: 1.2rem;">
                                ${user.firstName.charAt(0)}${user.lastName.charAt(0)}
                            </div>
                            <div>
                                <div class="fw-bold">${user.firstName} ${user.lastName}</div>
                                <small class="text-muted">${user.email}</small>
                                <br><small class="text-muted">${user.department}</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge bg-secondary">${user.role}</span>
                    </td>
                    <td>
                        <span class="badge ${user.status === 'Actif' ? 'bg-success' : user.status === 'Suspendu' ? 'bg-warning' : 'bg-secondary'}">
                            ${user.status}
                        </span>
                    </td>
                    <td>
                        <small>${formatDate(user.lastLogin)}</small>
                    </td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary btn-action" onclick="viewUser(${user.id})" title="Voir">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-success btn-action" onclick="editUser(${user.id})" title="Modifier">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger btn-action" onclick="deleteUser(${user.id})" title="Supprimer">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function setupUserSearch() {
            const userSearch = document.getElementById('userSearch');
            const roleFilter = document.getElementById('roleFilter');
            const statusFilter = document.getElementById('statusFilter');
            
            function filterUsers() {
                const searchTerm = userSearch.value.toLowerCase();
                const roleValue = roleFilter.value;
                const statusValue = statusFilter.value;
                
                let filteredUsers = BloodBankAdmin.data.users.filter(user => {
                    const matchesSearch = 
                        user.firstName.toLowerCase().includes(searchTerm) || 
                        user.lastName.toLowerCase().includes(searchTerm) ||
                        user.email.toLowerCase().includes(searchTerm) ||
                        user.department.toLowerCase().includes(searchTerm);
                    const matchesRole = !roleValue || user.role === roleValue;
                    const matchesStatus = !statusValue || user.status === statusValue;
                    
                    return matchesSearch && matchesRole && matchesStatus;
                });
                
                populateUsersTable(filteredUsers);
            }
            
            userSearch.addEventListener('input', filterUsers);
            roleFilter.addEventListener('change', filterUsers);
            statusFilter.addEventListener('change', filterUsers);
        }

        // Stock Management Functions
        function populateStockTable(filteredStock = null) {
            const tbody = document.getElementById('stockTableBody');
            const stock = filteredStock || BloodBankAdmin.data.bloodStock;
            
            tbody.innerHTML = '';
            
            if (stock.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="7" class="text-center text-muted py-4">
                            <i class="bi bi-box-seam display-4"></i>
                            <p class="mt-2">Aucun stock trouvé</p>
                        </td>
                    </tr>
                `;
                return;
            }
            
            stock.forEach(item => {
                let colorClass = 'blood-o';
                if (item.group.includes('A') && !item.group.includes('AB')) colorClass = 'blood-a';
                else if (item.group.includes('B') && !item.group.includes('AB')) colorClass = 'blood-b';
                else if (item.group.includes('AB')) colorClass = 'blood-ab';
                
                let statusClass = '';
                switch (item.status) {
                    case 'Bon': statusClass = 'bg-success'; break;
                    case 'Faible': statusClass = 'bg-warning text-dark'; break;
                    case 'Critique': statusClass = 'bg-danger'; break;
                    default: statusClass = 'bg-secondary';
                }
                
                // Calculate days until expiry
                const daysUntilExpiry = Math.ceil((new Date(item.expiry) - new Date()) / (1000 * 60 * 60 * 24));
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="blood-group-circle ${colorClass} me-3" style="width: 50px; height: 50px; font-size: 1rem;">
                                ${item.group}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="fw-bold fs-5">${item.quantity}</div>
                        <small class="text-muted">poches</small>
                    </td>
                    <td>
                        <div>${new Date(item.expiry).toLocaleDateString('fr-FR')}</div>
                        <small class="text-muted ${daysUntilExpiry <= 7 ? 'text-danger fw-bold' : ''}">
                            ${daysUntilExpiry > 0 ? `Dans ${daysUntilExpiry} jours` : 'Expiré'}
                        </small>
                    </td>
                    <td>
                        <span class="badge ${statusClass}">${item.status}</span>
                    </td>
                    <td>
                        <div class="fw-bold">${item.location}</div>
                        <small class="text-muted">${item.temperature}°C</small>
                    </td>
                    <td>
                        <small>${formatDate(item.lastUpdate)}</small>
                    </td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary btn-action" onclick="viewStock(${item.id})" title="Détails">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-success btn-action" onclick="editStock(${item.id})" title="Modifier">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger btn-action" onclick="deleteStock(${item.id})" title="Supprimer">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function setupStockSearch() {
            const stockSearch = document.getElementById('stockSearch');
            
            stockSearch.addEventListener('input', () => {
                const searchTerm = stockSearch.value.toLowerCase();
                const filteredStock = BloodBankAdmin.data.bloodStock.filter(item => 
                    item.group.toLowerCase().includes(searchTerm) ||
                    item.location.toLowerCase().includes(searchTerm)
                );
                populateStockTable(filteredStock);
            });
        }

        // Filter Functions
        function filterStock(type) {
            let filteredStock;
            
            switch (type) {
                case 'critique':
                    filteredStock = BloodBankAdmin.data.bloodStock.filter(item => item.status === 'Critique');
                    break;
                case 'expiration':
                    const oneWeekFromNow = new Date();
                    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
                    filteredStock = BloodBankAdmin.data.bloodStock.filter(item => 
                        new Date(item.expiry) <= oneWeekFromNow
                    );
                    break;
                case 'bon':
                    filteredStock = BloodBankAdmin.data.bloodStock.filter(item => item.status === 'Bon');
                    break;
                case 'all':
                default:
                    filteredStock = BloodBankAdmin.data.bloodStock;
                    break;
            }
            
            populateStockTable(filteredStock);
        }

        function resetUserFilters() {
            document.getElementById('userSearch').value = '';
            document.getElementById('roleFilter').value = '';
            document.getElementById('statusFilter').value = '';
            populateUsersTable();
        }

        // CRUD Functions
        function viewUser(id) {
            const user = BloodBankAdmin.data.users.find(u => u.id === id);
            if (user) {
                const details = `
                    Nom: ${user.firstName} ${user.lastName}
                    Email: ${user.email}
                    Téléphone: ${user.phone}
                    Rôle: ${user.role}
                    Département: ${user.department}
                    Statut: ${user.status}
                    Dernière connexion: ${formatDate(user.lastLogin)}
                `;
                alert(details);
            }
        }

        function editUser(id) {
            const user = BloodBankAdmin.data.users.find(u => u.id === id);
            if (user) {
                // In a real application, you would populate a modal form
                const newName = prompt('Nouveau prénom:', user.firstName);
                if (newName && newName.trim()) {
                    user.firstName = newName.trim();
                    populateUsersTable();
                    showNotification('Utilisateur modifié avec succès!', 'success');
                }
            }
        }

        function deleteUser(id) {
            if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.')) {
                BloodBankAdmin.data.users = BloodBankAdmin.data.users.filter(u => u.id !== id);
                populateUsersTable();
                showNotification('Utilisateur supprimé avec succès!', 'success');
                updateStatistics();
            }
        }

        function viewStock(id) {
            const stock = BloodBankAdmin.data.bloodStock.find(s => s.id === id);
            if (stock) {
                const details = `
                    Groupe sanguin: ${stock.group}
                    Quantité: ${stock.quantity} poches
                    Date de collecte: ${new Date(stock.collectDate).toLocaleDateString('fr-FR')}
                    Date d'expiration: ${new Date(stock.expiry).toLocaleDateString('fr-FR')}
                    Localisation: ${stock.location}
                    Température: ${stock.temperature}°C
                    Statut: ${stock.status}
                    Dernière mise à jour: ${formatDate(stock.lastUpdate)}
                `;
                alert(details);
            }
        }

        function editStock(id) {
            const stock = BloodBankAdmin.data.bloodStock.find(s => s.id === id);
            if (stock) {
                const newQuantity = prompt('Nouvelle quantité:', stock.quantity);
                if (newQuantity && !isNaN(newQuantity) && newQuantity >= 0) {
                    stock.quantity = parseInt(newQuantity);
                    stock.lastUpdate = new Date().toISOString();
                    
                    // Update status based on new quantity
                    if (stock.quantity < 50) stock.status = 'Critique';
                    else if (stock.quantity < 100) stock.status = 'Faible';
                    else stock.status = 'Bon';
                    
                    populateStockTable();
                    populateBloodGroups();
                    updateStatistics();
                    showNotification('Stock modifié avec succès!', 'success');
                }
            }
        }

        function deleteStock(id) {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce stock ? Cette action est irréversible.')) {
                BloodBankAdmin.data.bloodStock = BloodBankAdmin.data.bloodStock.filter(s => s.id !== id);
                populateStockTable();
                populateBloodGroups();
                updateStatistics();
                showNotification('Stock supprimé avec succès!', 'success');
            }
        }

        function viewBloodGroupDetails(group) {
            const stock = BloodBankAdmin.data.bloodStock.find(s => s.group === group);
            if (stock) {
                viewStock(stock.id);
            } else {
                alert(`Aucun stock disponible pour le groupe ${group}`);
            }
        }

        function dismissAlert(id) {
            BloodBankAdmin.data.alerts = BloodBankAdmin.data.alerts.filter(alert => alert.id !== id);
            populateAlerts();
            showNotification('Alerte supprimée', 'info');
        }

        // Form Handlers
        function saveUser() {
            const form = document.getElementById('userForm');
            const formData = new FormData(form);
            
            // Basic validation
            if (!formData.get('firstName') || !formData.get('lastName') || !formData.get('email') || !formData.get('role')) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'danger');
                return;
            }
            
            const newUser = {
                id: Math.max(...BloodBankAdmin.data.users.map(u => u.id)) + 1,
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                role: formData.get('role'),
                department: formData.get('department'),
                status: 'Actif',
                lastLogin: new Date().toISOString()
            };
            
            BloodBankAdmin.data.users.push(newUser);
            populateUsersTable();
            updateStatistics();
            
            // Close modal and reset form
            bootstrap.Modal.getInstance(document.getElementById('userModal')).hide();
            form.reset();
            
            showNotification('Utilisateur créé avec succès!', 'success');
        }

        function saveStock() {
            const form = document.getElementById('stockForm');
            const formData = new FormData(form);
            
            // Basic validation
            if (!formData.get('bloodGroup') || !formData.get('quantity') || !formData.get('expiryDate') || !formData.get('location')) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'danger');
                return;
            }
            
            const quantity = parseInt(formData.get('quantity'));
            let status = 'Bon';
            if (quantity < 50) status = 'Critique';
            else if (quantity < 100) status = 'Faible';
            
            const newStock = {
                id: Math.max(...BloodBankAdmin.data.bloodStock.map(s => s.id)) + 1,
                group: formData.get('bloodGroup'),
                quantity: quantity,
                collectDate: formData.get('collectDate'),
                expiry: formData.get('expiryDate'),
                status: status,
                location: formData.get('location'),
                temperature: parseFloat(formData.get('temperature')) || 4.0,
                lastUpdate: new Date().toISOString()
            };
            
            // Check if stock for this blood group already exists
            const existingStock = BloodBankAdmin.data.bloodStock.find(s => s.group === newStock.group);
            if (existingStock) {
                existingStock.quantity += quantity;
                existingStock.lastUpdate = new Date().toISOString();
                // Update status based on new total quantity
                if (existingStock.quantity < 50) existingStock.status = 'Critique';
                else if (existingStock.quantity < 100) existingStock.status = 'Faible';
                else existingStock.status = 'Bon';
            } else {
                BloodBankAdmin.data.bloodStock.push(newStock);
            }
            
            populateStockTable();
            populateBloodGroups();
            updateStatistics();
            
            // Close modal and reset form
            bootstrap.Modal.getInstance(document.getElementById('stockModal')).hide();
            form.reset();
            
            showNotification('Stock ajouté avec succès!', 'success');
        }

        // Export Functions
        function exportStock() {
            showNotification('Export en cours...', 'info');
            
            // Simulate export process
            setTimeout(() => {
                const csvContent = generateStockCSV();
                downloadCSV(csvContent, 'stock-sanguin.csv');
                showNotification('Export terminé avec succès!', 'success');
            }, 2000);
        }

        function generateStockCSV() {
            const headers = ['Groupe Sanguin', 'Quantité', 'Date Collecte', 'Date Expiration', 'Statut', 'Localisation', 'Température'];
            const rows = BloodBankAdmin.data.bloodStock.map(stock => [
                stock.group,
                stock.quantity,
                stock.collectDate,
                stock.expiry,
                stock.status,
                stock.location,
                stock.temperature
            ]);
            
            return [headers, ...rows].map(row => row.join(',')).join('\n');
        }

        function downloadCSV(content, filename) {
            const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }

        // Refresh Functions
        function refreshBloodGroups() {
            showNotification('Actualisation des données...', 'info');
            setTimeout(() => {
                populateBloodGroups();
                showNotification('Données actualisées!', 'success');
            }, 1000);
        }

        function refreshAnalytics() {
            showNotification('Actualisation des analytics...', 'info');
            setTimeout(() => {
                initAnalyticsCharts();
                showNotification('Analytics actualisés!', 'success');
            }, 1500);
        }

        // Real-time Updates Simulation
        function startRealTimeUpdates() {
            setInterval(() => {
                // Simulate random stock changes
                if (BloodBankAdmin.data.bloodStock.length > 0) {
                    const randomStock = BloodBankAdmin.data.bloodStock[
                        Math.floor(Math.random() * BloodBankAdmin.data.bloodStock.length)
                    ];
                    
                    const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
                    randomStock.quantity = Math.max(0, randomStock.quantity + change);
                    randomStock.lastUpdate = new Date().toISOString();
                    
                    // Update status based on new quantity
                    if (randomStock.quantity < 50) randomStock.status = 'Critique';
                    else if (randomStock.quantity < 100) randomStock.status = 'Faible';
                    else randomStock.status = 'Bon';
                    
                    // Update displays if on relevant sections
                    if (BloodBankAdmin.currentSection === 'dashboard') {
                        populateBloodGroups();
                        updateStatistics();
                    }
                    if (BloodBankAdmin.currentSection === 'stock') {
                        populateStockTable();
                    }
                }
            }, 60000); // Update every minute
        }

        // Initialize Application
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize navigation
            initNavigation();
            
            // Initialize dashboard (default section)
            initDashboard();
            
            // Setup search functionality
            setupUserSearch();
            setupStockSearch();
            
            // Setup form handlers
            document.getElementById('userForm').addEventListener('submit', function(e) {
                e.preventDefault();
                saveUser();
            });
            
            document.getElementById('stockForm').addEventListener('submit', function(e) {
                e.preventDefault();
                saveStock();
            });
            
            // Start real-time updates
            startRealTimeUpdates();
            
            // Show welcome message
            setTimeout(() => {
                showNotification('Bienvenue dans l\'interface d\'administration!', 'success');
            }, 1000);
        });

        // Responsive chart handling
        window.addEventListener('resize', function() {
            Object.values(BloodBankAdmin.charts).forEach(chart => {
                if (chart && typeof chart.resize === 'function') {
                    chart.resize();
                }
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const activeSearch = document.querySelector(`#${BloodBankAdmin.currentSection} input[type="text"]`);
                if (activeSearch) {
                    activeSearch.focus();
                }
            }
            
            // Escape to close modals
            if (e.key === 'Escape') {
                const openModals = document.querySelectorAll('.modal.show');
                openModals.forEach(modal => {
                    bootstrap.Modal.getInstance(modal).hide();
                });
            }
        });

        // Auto-save form data (in real app, this would save to localStorage or server)
        function autoSaveFormData() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    input.addEventListener('input', () => {
                        // In a real application, you would implement auto-save here
                        console.log('Auto-saving form data...');
                    });
                });
            });
        }

        // Dark mode toggle (bonus feature)
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        }

        // Initialize dark mode from localStorage
        function initDarkMode() {
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
            }
        }

        // Performance monitoring
        function logPerformance() {
            if (window.performance && window.performance.timing) {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            }
        }

        // Error handling
        window.addEventListener('error', function(e) {
            console.error('Application error:', e.error);
            showNotification('Une erreur s\'est produite. Veuillez actualiser la page.', 'danger');
        });

        // Service worker registration (for offline functionality in production)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // In a real application, you would register a service worker here
                console.log('Service worker support detected');
            });
        }

        // Initialize performance monitoring
        window.addEventListener('load', logPerformance);
        
        // Initialize auto-save
        document.addEventListener('DOMContentLoaded', autoSaveFormData);
