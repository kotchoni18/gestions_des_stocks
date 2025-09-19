<!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

    <script src="javascript2.js"></script>
</body>
</html><!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interface Agent Médical - Dons de Sang</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style2.css">
    <style>
    
    </style>
</head>
<body>
    <!-- Loading Overlay -->
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loading-spinner">
            <div class="spinner-border text-primary mb-3" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
            <p class="mb-0">Traitement en cours...</p>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="brand">
                        <i class="bi bi-heart-pulse"></i>
                        Interface Agent Médical
                    </div>
                    <small class="opacity-75">Gestion des dons et consultation des stocks</small>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="d-flex align-items-center justify-content-md-end">
                        <div class="me-3">
                            <i class="bi bi-person-circle me-2"></i>
                            <span>Dr. <span id="agentName">Marie Dubois</span></span>
                        </div>
                        <div class="badge bg-light text-dark" id="currentDateTime">
                            <!-- Date/time will be inserted here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="container my-4">
        <!-- Navigation Tabs -->
        <ul class="nav nav-pills justify-content-center mb-4" id="mainTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="donation-tab" data-bs-toggle="pill" data-bs-target="#donation" type="button" role="tab">
                    <i class="bi bi-plus-circle me-2"></i>
                    Enregistrer un Don
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="stocks-tab" data-bs-toggle="pill" data-bs-target="#stocks" type="button" role="tab">
                    <i class="bi bi-droplet me-2"></i>
                    Consulter les Stocks
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="history-tab" data-bs-toggle="pill" data-bs-target="#history" type="button" role="tab">
                    <i class="bi bi-clock-history me-2"></i>
                    Historique
                </button>
            </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="mainTabContent">
            
            <!-- Donation Registration Tab -->
            <div class="tab-pane fade show active" id="donation" role="tabpanel">
                <div class="row">
                    <!-- Stats Cards -->
                    <div class="col-12 mb-4">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-3">
                                <div class="stat-card" style="--stat-color: #e74c3c; border-top-color: #e74c3c;">
                                    <i class="bi bi-heart-fill stat-icon text-danger"></i>
                                    <div class="stat-number text-danger" id="todayDonations">0</div>
                                    <div class="stat-label">Dons Aujourd'hui</div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-3">
                                <div class="stat-card" style="--stat-color: #27ae60; border-top-color: #27ae60;">
                                    <i class="bi bi-people-fill stat-icon text-success"></i>
                                    <div class="stat-number text-success" id="totalDonors">247</div>
                                    <div class="stat-label">Donneurs Actifs</div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-3">
                                <div class="stat-card" style="--stat-color: #3498db; border-top-color: #3498db;">
                                    <i class="bi bi-droplet-fill stat-icon text-info"></i>
                                    <div class="stat-number text-info" id="totalStock">2,856</div>
                                    <div class="stat-label">Poches en Stock</div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-3">
                                <div class="stat-card" style="--stat-color: #f39c12; border-top-color: #f39c12;">
                                    <i class="bi bi-calendar-check stat-icon text-warning"></i>
                                    <div class="stat-number text-warning" id="weeklyGoal">85%</div>
                                    <div class="stat-label">Objectif Semaine</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Donation Form -->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <i class="bi bi-clipboard-heart me-2"></i>
                                    Formulaire d'Enregistrement de Don
                                </h5>
                            </div>
                            <div class="card-body">
                                <form id="donationForm">
                                    <div class="row">
                                        <!-- Donor Information -->
                                        <div class="col-12">
                                            <h6 class="text-primary mb-3">
                                                <i class="bi bi-person me-2"></i>
                                                Informations du Donneur
                                            </h6>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorFirstName" class="form-label">Prénom *</label>
                                            <input type="text" class="form-control" id="donorFirstName" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorLastName" class="form-label">Nom *</label>
                                            <input type="text" class="form-control" id="donorLastName" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorBirthDate" class="form-label">Date de Naissance *</label>
                                            <input type="date" class="form-control" id="donorBirthDate" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorGender" class="form-label">Genre *</label>
                                            <select class="form-select" id="donorGender" required>
                                                <option value="">Sélectionner</option>
                                                <option value="M">Masculin</option>
                                                <option value="F">Féminin</option>
                                                <option value="A">Autre</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorPhone" class="form-label">Téléphone *</label>
                                            <input type="tel" class="form-control" id="donorPhone" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donorEmail" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="donorEmail">
                                        </div>
                                        
                                        <!-- Medical Information -->
                                        <div class="col-12 mt-4">
                                            <h6 class="text-primary mb-3">
                                                <i class="bi bi-heart-pulse me-2"></i>
                                                Informations Médicales
                                            </h6>
                                        </div>
                                        
                                        <div class="col-md-4 mb-3">
                                            <label for="bloodGroup" class="form-label">Groupe Sanguin *</label>
                                            <select class="form-select" id="bloodGroup" required>
                                                <option value="">Sélectionner</option>
                                                <option value="A+">A+ (Rhésus positif)</option>
                                                <option value="A-">A- (Rhésus négatif)</option>
                                                <option value="B+">B+ (Rhésus positif)</option>
                                                <option value="B-">B- (Rhésus négatif)</option>
                                                <option value="AB+">AB+ (Rhésus positif)</option>
                                                <option value="AB-">AB- (Rhésus négatif)</option>
                                                <option value="O+">O+ (Rhésus positif)</option>
                                                <option value="O-">O- (Rhésus négatif)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-4 mb-3">
                                            <label for="donorWeight" class="form-label">Poids (kg) *</label>
                                            <input type="number" class="form-control" id="donorWeight" min="50" max="200" required>
                                        </div>
                                        
                                        <div class="col-md-4 mb-3">
                                            <label for="hemoglobin" class="form-label">Hémoglobine (g/dL) *</label>
                                            <input type="number" class="form-control" id="hemoglobin" min="12" max="20" step="0.1" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="bloodPressure" class="form-label">Tension Artérielle *</label>
                                            <input type="text" class="form-control" id="bloodPressure" placeholder="120/80" required>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donationType" class="form-label">Type de Don *</label>
                                            <select class="form-select" id="donationType" required>
                                                <option value="">Sélectionner</option>
                                                <option value="sang_total">Sang Total</option>
                                                <option value="plasma">Plasma</option>
                                                <option value="plaquettes">Plaquettes</option>
                                                <option value="double_rouge">Double Concentré de Globules Rouges</option>
                                            </select>
                                        </div>
                                        
                                        <!-- Additional Information -->
                                        <div class="col-12 mt-4">
                                            <h6 class="text-primary mb-3">
                                                <i class="bi bi-clipboard-data me-2"></i>
                                                Informations Complémentaires
                                            </h6>
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="lastDonation" class="form-label">Dernier Don</label>
                                            <input type="date" class="form-control" id="lastDonation">
                                        </div>
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="donationQuantity" class="form-label">Quantité Prélevée (mL) *</label>
                                            <input type="number" class="form-control" id="donationQuantity" value="450" min="200" max="500" required>
                                        </div>
                                        
                                        <div class="col-12 mb-3">
                                            <label for="medicalNotes" class="form-label">Notes Médicales</label>
                                            <textarea class="form-control" id="medicalNotes" rows="3" placeholder="Observations particulières..."></textarea>
                                        </div>
                                        
                                        <!-- Checkboxes -->
                                        <div class="col-12 mb-4">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="consentForm" required>
                                                <label class="form-check-label" for="consentForm">
                                                    Formulaire de consentement signé *
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="medicalCheck" required>
                                                <label class="form-check-label" for="medicalCheck">
                                                    Examen médical effectué *
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="eligibilityCheck" required>
                                                <label class="form-check-label" for="eligibilityCheck">
                                                    Critères d'éligibilité vérifiés *
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <!-- Buttons -->
                                        <div class="col-12">
                                            <div class="d-flex gap-3">
                                                <button type="submit" class="btn btn-primary flex-fill">
                                                    <i class="bi bi-save me-2"></i>
                                                    Enregistrer le Don
                                                </button>
                                                <button type="reset" class="btn btn-outline-secondary">
                                                    <i class="bi bi-arrow-clockwise me-2"></i>
                                                    Réinitialiser
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Info Panel -->
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h6 class="mb-0">
                                    <i class="bi bi-info-circle me-2"></i>
                                    Aperçu du Don
                                </h6>
                            </div>
                            <div class="card-body">
                                <div class="donor-preview" id="donorPreview">
                                    <!-- Preview content will be populated by JavaScript -->
                                </div>
                                <div id="emptyPreview" class="text-center text-muted py-4">
                                    <i class="bi bi-clipboard display-4"></i>
                                    <p class="mt-2">Remplissez le formulaire pour voir l'aperçu</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-header">
                                <h6 class="mb-0">
                                    <i class="bi bi-lightbulb me-2"></i>
                                    Rappels Importants
                                </h6>
                            </div>
                            <div class="card-body">
                                <div class="alert alert-info border-info">
                                    <small>
                                        <strong>Critères d'éligibilité :</strong><br>
                                        • Âge : 18-70 ans<br>
                                        • Poids : minimum 50 kg<br>
                                        • Hémoglobine : ≥12,5 g/dL (F), ≥13 g/dL (H)<br>
                                        • Délai entre dons : 8 semaines
                                    </small>
                                </div>
                                                                <div class="alert alert-warning border-warning">
                                    <small>
                                        <strong>Contre-indications :</strong><br>
                                        • Maladie infectieuse récente<br>
                                        • Traitement antibiotique<br>
                                        • Voyage en zone endémique<br>
                                        • Grossesse ou allaitement
                                    </small>
                                </div>
                            </div>
                        </div>

                                              
                                  
            <!-- Stock Consultation Tab -->
            <div class="tab-pane fade" id="stocks" role="tabpanel">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">
                                    <i class="bi bi-droplet-half me-2"></i>
                                    État des Stocks par Groupe Sanguin
                                </h5>
                                <button class="btn btn-outline-light btn-sm" onclick="refreshStocks()" id="refreshBtn">
                                    <i class="bi bi-arrow-clockwise me-1"></i>
                                    Actualiser
                                </button>
                            </div>
                            <div class="card-body">
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="bi bi-search"></i>
                                            </span>
                                            <input type="text" class="form-control" placeholder="Rechercher un groupe..." id="stockSearch">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-select" id="statusFilter">
                                            <option value="">Tous les statuts</option>
                                            <option value="Bon">Stock Bon</option>
                                            <option value="Faible">Stock Faible</option>
                                            <option value="Critique">Stock Critique</option>
                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-success w-100" onclick="printStockReport()">
                                            <i class="bi bi-printer me-2"></i>
                                            Imprimer
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="blood-group-display" id="bloodStockDisplay">
                                    <!-- Blood group cards will be populated by JavaScript -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- History Tab -->
            <div class="tab-pane fade" id="history" role="tabpanel">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <i class="bi bi-clock-history me-2"></i>
                                    Historique des Dons de la Journée
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Heure</th>
                                                <th>Donneur</th>
                                                <th>Groupe Sanguin</th>
                                                <th>Type de Don</th>
                                                <th>Quantité</th>
                                                <th>Statut</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="historyTableBody">
                                            <!-- History entries will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div id="emptyHistory" class="text-center text-muted py-5" style="display: none;">
                                    <i class="bi bi-clipboard-x display-4"></i>
                                    <p class="mt-3">Aucun don enregistré aujourd'hui</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Modal -->
    <div class="modal fade" id="successModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center py-4">
                    <i class="bi bi-check-circle-fill text-success display-4 mb-3"></i>
                    <h4 class="text-success mb-3">Don Enregistré avec Succès !</h4>
                    <p class="text-muted mb-4" id="successMessage">
                        Le don a été enregistré dans le système.
                    </p>
                    <div class="d-flex gap-2 justify-content-center">
                        <button type="button" class="btn btn-primary" onclick="printDonationReceipt()">
                            <i class="bi bi-printer me-2"></i>
                            Imprimer Reçu
                        </button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Detail Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="bi bi-eye me-2"></i>
                        Détails du Don
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" id="detailModalBody">
                    <!-- Detail content will be populated by JavaScript -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" onclick="editDonation()">
                        <i class="bi bi-pencil me-2"></i>
                        Modifier
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    </div>


</body>
</html> 