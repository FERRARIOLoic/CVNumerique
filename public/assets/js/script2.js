

//------------- NAVBAR HIDE ---------//
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.add('navbarScrollShow');
        document.getElementById("navbar").classList.remove('navbarScrollHide');
    } else {
        document.getElementById("navbar").classList.add('navbarScrollHide');
        document.getElementById("navbar").classList.remove('navbarScrollShow');
        document.getElementById("navbarSupportedContent").classList.remove('show');
    }
    prevScrollpos = currentScrollPos;
}


//------------- ADDEVENTLISTENER ONMOUSEOVER ---------//
about.addEventListener('mouseover', () => {
    document.getElementById("about").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
about.addEventListener('mouseout', () => {
    document.getElementById("about").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});

jobs.addEventListener('mouseover', () => {
    document.getElementById("jobs").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
jobs.addEventListener('mouseout', () => {
    document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});

trainings.addEventListener('mouseover', () => {
    document.getElementById("trainings").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
trainings.addEventListener('mouseout', () => {
    document.getElementById("trainings").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});

skills.addEventListener('mouseover', () => {
    document.getElementById("skills").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
skills.addEventListener('mouseout', () => {
    document.getElementById("skills").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});

hobbies.addEventListener('mouseover', () => {
    document.getElementById("hobbies").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
hobbies.addEventListener('mouseout', () => {
    document.getElementById("hobbies").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});

soft_skills.addEventListener('mouseover', () => {
    document.getElementById("soft_skills").classList.add('ShadowScaleCenter', 'bg-light','scale-up-center');
});
soft_skills.addEventListener('mouseout', () => {
    document.getElementById("soft_skills").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
});


//!------------- ONCLICK --------//

//------------- PHOTO --------//
photo_profile.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
        <img src="public/assets/img/loic.jpg" class="photo_profile" alt="Ma photo">
    `;
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-in-hor-right');
    });
});

//------------- ABOUT ---------//
about.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
    <div class="row  justify-content-center">
        <div class="col-11 border-bottom border-2 border_blue fs-4 py-2">
            A propos de moi
        </div>
        <div class="col-12 py-2">
            Passionné d'informatique et curieux de nature, j'ai créé et développe depuis 6 ans le site de
            formation interne de l'entreprise pour laquelle j'exerce en parallèle le métier de Technicien
            SAV Mobile.
        </div>
        <div class="col-12 py-2">

            Initialement autodidacte, j'ai entrepris une formation de Développeur Web / Web Mobile au sein
            de la Manu d'Amiens afin d'actualiser mes connaissances et me perfectionner en HTML, CSS,
            Javascript, PHP, Bootstrap...
        </div>

        <div class="col-12 py-2">
            Mon objectif est d'exercer désormais ce métier de développeur web à temps complet
        </div>
    </div>
    `;
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-in-hor-right', 'bg-light');
    document.getElementById("about").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
    });
});


//------------- JOBS ---------//
jobs.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
    <div class="row  justify-content-center">
        <div class="col-11 border-bottom border-2 border_blue fs-4 py-3">
            Emplois
        </div>
        <div class="col-12 py-2">
            Passionné d'informatique et curieux de nature, j'ai créé et développe depuis 6 ans le site de
            formation interne de l'entreprise pour laquelle j'exerce en parallèle le métier de Technicien
            SAV Mobile.
        </div>
        <div class="col-12 py-2">

            Initialement autodidacte, j'ai entrepris une formation de Développeur Web / Web Mobile au sein
            de la Manu d'Amiens afin d'actualiser mes connaissances et me perfectionner en HTML, CSS,
            Javascript, PHP, Bootstrap...
        </div>

        <div class="col-12 py-2">
            Mon objectif est d'exercer désormais ce métier de développeur web à temps complet
        </div>
    </div>
    `;
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-in-hor-right', 'bg-light');
    document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light','scale-up-center');
    });
});

