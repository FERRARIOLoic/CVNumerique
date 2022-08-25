
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.add('navbarScrollShow');
        document.getElementById("navbar").classList.add('navbarAppear');
        document.getElementById("navbar").classList.remove('navbarScrollHide');
    } else {
        document.getElementById("navbar").classList.add('navbarScrollHide');
        document.getElementById("navbar").classList.remove('navbarScrollShow');
        document.getElementById("navbar").classList.remove('navbarAppear');
        document.getElementById("navbarSupportedContent").classList.remove('show');
    }
    prevScrollpos = currentScrollPos;
}

let btnMenuChoose = document.querySelectorAll('#btnMenuChoose');

btnMenuChoose.forEach(element => {
    element.addEventListener('mouseout', () => {
        btnMenuInfo.innerHTML = ``;
    })
})

btnMenuChoose.forEach(element => {
    element.addEventListener('mouseover', () => {
        // console.log(element.dataset.value);

        //fonction while case
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
            case 'experiences':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            Mes expériences de travail...
                        </p>
                    </div>
                </div>
                `;
                break;
            case 'formations':
                btnMenuInfo.innerHTML = `
                <div class="row jobWorkVue">
                    <div class="col-12">
                        <p>
                            Les formations que j'ai faites...
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
    element.addEventListener('click', () => {
        // console.log(element.dataset.value);

        //fonction while case
        switch (element.dataset.value) {
            case 'presentation':
                textPresentation.innerHTML = `
                <span class="titleName">
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
                document.getElementById("textPresentation").classList.remove('textPresentation');
                jobWorkVue1.innerHTML = ``;
                jobWorkVue2.innerHTML = ``;
                jobWorkVue3.innerHTML = ``;
                jobWorkVueS1.innerHTML = ``;
                jobWorkVueS2.innerHTML = ``;
                jobWorkVueS3.innerHTML = ``;
                break;
                case 'experiences':
                    textPresentation.innerHTML = ``;
                    jobWorkVue1.innerHTML = ``;
                    jobWorkVue2.innerHTML = ``;
                    jobWorkVue3.innerHTML = ``;
                    jobWorkVueS1.innerHTML = ``;
                    jobWorkVueS2.innerHTML = ``;
                    jobWorkVueS3.innerHTML = ``;
                    break;
        }
    })
})


boxPresentation.addEventListener('mouseover', () => {
    textPresentation.innerHTML = `
    <span id="textPresentationShow" class="textPresentation">
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
        document.getElementById("textPresentationShow").classList.remove('textPresentation');
})



let btnChoose = document.querySelectorAll('#btnChoose');

// btnChoose.forEach(element => {
//     element.addEventListener('mouseout', () => {
//         jobWorkVue1.innerHTML = ``;
//         jobWorkVue2.innerHTML = ``;
//         jobWorkVue3.innerHTML = ``;
//     })
// })


btnChoose.forEach(element => {
    element.addEventListener('mouseover', () => {
        // console.log(element.dataset.value);


        //fonction while case
        switch (element.dataset.value) {
            case 'job1':
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
        document.getElementById("job1Text").classList.remove('jobWorkVue');
        document.getElementById("job2Text").classList.remove('jobWorkVue');
        document.getElementById("job3Text").classList.remove('jobWorkVue');
        document.getElementById("school1Text").classList.remove('jobWorkVue');
        document.getElementById("school2Text").classList.remove('jobWorkVue');
        document.getElementById("school3Text").classList.remove('jobWorkVue');
    })


}
)

