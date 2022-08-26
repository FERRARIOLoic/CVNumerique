
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


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top > 0 &&
        rect.left > 0 &&
        rect.bottom < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right < (window.innerWidth || document.documentElement.clientWidth)

    );
}

const boxPresentation = document.querySelector('#boxPresentation');
document.addEventListener('scroll', function () {
    if (isInViewport(boxPresentation)) {
        document.getElementById("boxPresentation").classList.add('fadeInCenter');
        document.getElementById("boxPresentation").classList.remove('fadeFromBottom');
    }
    else {

        document.getElementById("boxPresentation").classList.remove('fadeInCenter');
        document.getElementById("boxPresentation").classList.add('fadeFromBottom');

    }
}, {
    passive: true
});

const boxParcours = document.querySelector('#boxParcours');
document.addEventListener('scroll', function () {
    if (isInViewport(boxParcours)) {
        document.getElementById("boxParcours").classList.add('fadeInCenter');
        document.getElementById("boxParcours").classList.remove('fadeFromBottom');
    }
    else {

        document.getElementById("boxParcours").classList.remove('fadeInCenter');
        document.getElementById("boxParcours").classList.add('fadeFromBottom');

    }
}, {
    passive: true
});


const boxCompetences = document.querySelector('#boxCompetences');
document.addEventListener('scroll', function () {
    if (isInViewport(boxCompetences)) {
        document.getElementById("boxCompetences").classList.add('appearFromRight');
        document.getElementById("boxCompetences").classList.remove('fadeFromBottom');
    }
    else {

        document.getElementById("boxCompetences").classList.remove('appearFromRight');
        document.getElementById("boxCompetences").classList.add('fadeFromBottom');

    }
}, {
    passive: true
});


const boxRealisations = document.querySelector('#boxRealisations');
document.addEventListener('scroll', function () {
    if (isInViewport(boxRealisations)) {
        document.getElementById("boxRealisations").classList.add('appearFromRight');
        document.getElementById("boxRealisations").classList.remove('fadeFromBottom');
    }
    else {

        document.getElementById("boxRealisations").classList.remove('appearFromRight');
        document.getElementById("boxRealisations").classList.add('fadeFromBottom');

    }
}, {
    passive: true
});


const boxMore = document.querySelector('#boxMore');
document.addEventListener('scroll', function () {
    if (isInViewport(boxMore)) {
        document.getElementById("boxMore").classList.add('appearFromRight');
        document.getElementById("boxMore").classList.remove('fadeFromBottom');
    }
    else {

        document.getElementById("boxMore").classList.remove('appearFromRight');
        document.getElementById("boxMore").classList.add('fadeFromBottom');

    }
}, {
    passive: true
});


let btnMenuChoose = document.querySelectorAll('#btnMenuChoose');
btnMenuChoose.forEach(element => {
    element.addEventListener('mouseover', () => {
        // console.log(element.dataset.value);

        document.getElementById("btnMenuInfo").classList.remove('slideOutTopMenu');
        document.getElementById("btnMenuInfo").classList.add('appearFromTopMenu');
        switch (element.dataset.value) {
            case 'logo':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            &Agrave; coeur vaillant rien d'impossible
                        </p>
                    </div>
                </div>
                `;
                break;
            case 'presentation':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            Découvrez qui je suis et comment j'en suis arrivé ici
                        </p>
                    </div>
                </div>
                `;
                break;
            case 'parcours':
                btnMenuInfo.innerHTML = `
                    <div class="row jobWorkVue">
                        <div class="col-12">
                            <p>
                                Mon expériences professionnelles et mes formations...
                            </p>
                        </div>
                    </div>
                    `;
                break;
            case 'competences':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            Ce que je sais faire...
                        </p>
                    </div>
                </div>
                `;
                break;
            case 'realisations':
                btnMenuInfo.innerHTML = `
                    <div class="row jobWorkVue">
                        <div class="col-12">
                            <p>
                                Les projets que j'ai réalisé...
                            </p>
                        </div>
                    </div>
                    `;
                break;
            case 'more':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            Pour en connaître un peu plus de moi...
                        </p>
                    </div>
                </div>
                `;
                break;
            case 'contact':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            On travaille ensemble...
                        </p>
                    </div>
                </div>
                `;
                break;
        }
    })
})
btnMenuChoose.forEach(element => {
    element.addEventListener('mouseout', () => {
        document.getElementById("btnMenuInfo").classList.add('slideOutTopMenu');
        document.getElementById("btnMenuInfo").classList.remove('appearFromTopMenu');
        btnMenuInfo.innerHTML = ``;
    })
})


btnMenuChoose.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element.dataset.value);

        //fonction while case
        switch (element.dataset.value) {
            case 'presentation':
                document.getElementById("textPresentation").classList.remove('slideOutTopPresentation');
                document.getElementById("textPresentation").classList.add('appearFromTopPresentation');
                document.getElementById("jobWorkVue1").classList.add('slideOutTop1');
                document.getElementById("jobWorkVue2").classList.add('slideOutTop1');
                document.getElementById("jobWorkVue3").classList.add('slideOutTop1');
                document.getElementById("jobWorkVueS1").classList.add('slideOutTop1');
                document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
                document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
                textPresentation.innerHTML = `
                <span id="BoxTextPresentation" class="titleName">
                Passionné de nouvelles technologies et curieux de tout, le monde de l'informatique et du
                développement web m'a donc naturellement attiré et je me suis formé en HTML / PHP en
                autodidacte
                <br>
                Après 7 années de pratique, dont 5 ans professionnellement, je
                souhaite
                désormais en faire mon activité principale
                <br>
                Afin d'actualiser mes connaissances et d'avoir un
                parcours d'apprentissage professionnel, j'ai entrepris une formation de développeur Web / Web Mobile au
                sein de La Manu Amiens
                <br>
                En reconversion professionnelle, je recherche donc un emploi de Développeur Web / Web Mobile Full Stack, Front End, Back End
                </span>
                `;
                break;
            case 'experiences':
                textPresentation.innerHTML = ``;
                break;
        }
    })
})


boxPresentation.addEventListener('mouseover', () => {
    document.getElementById("textPresentation").classList.remove('slideOutTopPresentation');
    document.getElementById("textPresentation").classList.add('appearFromTopPresentation');
    document.getElementById("jobWorkVue1").classList.add('slideOutTop1');
    document.getElementById("jobWorkVue2").classList.add('slideOutTop1');
    document.getElementById("jobWorkVue3").classList.add('slideOutTop1');
    document.getElementById("jobWorkVueS1").classList.add('slideOutTop1');
    document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
    document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
    textPresentation.innerHTML = `
    <span class="textPresentation">
        Passionné de nouvelles technologies et curieux de tout, le monde de l'informatique et du
        développement web m'a donc naturellement attiré et je me suis formé en HTML / PHP en
        autodidacte
        <br>
        Après 7 années de pratique, dont 5 ans professionnellement, je
        souhaite
        désormais en faire mon activité principale
        <br>
        Afin d'actualiser mes connaissances et d'avoir un
        parcours d'apprentissage professionnel, j'ai entrepris une formation de développeur Web / Web Mobile au
        sein de La Manu Amiens
        <br>
        En reconversion professionnelle, je recherche donc un emploi de Développeur Web / Web Mobile Full Stack, Front End, Back End
        </span>
        `;
})
boxPresentation.addEventListener('mouseout', () => {
    document.getElementById("textPresentation").classList.add('slideOutTopPresentation');
    document.getElementById("textPresentation").classList.remove('appearFromTopPresentation');
})



let btnChoose = document.querySelectorAll('#btnChoose');
btnChoose.forEach(element => {
    element.addEventListener('mouseover', () => {
        // console.log(element.dataset.value);


        //fonction while case
        switch (element.dataset.value) {
            case 'job1':
                document.getElementById("jobWorkVue1").classList.add('appearFromTop');
                document.getElementById("jobWorkVue1").classList.remove('slideOutTop1');
                jobWorkVue1.innerHTML = `
                <div id="job1Text" class="jobWorkVue px-md-2">
                    <i>Diagnostics, réparations, reprogrammations de smartphones,
                    tablettes, accessoires <br>(agréments Samsung, Huawei,
                    Xiaomi, Apple)
                    <br>Conception, développement et gestion du
                    site
                    de
                    formation des boutiques en France</i>
                </div>
                `;
                break;
            case 'job2':
                document.getElementById("jobWorkVue2").classList.add('appearFromTop');
                document.getElementById("jobWorkVue2").classList.remove('slideOutTop1');
                jobWorkVue2.innerHTML = `
                <div id="job2Text" class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                        <i>Diagnostics, réparations, reprogrammations de smartphones,
                        tablettes,
                        accessoires (agréments Samsung, Sony, Nokia, Huaweï)</i>
                    </div>
                </div>
                </div>
                `;
                break;
            case 'job3':
                document.getElementById("jobWorkVue3").classList.add('appearFromTop');
                document.getElementById("jobWorkVue3").classList.remove('slideOutTop1');
                jobWorkVue3.innerHTML = `
                <div id="job3Text" class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                        <i>Assemblage, Paramétrage, Diagnostic, Réparation d'ordinateurs fixes et portables<br>
                        Installation, paramétrage des équipements Numéricable (modem, routeur, décodeur télévision)</i>
                    </div>
                </div>
                </div>
                `;
                break;
            //case school
            case 'school1':
                document.getElementById("jobWorkVueS1").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS1").classList.remove('slideOutTop1');
                jobWorkVueS1.innerHTML = `
                <div id="school1Text" class="jobWorkVue px-md-2">
                    <div class="row">
                        <div class="col-12">
                            <i>Apprentissage des langages HTML5, CSS3, Javascript, PHP8</i>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'school2':
                document.getElementById("jobWorkVueS2").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS2").classList.remove('slideOutTop1');
                jobWorkVueS2.innerHTML = `
                <div id="school2Text" class="jobWorkVue px-2">
                    <div class="row">
                        <div class="col-12">
                            <i>Apprentissage de la programmation en C#</i>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'school3':
                document.getElementById("jobWorkVueS3").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS3").classList.remove('slideOutTop1');
                jobWorkVueS3.innerHTML = `
                <div id="school3Text" class="jobWorkVue px-2">
                    <div class="row">
                        <div class="col-12">
                            <i>Spécialité Biochimie Génie Biologique</i>
                        </div>
                    </div>
                </div>
                    `;
                break;
        }
    })
}
)

btnChoose.forEach(element => {
    element.addEventListener('mouseout', () => {
        document.getElementById("jobWorkVue1").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue2").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue3").classList.remove('appearFromTop');
        document.getElementById("jobWorkVueS1").classList.remove('appearFromTop');
        document.getElementById("jobWorkVueS2").classList.remove('appearFromTop');
        document.getElementById("jobWorkVueS3").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue1").classList.add('slideOutTop1');
        document.getElementById("jobWorkVue2").classList.add('slideOutTop1');
        document.getElementById("jobWorkVue3").classList.add('slideOutTop1');
        document.getElementById("jobWorkVueS1").classList.add('slideOutTop1');
        document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
        document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
    })
})



