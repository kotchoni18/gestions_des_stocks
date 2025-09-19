<!--
=========================================================
* Material Dashboard 3 - v3.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://www.creative-tim.com/license)
* Coded by Creative Tim

=========================================================-->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interface Admin - Banque de Sang</title>
    <link rel="stylesheet" href="style.css">
    <!-- Bootstrap CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css">  
    <style>
       
    </style>
</head>
<body>
    <!-- Mobile Menu Button -->
    <button class="btn btn-primary d-md-none position-fixed" id="menuToggle" 
            style="top: 20px; left: 20px; z-index: 1001; border-radius: 50%; width: 50px; height: 50px;">
        <i class="bi bi-list"></i>
    </button>

    <div class="d-flex">
        <!-- Sidebar -->
        <nav class="sidebar" id="sidebar">
            <div class="p-3">
                <div class="text-center mb-4">
                    <h4 class="text-white mb-0">
                        <i class="bi bi-droplet-fill text-danger me-2"></i>
                       BloodBank Admin
                    </h4>
                </div>
                
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" data-section="dashboard">
                            <i class="bi bi-speedometer2"></i>
                            Tableau de Bord
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="users">
                            <i class="bi bi-people"></i>
                            Utilisateurs
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="stock">
                            <i class="bi bi-box"></i>
                            Gestion des Stocks
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="analytics">
                            <i class="bi bi-graph-up"></i>
                            Analytics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="settings">
                            <i class="bi bi-gear"></i>
                            Paramètres
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Header -->
            <header class="header d-flex justify-content-between align-items-center">
                <div>
                    <h2 class="mb-0" id="pageTitle">Tableau de Bord</h2>
                    <small class="text-muted" id="pageSubtitle">Vue d'ensemble du système</small>
                </div>
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <span class="badge bg-primary" id="currentTime"></span>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle me-2"></i>
                            Administrateur
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Mon Profil</a></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-bell me-2"></i>Notifications</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <!-- Content Wrapper -->
            <div class="content-wrapper">
                
                <!-- Dashboard Section -->
                <section id="dashboard" class="content-section active">
                    <!-- Statistics Cards -->
                    <div class="row mb-4">
                        <div class="col-lg-3 col-md-6 mb-3">
                            <div class="card stat-card">
                                <div class="card-body text-center position-relative">
                                    <i class="bi bi-people stat-icon mb-3 d-block"></i>
                                    <h3 class="fw-bold mb-1" id="totalUsers">1,247</h3>
                                    <p class="mb-1">Utilisateurs Actifs</p>
                                    <small class="opacity-75">+12% ce mois</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-3">
                            <div class="card stat-card success">
                                <div class="card-body text-center position-relative">
                                    <i class="bi bi-droplet stat-icon mb-3 d-block"></i>
                                    <h3 class="fw-bold mb-1" id="totalStock">2,856</h3>
                                    <p class="mb-1">Poches en Stock</p>
                                    <small class="opacity-75">Stock total disponible</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-3">
                            <div class="card stat-card warning">
                                <div class="card-body text-center position-relative">
                                    <i class="bi bi-exclamation-triangle stat-icon mb-3 d-block"></i>
                                    <h3 class="fw-bold mb-1" id="criticalStock">12</h3>
                                    <p class="mb-1">Stocks Critiques</p>
                                    <small class="opacity-75">Nécessitent attention</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-3">
                            <div class="card stat-card info">
                                <div class="card-body text-center position-relative">
                                    <i class="bi bi-activity stat-icon mb-3 d-block"></i>
                                    <h3 class="fw-bold mb-1" id="todayDonations">45</h3>
                                    <p class="mb-1">Dons Aujourd'hui</p>
                                    <small class="opacity-75">Nouvelles collectes</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Blood Groups Overview -->
                    <div class="row mb-4">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-gradient text-white d-flex justify-content-between align-items-center"
                                     style="background: var(--primary-gradient);">
                                    <h5 class="mb-0">
                                        <i class="bi bi-droplet-fill me-2"></i>
                                        Stock par Groupe Sanguin
                                    </h5>
                                    <button class="btn btn-sm btn-light" onclick="refreshBloodGroups()">
                                        <i class="bi bi-arrow-clockwise me-1"></i>Actualiser
                                    </button>
                                </div>
                                <div class="card-body">
                                    <div class="row" id="bloodGroupsContainer">
                                        <div class="col-12 text-center">
                                            <div class="loading">
                                                <div class="spinner"></div>
                                                <span class="ms-2">Chargement des données...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Charts Row -->
                    <div class="row mb-4">
                        <div class="col-lg-8 mb-3">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h6 class="mb-0">
                                        <i class="bi bi-graph-up me-2"></i>
                                        Évolution des Stocks (6 derniers mois)
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <canvas id="stockChart" height="100"></canvas>
                                </div>
                            </div>
                        </div>


                        <!-- Demand Forecast -->
                        <div class="col-lg-8 mb-4">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h6 class="mb-0">
                                        <i class="bi bi-graph-down-arrow me-2"></i>
                                        Prévisions de Demande (3 prochains mois)
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <canvas id="forecastChart" height="150"></canvas>
                                </div>
                            </div>
                        </div>

                        
                </section>

                <!-- Settings Section -->
                <section id="settings" class="content-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3>Paramètres Système</h3>
                            <p class="text-muted mb-0">Configuration générale du système</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0">Configuration Générale</h5>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Seuil Stock Critique</label>
                                                <input type="number" class="form-control" value="50">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Seuil Stock Faible</label>
                                                <input type="number" class="form-control" value="100">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Délai d'Expiration (jours)</label>
                                                <input type="number" class="form-control" value="7">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Fréquence Notifications</label>
                                                <select class="form-select">
                                                    <option>Quotidienne</option>
                                                    <option>Hebdomadaire</option>
                                                    <option>Mensuelle</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-custom">Enregistrer les Modifications</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0">Actions Système</h5>
                                </div>
                                <div class="card-body">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-outline-primary btn-custom">
                                            <i class="bi bi-database me-2"></i>Sauvegarde Base
                                        </button>
                                        <button class="btn btn-outline-warning btn-custom">
                                            <i class="bi bi-arrow-clockwise me-2"></i>Réinitialiser Cache
                                        </button>
                                        <button class="btn btn-outline-info btn-custom">
                                            <i class="bi bi-file-text me-2"></i>Exporter Logs
                                        </button>
                                        <button class="btn btn-outline-success btn-custom">
                                            <i class="bi bi-shield-check me-2"></i>Test Sécurité
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                    <div>       
                        <div>    
                            <div>
                                <div>   
                                    <h6>  <i class="bi bi-pie-chart me-2"></i>
                                        Répartition par Groupe
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <canvas id="groupChart" height="200"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

             

                <!-- Users Section -->
                <section id="users" class="content-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3>Gestion des Utilisateurs</h3>
                            <p class="text-muted mb-0">Gérer les accès et permissions du système</p>
                        </div>
                        <button class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#userModal">
                            <i class="bi bi-plus me-2"></i>Nouvel Utilisateur
                        </button>
                    </div>

                    <!-- Search and Filters -->
                    <div class="search-container">
                        <div class="row align-items-end">
                            <div class="col-md-4">
                                <label class="form-label">Rechercher</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bi bi-search"></i>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Nom, email..." id="userSearch">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Rôle</label>
                                <select class="form-select" id="roleFilter">
                                    <option value="">Tous les rôles</option>
                                    <option value="Médecin">Médecin</option>
                                    <option value="Technicien">Technicien</option>
                                    <option value="Laboratin">Laboratin</option>
                                    <option value="Infirmier">Infirmier</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Statut</label>
                                <select class="form-select" id="statusFilter">
                                    <option value="">Tous les statuts</option>
                                    <option value="Actif">Actif</option>
                                    <option value="Inactif">Inactif</option>
                                    <option value="Suspendu">Suspendu</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-outline-secondary w-100" onclick="resetUserFilters()">
                                    <i class="bi bi-arrow-clockwise"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Users Table -->
                    <div class="table-container">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Utilisateur</th>
                                        <th>Rôle</th>
                                        <th>Statut</th>
                                        <th>Dernière Connexion</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="usersTableBody">
                                    <!-- Users will be populated by JavaScript -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- Stock Section -->
                <section id="stock" class="content-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3>Gestion des Stocks</h3>
                            <p class="text-muted mb-0">Inventaire et suivi des poches de sang</p>
                        </div>
                        <div>
                            <button class="btn btn-success btn-custom me-2" onclick="exportStock()">
                                <i class="bi bi-download me-2"></i>Exporter
                            </button>
                            <button class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#stockModal">
                                <i class="bi bi-plus me-2"></i>Ajouter Stock
                            </button>
                        </div>
                    </div>

                    <!-- Quick Filters -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="d-flex flex-wrap gap-2 align-items-center">
                                <span class="fw-bold me-3">Filtres rapides:</span>
                                <button class="btn btn-outline-danger btn-sm" onclick="filterStock('critique')">
                                    <i class="bi bi-exclamation-triangle me-1"></i>Stock Critique
                                </button>
                                <button class="btn btn-outline-warning btn-sm" onclick="filterStock('expiration')">
                                    <i class="bi bi-clock me-1"></i>Expiration Proche
                                </button>
                                <button class="btn btn-outline-success btn-sm" onclick="filterStock('bon')">
                                    <i class="bi bi-check-circle me-1"></i>Stock Bon
                                </button>
                                <button class="btn btn-outline-primary btn-sm" onclick="filterStock('all')">
                                    <i class="bi bi-list me-1"></i>Voir Tout
                                </button>
                                <div class="ms-auto">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text">
                                            <i class="bi bi-search"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Rechercher groupe..." id="stockSearch">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stock Table -->
                    <div class="table-container">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Groupe Sanguin</th>
                                        <th>Quantité Disponible</th>
                                        <th>Date d'Expiration</th>
                                        <th>Statut</th>
                                        <th>Localisation</th>
                                        <th>Dernière MAJ</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="stockTableBody">
                                    <!-- Stock will be populated by JavaScript -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- Analytics Section -->
                <section id="analytics" class="content-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3>Analytics et Rapports</h3>
                            <p class="text-muted mb-0">Analyses détaillées et tendances</p>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary btn-custom me-2" onclick="refreshAnalytics()">
                                <i class="bi bi-arrow-clockwise me-2"></i>Actualiser
                            </button>
                            <button class="btn btn-primary btn-custom">
                                <i class="bi bi-file-earmark-pdf me-2"></i>Rapport PDF
                            </button>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Monthly Trends -->
                        <div class="col-lg-6 mb-4">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h6 class="mb-0">
                                        <i class="bi bi-calendar-month me-2"></i>
                                        Tendances Mensuelles
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <canvas id="monthlyChart" height="200"></canvas>
                                </div>
                            </div>
                        </div>

                       
        </main>
    </div>

    <!-- User Modal -->
    <div class="modal fade" id="userModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ajouter un Nouvel Utilisateur</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="userForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Prénom</label>
                                <input type="text" class="form-control" name="firstName" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Nom</label>
                                <input type="text" class="form-control" name="lastName" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" name="email" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Téléphone</label>
                                <input type="tel" class="form-control" name="phone">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Rôle</label>
                                <select class="form-select" name="role" required>
                                    <option value="">Sélectionner un rôle</option>
                                    <option value="Médecin">Médecin</option>
                                    <option value="Technicien">Technicien</option>
                                    <option value="Laboratin">Laboratin</option>
                                    <option value="Infirmier">Infirmier</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Département</label>
                                <select class="form-select" name="department">
                                    <option value="">Sélectionner département</option>
                                    <option value="Hématologie">Hématologie</option>
                                    <option value="Laboratoire">Laboratoire</option>
                                    <option value="Collecte">Collecte</option>
                                    <option value="Administration">Administration</option>
                                </select>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="form-label">Mot de passe temporaire</label>
                                <input type="password" class="form-control" name="password" required>
                                <small class="text-muted">L'utilisateur devra changer ce mot de passe à sa première connexion</small>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary" onclick="saveUser()">Créer l'Utilisateur</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Stock Modal -->
    <div class="modal fade" id="stockModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ajouter du Stock</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="stockForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Groupe Sanguin</label>
                                <select class="form-select" name="bloodGroup" required>
                                    <option value="">Sélectionner un groupe</option>
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
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Quantité (poches)</label>
                                <input type="number" class="form-control" name="quantity" min="1" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Date de Collecte</label>
                                <input type="date" class="form-control" name="collectDate" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Date d'Expiration</label>
                                <input type="date" class="form-control" name="expiryDate" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Localisation</label>
                                <input type="text" class="form-control" name="location" placeholder="Ex: Frigo A-1" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Température (°C)</label>
                                <input type="number" class="form-control" name="temperature" value="4" step="0.1">
                            </div>
                            <div class="col-12 mb-3">
                                <label class="form-label">Notes</label>
                                <textarea class="form-control" name="notes" rows="3" placeholder="Notes additionnelles..."></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary" onclick="saveStock()">Ajouter au Stock</button>
                </div>
            </div>
        </div>
    </div>
           <!-- Recent Alerts -->
                    <div class="card">
                        <div class="card-header bg-warning text-dark">

                        </div>
                        <div class="card-body" id="alertsContainer">
                            <!-- Alerts will be populated by JavaScript -->
                        </div>
                    </div>
                </section>
    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="javascript.js"></script>
    <script src="js/bootstrap.bundle.js"></script>
    <script src="js/bootstrap.js"></script>

</body>
</html> 

