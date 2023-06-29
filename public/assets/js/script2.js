

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
    document.getElementById("about").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
about.addEventListener('mouseout', () => {
    document.getElementById("about").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});

jobs.addEventListener('mouseover', () => {
    document.getElementById("jobs").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
jobs.addEventListener('mouseout', () => {
    document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});

trainings.addEventListener('mouseover', () => {
    document.getElementById("trainings").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
trainings.addEventListener('mouseout', () => {
    document.getElementById("trainings").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});

skills.addEventListener('mouseover', () => {
    document.getElementById("skills").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
skills.addEventListener('mouseout', () => {
    document.getElementById("skills").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});

hobbies.addEventListener('mouseover', () => {
    document.getElementById("hobbies").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
hobbies.addEventListener('mouseout', () => {
    document.getElementById("hobbies").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});

soft_skills.addEventListener('mouseover', () => {
    document.getElementById("soft_skills").classList.add('ShadowScaleCenter', 'bg-light', 'scale-up-center');
});
soft_skills.addEventListener('mouseout', () => {
    document.getElementById("soft_skills").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
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

//------------- TRAINING --------//
title_training.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-12 border-bottom border-2 border_blue fs-5 py-2">
                RNCP 31114, Niveau 5, Bac+2
            </div>
            <div class="col-12 pt-5 text-start">
                1. Développer la partie front-end d'une application Web ou Web Mobile en intégrant les recommandations
                de sécurité
            </div>
            <div class="col-12 pt-5 text-start">
                2. Développer la partie back-end d'une application Web ou Web Mobile en intégrant les recommandations de
                sécurité
            </div>
        </div>
    `;
        profile_card.classList.remove('scale-out-hor-right', 'bg-light');
        profile_card.classList.add('scale-in-hor-right', 'bg-light');
    });
});

//------------- ABOUT ---------//
about.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
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
        document.getElementById("about").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
    });
});


//------------- JOBS ---------//
jobs.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
        <div class="row">
            <div class="col-12 border-bottom border-2 border_blue fs-3">
                Emplois
            </div>
            <div class="col-12">
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center ">
                        <img src="public/assets/img/2017_today.jpg" class="date_rotate"
                            alt="2017 à ce jour - Développeur Web, Responsable E-learning">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                                Développeur Web, Responsable E-learning
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center">
                        <img src="public/assets/img/2012_today.jpg" class="date_rotate"
                            alt="2012 à ce jour - Technicien SAV en téléphonie mobile">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                                Technicien SAV en téléphonie mobile
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center">
                        <img src="public/assets/img/2011_2012.jpg" class="date_rotate"
                            alt="2011/2012 - Responsable SAV en informatique">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                                Responsable SAV en informatique
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                XXB Consulting / Numéricable, Perpignan
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center py-4">
                    <div id="job_more" class="col-12 text-center font_card_small fst-italic">
                        En savoir plus...
                    </div>
                </div>
            </div>
        </div>
    `;
        //------------- JOBS MORE ---------//
        job_more.addEventListener('click', () => {
            main.innerHTML = `
        <div class="row">
            <div class="col-12 border-bottom border-2 border_blue fs-3">
                Emplois
            </div>
            <div class="col-11 offset-lg-1">
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2017_today.jpg" class="photo_date"
                            alt="2017 à ce jour - Développeur Web, Responsable E-learning">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Développeur Web, Responsable E-learning
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2012_today.jpg" class="photo_date"
                            alt="2012 à ce jour - Technicien SAV en téléphonie mobile">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Technicien SAV en téléphonie mobile
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2011_2012.jpg" class="photo_date"
                            alt="2011/2012 - Responsable SAV en informatique">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Responsable SAV en informatique
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                XXB Consulting / Numéricable, Perpignan
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
            </div>
        </div>`;

        });

        profile_card.classList.remove('scale-out-hor-right', 'bg-light');
        profile_card.classList.add('scale-in-hor-right', 'bg-light');
        document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
    });
});



//------------- TRAININGS ---------//
trainings.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
        <div class="row">
            <div class="col-12 border-bottom border-2 border_blue fs-3">
                Formations
            </div>
            <div class="col-12">
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center ">
                        <img src="public/assets/img/2022.jpg" class="date_rotate"
                            alt="2022 - Développeur Web / Web mobile">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                                Développeur Web / Web Mobile
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                La Manu, Amiens
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center">
                        <img src="public/assets/img/2002.jpg" class="date_rotate"
                            alt="2002 - Baccalauréat Sciences et techniques de laboratoire (spécialité Biochimie, Génie biologique)">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                            Baccalauréat Sciences et techniques de laboratoire<br><span class="font_card_small">(spécialité Biochimie Génie biologique)</span>
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                Sainet Marie de Nevers, Toulouse
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center py-4">
                    <div id="trainings_more" class="col-12 text-center font_card_small fst-italic">
                        En savoir plus...
                    </div>
                </div>
            </div>
        </div>
    `;
        //------------- TRAININGS MORE ---------//
        trainings_more.addEventListener('click', () => {
            main.innerHTML = `
        <div class="row">
            <div class="col-12 border-bottom border-2 border_blue fs-3">
                Formations
            </div>
            <div class="col-11 offset-lg-1">
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2017_today.jpg" class="photo_date"
                            alt="2017 à ce jour - Développeur Web, Responsable E-learning">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Développeur Web, Responsable E-learning
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2012_today.jpg" class="photo_date"
                            alt="2012 à ce jour - Technicien SAV en téléphonie mobile">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Technicien SAV en téléphonie mobile
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                Point Services Mobiles / Save Store, Amiens
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-3">
                    <div class="col-2 col-lg-3 py-2 align-self-center title_date">
                        <img src="public/assets/img/2011_2012.jpg" class="photo_date"
                            alt="2011/2012 - Responsable SAV en informatique">
                    </div>
                    <div class="col-10 col-lg-9 py-2">
                        <div class="row">
                            <div class="col-12 title_job fw-bold">
                                Responsable SAV en informatique
                            </div>
                            <div class="col-12 font_menu_navbar fst-italic">
                                XXB Consulting / Numéricable, Perpignan
                            </div>
                        </div>
                    </div>
                    <div class="col-12 py-2">
                        Création du site de E-learning
                    </div>
                    <div class="col-12 py-2">
                        Conception et mise en ligne de tutoriels conformes constructeurs
                    </div>
                    <div class="col-12 py-2">
                        Création d'outils de gestions (stocks, prises de commandes) et d'assistances
                        techniques
                    </div>
                </div>
            </div>
        </div>`;

        });

        profile_card.classList.remove('scale-out-hor-right', 'bg-light');
        profile_card.classList.add('scale-in-hor-right', 'bg-light');
        document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
    });
});





//------------- SKILLS ---------//
skills.addEventListener('click', () => {
    profile_card.classList.remove('scale-in-hor-right', 'bg-light');
    profile_card.classList.remove('scale-out-hor-right', 'bg-light');
    profile_card.classList.add('scale-out-hor-right', 'bg-light');
    profile_card.addEventListener('animationend', function () {
        profile_card.innerHTML = `
        <div class="row">
            <div class="col-12 border-bottom border-2 border_blue fs-3">
                Compétences
            </div>
            <div class="col-12">
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center ">
                        <img src="public/assets/img/2022.jpg" class="date_rotate"
                            alt="2022 - Développeur Web / Web mobile">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                                Développeur Web / Web Mobile
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                La Manu, Amiens
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-bottom border_blue py-4">
                    <div class="col-2 align-self-center">
                        <img src="public/assets/img/2002.jpg" class="date_rotate"
                            alt="2002 - Baccalauréat Sciences et techniques de laboratoire (spécialité Biochimie, Génie biologique)">
                    </div>
                    <div class="col-10 py-2">
                        <div class="row text-start">
                            <div class="col-12 fw-bold">
                            Baccalauréat Sciences et techniques de laboratoire<br><span class="font_card_small">(spécialité Biochimie Génie biologique)</span>
                            </div>
                            <div class="col-12 fst-italic font_card_small">
                                Sainet Marie de Nevers, Toulouse
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

        profile_card.classList.remove('scale-out-hor-right', 'bg-light');
        profile_card.classList.add('scale-in-hor-right', 'bg-light');
        document.getElementById("jobs").classList.remove('ShadowScaleCenter', 'bg-light', 'scale-up-center');
    });
});




