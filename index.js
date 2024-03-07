document.addEventListener("DOMContentLoaded", function() {
    const plusIcon = document.getElementById('plus');
    const formulaireSection = document.getElementById('formulaire');
    const closeIcon = document.querySelector('.fa-x');

    plusIcon.addEventListener('click', function() {
        formulaireSection.style.display = 'block';
        formulaireSection.style.top = '-650px';
    });

    closeIcon.addEventListener('click', function() {
        formulaireSection.style.display = 'none';
    });

    const elements = document.querySelectorAll('.click');

    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            const messSection = document.querySelector('.mess');
            
            messSection.style.display = 'block';
            
            messSection.style.top = '-550px';
        });
    });

    const closeMessIcon = document.querySelector('.mess .fa-x');

    closeMessIcon.addEventListener('click', function() {
        const messSection = document.querySelector('.mess');

        messSection.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const formulaireSection = document.getElementById('formulaire');
    const form = formulaireSection.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Pour empêcher le formulaire de se soumettre normalement

        // Récupérer les valeurs du formulaire
        const titre = form.querySelector('#titre').value;
        const description = form.querySelector('#description').value;
        const dateDebut = form.querySelector('#date_debut').value;
        const dateFin = form.querySelector('#date_fin').value;

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
        form.reset();

        // Cacher la section du formulaire après soumission
        formulaireSection.style.display = 'none';
    });
});
