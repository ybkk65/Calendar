document.addEventListener("DOMContentLoaded", function() {
    const plusIcon = document.getElementById('plus');
    const shareIcon = document.getElementById('share');
    const formulaireSection = document.getElementById('formulaire');
    const partagerSection = document.getElementById('partager');
    const closeIcon = document.querySelector('.fa-x');
    const closeShareIcon = document.querySelector('#partager .fa-x');
    const messSection = document.querySelector('.mess');
    const formulaireForm = document.querySelector('#formulaire form');

    // Fonction pour cacher tous les éléments sauf un
    function cacherTousSauf(element) {
        const tousLesSections = [formulaireSection, partagerSection, messSection];
        tousLesSections.forEach(section => {
            if (section !== element) {
                section.style.display = 'none';
            }
        });
    }

    plusIcon.addEventListener('click', function() {
        cacherTousSauf(formulaireSection);
        formulaireSection.style.display = 'block';
        formulaireSection.style.top = '-650px';
    });

    closeIcon.addEventListener('click', function() {
        formulaireSection.style.display = 'none';
    });

    shareIcon.addEventListener('click', function() {
        cacherTousSauf(partagerSection);
        partagerSection.style.display = 'block';
        partagerSection.style.top = '-420px';
    });

    closeShareIcon.addEventListener('click', function() {
        partagerSection.style.display = 'none';
    });

    const elements = document.querySelectorAll('.click');

    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            cacherTousSauf(messSection);
            messSection.style.display = 'block';
            messSection.style.top = '-550px';
        });
    });

    const closeMessIcon = document.querySelector('.mess .fa-x');

    closeMessIcon.addEventListener('click', function() {
        messSection.style.display = 'none';
    });

    formulaireForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Pour empêcher le formulaire de se soumettre normalement
        cacherTousSauf(null); // Cacher tous les éléments
        // Récupérer les valeurs du formulaire
        const titre = formulaireForm.querySelector('#titre').value;
        const description = formulaireForm.querySelector('#description').value;
        const dateDebut = formulaireForm.querySelector('#date_debut').value;
        const dateFin = formulaireForm.querySelector('#date_fin').value;

        // Créer les éléments HTML pour les informations du formulaire
        const newDivSecond = document.createElement('div');
        newDivSecond.classList.add('second');
        const newP = document.createElement('p');
        newP.textContent = "16:00";
        const newDivClick = document.createElement('div');
        newDivClick.classList.add('click');
        const newDivEv4 = document.createElement('div');
        newDivEv4.id = 'ev4';

        const newH5 = document.createElement('h5');
        newH5.textContent = titre;
        const newPDescription = document.createElement('p');
        newPDescription.textContent = description;
        const newPTime = document.createElement('p');
        newPTime.textContent = `Début : ${dateDebut}, Fin : ${dateFin}`;

        // Assembler les éléments
        newDivEv4.appendChild(newH5);
        newDivEv4.appendChild(newPDescription);
        newDivEv4.appendChild(newPTime);
        newDivClick.appendChild(newDivEv4);
        newDivSecond.appendChild(newP);
        newDivSecond.appendChild(newDivClick);

        // Insérer les nouveaux éléments juste avant la dernière div avec la classe 'seconde'
        const calendarTodaySection = document.querySelector('.calendar-today');
        const lastSecondeDiv = calendarTodaySection.querySelector('.seconde');
        calendarTodaySection.insertBefore(newDivSecond, lastSecondeDiv);

        // Réinitialiser le formulaire
        formulaireForm.reset();

        // Cacher la section du formulaire après soumission
        formulaireSection.style.display = 'none';
    });
});


function genererJours(ulElement, nombreJours) {
    for (let i = 1; i <= nombreJours; i++) {
      let li = document.createElement("li");
      li.textContent = i;
      ulElement.appendChild(li);
    }
  }

  // Appel de la fonction pour chaque mois avec le nombre de jours correspondant
  genererJours(document.getElementById("janvier"), 31);
  genererJours(document.getElementById("fevrier"), 28); // Attention : non pris en compte pour les années bissextiles
  genererJours(document.getElementById("mars"), 31);
  genererJours(document.getElementById("avril"), 30);
  genererJours(document.getElementById("mai"), 31);
  genererJours(document.getElementById("juin"), 30);
  genererJours(document.getElementById("juillet"), 31);
  genererJours(document.getElementById("aout"), 31);
  genererJours(document.getElementById("septembre"), 30);
  genererJours(document.getElementById("octobre"), 31);
  genererJours(document.getElementById("novembre"), 30);
  genererJours(document.getElementById("decembre"), 31); 


  function allerVersPage(mois) {
    window.location.href = 'index.html' ;
   
  }