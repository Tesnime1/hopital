// Fonction pour détecter le mode de couleur préféré du système
function detectPreferredColorScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Fonction pour changer l'icône en fonction du mode système
  function changeFavicon() {
    const favicon = document.getElementById('favicon');
    const systemColorScheme = detectPreferredColorScheme();
    if (systemColorScheme === 'dark') {
      favicon.href = 'images/personneO.png'; // Chemin vers l'icône en mode sombre
    } else {
      favicon.href = 'images/patient.png'; // Chemin vers l'icône en mode clair
    }
  }
  
  // Appel de la fonction lors du chargement de la page
  window.onload = changeFavicon;
  
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function updateClock() {
      const now = new Date();
      const day = now.getDate();
      const dayAbbr = capitalizeFirstLetter(now.toLocaleDateString('fr-FR', { weekday: 'short' }));
      const month = capitalizeFirstLetter(now.toLocaleDateString('fr-FR', { month: 'long' }));
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    
      document.getElementById('day').textContent = day;
      document.getElementById('dayAbbr').textContent = dayAbbr;
      document.getElementById('month').textContent = month;
      document.getElementById('systemTime').textContent = time;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
  
    function toggleActive(element) {
    const navLinks = document.querySelectorAll('.nav3 a');
        
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    element.classList.add('active');
    }
  
    function toggleActive4(element) {
    const navLinks = document.querySelectorAll('.nav4 a');
        
    navLinks.forEach(link => {
      link.classList.remove('active4');
    });
  
    element.classList.add('active4');
    }
  
    // Fonction pour ouvrir la fenêtre pop-up
    function openPopupOrientation() {
        document.getElementById('popupOrientation').style.display = 'block';
    }
    // Fonction pour fermer la fenêtre pop-up
    function closePopupOrientation() {
        document.getElementById('popupOrientation').style.display = 'none';
    }
  
    // Fonction pour ouvrir la fenêtre pop-up
    function openPopupConclusion() {
     document.getElementById('popupConclusion').style.display = 'block';
  }
  // Fonction pour fermer la fenêtre pop-up
  function closePopupConclusion() {
     document.getElementById('popupConclusion').style.display = 'none';
  }
  /*
  const modal = document.querySelector("#popupOrientation");
  const openModal = document.querySelector(".openPopupOrientation");
  const closeModal = document.querySelector(".closePopupOrientation");
  
  openModal.addEventListener("click", () => {
    modal.showModal();
  });
  
  closeModal.addEventListener("click", () => {
    modal.close();
  });
  */
  
  
  
  
  
  
    function toggleActive1(element, formId) {
      const navLinks = document.querySelectorAll('.nav-DetailOrientation a');
      navLinks.forEach(link => {
          link.classList.remove('active1');
      });
      element.classList.add('active1');
  
      // Masquer tous les formulaires
      const allForms = document.querySelectorAll('form');
      allForms.forEach(form => {
          form.style.display = 'none';
      });
  
      // Afficher le formulaire correspondant
      const formToShow = document.getElementById('form-' + formId);
      if (formToShow) {
          formToShow.style.display = 'flex';
      }
  }
  
  const aujourdHui = new Date();
  const annee = aujourdHui.getFullYear();
  let mois = aujourdHui.getMonth() + 1;
  mois = mois < 10 ? '0' + mois : mois; // Pour s'assurer que le mois est sur deux chiffres
  let jour = aujourdHui.getDate();
  jour = jour < 10 ? '0' + jour : jour; // Pour s'assurer que le jour est sur deux chiffres
  
  const dateLimiteMin = `${annee}-${mois}-${jour}`; // Ajout de backticks pour la concaténation de chaînes
  
  // Définir la limite maximale du champ de date sur la date d'aujourd'hui
  document.getElementById('date_heure_mutation').setAttribute('min', dateLimiteMin);
  
  // Récupérer les éléments HTML nécessaires
  const dateNaissanceInput = document.getElementById('date_heure_mutation');
  const boutonVerifier = document.getElementById('boutonVerifier');
  const messageErreur = document.getElementById('messageErreur');
  
  // Fonction pour vérifier la date de naissance et afficher le message d'erreur si nécessaire
  function verifierDateNaissance() {
    const dateNaissance = new Date(dateNaissanceInput.value);
  
    // Vérifier si la date de naissance est antérieure à aujourd'hui
    if (dateNaissance < aujourdHui) {
      messageErreur.style.display = 'block';
    } else {
      messageErreur.style.display = 'none';
    }
  }
  
  // Ajouter un écouteur d'événement au bouton de vérification
  boutonVerifier.addEventListener('click', verifierDateNaissance);
  