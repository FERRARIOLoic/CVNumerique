
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


// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }

const boxPresentation = document.querySelector('#boxPresentation');
document.addEventListener('scroll', function () {
    if (isInViewport(boxPresentation)) {
        document.getElementById("boxPresentation").classList.add('fadeInCenter');
        document.getElementById("boxPresentation").classList.remove('fadeOutCenter');
    }
    else {

        document.getElementById("boxPresentation").classList.remove('fadeInCenter');
        document.getElementById("boxPresentation").classList.add('fadeOutCenter');

    }
}, {
    passive: true
});

const boxParcours = document.querySelector('#boxParcours');
document.addEventListener('scroll', function () {
    if (isInViewport(boxParcours)) {
        document.getElementById("boxParcours").classList.add('fadeInCenter');
        document.getElementById("boxParcours").classList.remove('fadeOutCenter');
        document.getElementById("parcoursFormations").classList.add('appearFromTop');
        document.getElementById("parcoursExperiences").classList.add('appearFromTop');
        document.getElementById("school1").classList.add('appearFromRight1');
        document.getElementById("schoolDate1").classList.add('appearFromBottom');
        document.getElementById("job1").classList.add('appearFromLeft2');
        document.getElementById("jobDate1").classList.add('appearFromBottom1');
        document.getElementById("job2").classList.add('appearFromLeft3');
        document.getElementById("jobDate2").classList.add('appearFromBottom2');
        document.getElementById("job3").classList.add('appearFromLeft4');
        document.getElementById("jobDate3").classList.add('appearFromBottom3');
        document.getElementById("school2").classList.add('appearFromRight5');
        document.getElementById("schoolDate2").classList.add('appearFromBottom4');
        document.getElementById("school3").classList.add('appearFromRight6');
        document.getElementById("schoolDate3").classList.add('appearFromBottom5');
    }
    else {

        document.getElementById("boxParcours").classList.remove('fadeInCenter');
        document.getElementById("boxParcours").classList.add('fadeOutCenter');
        document.getElementById("parcoursFormations").classList.remove('appearFromTop');
        document.getElementById("parcoursExperiences").classList.remove('appearFromTop');
        document.getElementById("school1").classList.remove('appearFromRight1');
        document.getElementById("schoolDate1").classList.remove('appearFromBottom');
        document.getElementById("job1").classList.remove('appearFromLeft2');
        document.getElementById("jobDate1").classList.remove('appearFromBottom1');
        document.getElementById("job2").classList.remove('appearFromLeft3');
        document.getElementById("jobDate2").classList.remove('appearFromBottom2');
        document.getElementById("job3").classList.remove('appearFromLeft4');
        document.getElementById("jobDate3").classList.remove('appearFromBottom3');
        document.getElementById("school2").classList.remove('appearFromRight5');
        document.getElementById("schoolDate2").classList.remove('appearFromBottom4');
        document.getElementById("school3").classList.remove('appearFromRight6');
        document.getElementById("schoolDate3").classList.remove('appearFromBottom5');

    }
}, {
    passive: true
});


const boxCompetences = document.querySelector('#boxCompetences');
document.addEventListener('scroll', function () {
    if (isInViewport(boxCompetences)) {
        document.getElementById("boxCompetences").classList.add('fadeInCenter');
        document.getElementById("boxCompetences").classList.remove('fadeOutBack');
        document.getElementById("html").classList.add('appearFromTop1');
        document.getElementById("htmlImg").classList.add('appearFromTop1');
        document.getElementById("css").classList.add('appearFromTop2');
        document.getElementById("cssImg").classList.add('appearFromTop2');
        document.getElementById("js").classList.add('appearFromTop3');
        document.getElementById("jsImg").classList.add('appearFromTop3');
        document.getElementById("bootstrap").classList.add('appearFromTop4');
        document.getElementById("bootstrapImg").classList.add('appearFromTop4');
        document.getElementById("mysql").classList.add('appearFromTop5');
        document.getElementById("mysqlImg").classList.add('appearFromTop5');
        document.getElementById("php").classList.add('appearFromTop6');
        document.getElementById("phpImg").classList.add('appearFromTop6');
        document.getElementById("wordpress").classList.add('appearFromTop7');
        document.getElementById("wordpressImg").classList.add('appearFromTop7');
        document.getElementById("vscode").classList.add('appearFromTop8');
        document.getElementById("vscodeImg").classList.add('appearFromTop8');
        document.getElementById("symfony").classList.add('appearFromTop9');
        document.getElementById("symfonyImg").classList.add('appearFromTop9');
    }
    else {

        document.getElementById("boxCompetences").classList.remove('fadeInCenter');
        document.getElementById("boxCompetences").classList.add('fadeOutBack');
        document.getElementById("html").classList.remove('appearFromTop1');
        document.getElementById("htmlImg").classList.remove('appearFromTop1');
        document.getElementById("css").classList.remove('appearFromTop2');
        document.getElementById("cssImg").classList.remove('appearFromTop2');
        document.getElementById("js").classList.remove('appearFromTop3');
        document.getElementById("jsImg").classList.remove('appearFromTop3');
        document.getElementById("bootstrap").classList.remove('appearFromTop4');
        document.getElementById("bootstrapImg").classList.remove('appearFromTop4');
        document.getElementById("mysql").classList.remove('appearFromTop5');
        document.getElementById("mysqlImg").classList.remove('appearFromTop5');
        document.getElementById("php").classList.remove('appearFromTop6');
        document.getElementById("phpImg").classList.remove('appearFromTop6');
        document.getElementById("wordpress").classList.remove('appearFromTop7');
        document.getElementById("wordpressImg").classList.remove('appearFromTop7');
        document.getElementById("vscode").classList.remove('appearFromTop8');
        document.getElementById("vscodeImg").classList.remove('appearFromTop8');
        document.getElementById("symfony").classList.remove('appearFromTop9');
        document.getElementById("symfonyImg").classList.remove('appearFromTop9');

    }
}, {
    passive: true
});


const boxRealisations = document.querySelector('#boxRealisations');
document.addEventListener('scroll', function () {
    if (isInViewport(boxRealisations)) {
        document.getElementById("boxRealisations").classList.add('fadeInCenter');
        document.getElementById("boxRealisations").classList.remove('fadeOutCenter');
    }
    else {

        document.getElementById("boxRealisations").classList.remove('fadeInCenter');
        document.getElementById("boxRealisations").classList.add('fadeOutCenter');

    }
}, {
    passive: true
});


const boxMore = document.querySelector('#boxMore');
document.addEventListener('scroll', function () {
    if (isInViewport(boxMore)) {
        document.getElementById("boxMore").classList.add('fadeInCenter');
        document.getElementById("boxMore").classList.remove('fadeOutCenter');
    }
    else {

        document.getElementById("boxMore").classList.remove('fadeInCenter');
        document.getElementById("boxMore").classList.add('fadeOutCenter');

    }
}, {
    passive: true
});


let btnMenuChoose = document.querySelectorAll('#btnMenuChoose');

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
    <span  class="textPresentation">
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
                document.getElementById("job1Img").classList.remove('shakeVertical');
                document.getElementById("job1Img").classList.add('flipScaleUp');
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
                    formation des boutiques</i>
                </div>
                `;
                break;
            case 'job2':
                document.getElementById("job2Img").classList.remove('shakeVertical');
                document.getElementById("job2Img").classList.add('flipScaleUp');
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
                document.getElementById("job3Img").classList.remove('shakeVertical');
                document.getElementById("job3Img").classList.add('flipScaleUp');
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
                document.getElementById("school1Img").classList.remove('shakeVertical');
                document.getElementById("school1Img").classList.add('flipScaleUp');
                document.getElementById("jobWorkVueS1").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS1").classList.remove('slideOutTop1');
                jobWorkVueS1.innerHTML = `
                <div id="school1Text" class="jobWorkVue px-md-2">
                    <div class="row text-end">
                        <div class="col-12 text-end">
                            <p><i>Apprentissage des langages HTML5, CSS3, Javascript, PHP8</i></p>
                            <p><i>Prise en main de Wordpress, Symfony</i></p>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'school2':
                document.getElementById("school2Img").classList.remove('shakeVertical');
                document.getElementById("school2Img").classList.add('flipScaleUp');
                document.getElementById("jobWorkVueS2").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS2").classList.remove('slideOutTop1');
                jobWorkVueS2.innerHTML = `
                <div id="school2Text" class="jobWorkVue px-2">
                    <div class="row">
                        <div class="col-12 tet-end">
                            <i>Apprentissage de la programmation en C#</i>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'school3':
                document.getElementById("school3Img").classList.remove('shakeVertical');
                document.getElementById("school3Img").classList.add('flipScaleUp');
                document.getElementById("jobWorkVueS3").classList.add('appearFromTop');
                document.getElementById("jobWorkVueS3").classList.remove('slideOutTop1');
                jobWorkVueS3.innerHTML = `
                <div id="school3Text" class="jobWorkVue px-2">
                    <div class="row">
                        <div class="col-12 text-end">
                            <i>Spécialité Biochimie Génie Biologique</i>
                        </div>
                    </div>
                </div>
                    `;
                break;
        }
    })
})

btnChoose.forEach(element => {
    element.addEventListener('mouseout', () => {
        document.getElementById("job1Img").classList.remove('flipScaleUp');
        document.getElementById("job1Img").classList.add('shakeVertical');
        document.getElementById("job2Img").classList.remove('flipScaleUp');
        document.getElementById("job2Img").classList.add('shakeVertical');
        document.getElementById("job3Img").classList.remove('flipScaleUp');
        document.getElementById("job3Img").classList.add('shakeVertical');
        document.getElementById("school1Img").classList.remove('flipScaleUp');
        document.getElementById("school1Img").classList.add('shakeVertical');
        document.getElementById("school2Img").classList.remove('flipScaleUp');
        document.getElementById("school2Img").classList.add('shakeVertical');
        document.getElementById("school3Img").classList.remove('flipScaleUp');
        document.getElementById("school3Img").classList.add('shakeVertical');
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






let language = document.querySelectorAll('#language');
language.forEach(element => {
    element.addEventListener('mouseover', () => {
        // console.log(element.dataset.value);


        //fonction while case
        switch (element.dataset.value) {
            case 'html':
                document.getElementById("htmlLogo").classList.add('fadeOutCenter');
                html.innerHTML = `
                    <div id="htmlImg" class="progress-circle small text-center" data-value="45" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("htmlImg").classList.add('fadeInCenter');
                break;
            case 'css':
                document.getElementById("cssLogo").classList.add('fadeOutCenter');
                css.innerHTML = `
                    <div id="cssImg" class="progress-circle small text-center" data-value="30" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("cssImg").classList.add('fadeInCenter');
                break;
            case 'javascript':
                document.getElementById("javascriptLogo").classList.add('fadeOutCenter');
                javascript.innerHTML = `
                    <div id="javascriptImg" class="progress-circle small text-center" data-value="25" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("javascriptImg").classList.add('fadeInCenter');
                break;
            case 'php':
                document.getElementById("phpLogo").classList.add('fadeOutCenter');
                php.innerHTML = `
                    <div id="phpImg" class="progress-circle small text-center" data-value="40" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("phpImg").classList.add('fadeInCenter');
                break;
            case 'bootstrap':
                document.getElementById("bootstrapLogo").classList.add('fadeOutCenter');
                console.log('test');
                bootstrap5.innerHTML = `
                    <div id="bootstrapImg" class="progress-circle small text-center" data-value="35" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("bootstrapImg").classList.add('fadeInCenter');
                break;
            case 'symfony':
                document.getElementById("symfonyLogo").classList.add('fadeOutCenter');
                symfony.innerHTML = `
                    <div id="symfonyImg" class="progress-circle small text-center" data-value="20" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("symfonyImg").classList.add('fadeInCenter');
                break;
            case 'wordpress':
                document.getElementById("wordpressLogo").classList.add('fadeOutCenter');
                wordpress.innerHTML = `
                    <div id="wordpressImg" class="progress-circle small text-center" data-value="25" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("wordpressImg").classList.add('fadeInCenter');
                break;
            case 'mysql':
                document.getElementById("mysqlLogo").classList.add('fadeOutCenter');
                mysql.innerHTML = `
                    <div id="mysqlImg" class="progress-circle small text-center" data-value="30" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("mysqlImg").classList.add('fadeInCenter');
                break;
            case 'adobexd':
                document.getElementById("adobexdLogo").classList.add('fadeOutCenter');
                adobexd.innerHTML = `
                    <div id="adobexdImg" class="progress-circle small text-center" data-value="35" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("adobexdImg").classList.add('fadeInCenter');
                break;
            case 'figma':
                document.getElementById("figmaLogo").classList.add('fadeOutCenter');
                figma.innerHTML = `
                    <div id="figmaImg" class="progress-circle small text-center" data-value="40" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("figmaImg").classList.add('fadeInCenter');
                break;
            case 'vscode':
                document.getElementById("vscodeLogo").classList.add('fadeOutCenter');
                vscode.innerHTML = `
                    <div id="vscodeImg" class="progress-circle small text-center" data-value="40" id="jauge_2">
                        <div class="progress-masque">
                            <div class="progress-barre"></div>
                            <div class="progress-sup50"></div>
                        </div>
                    </div>`;
                document.getElementById("vscodeImg").classList.add('fadeInCenter');
                break;
        }
    })
})

// language.forEach(element => {
//     element.addEventListener('mouseout', () => {
//         html.innerHTML = `<img id="htmlLogo" src="public/assets/img/html5.svg" alt="HTML5" class="imgCapacity">`;
//         css.innerHTML = `<img id="cssLogo" src="public/assets/img/css3.svg" alt="CSS3" class="imgCapacity">`;
//         javascript.innerHTML = `<img id="javascriptLogo" src="public/assets/img/javascript.svg" alt="javascript" class="imgCapacity">`;
//         php.innerHTML = `<img id="phpLogo" src="public/assets/img/php.svg" alt="php" class="imgCapacity">`;
//         bootstrap5.innerHTML = `<img id="bootstrapLogo" src="public/assets/img/bootstrap.svg" alt="bootstrap" class="imgCapacity">`;
//         symfony.innerHTML = `<img id="symfonyLogo" src="public/assets/img/symfony.svg" alt="symfony" class="imgCapacity">`;
//         wordpress.innerHTML = `<img id="wordpressLogo" src="public/assets/img/wordpress.svg" alt="wordpress" class="imgCapacity">`;
//         mysql.innerHTML = `<img id="mysqlLogo" src="public/assets/img/mysql.svg" alt="mysql" class="imgCapacity">`;
//         adobexd.innerHTML = `<img id="adobexdLogo" src="public/assets/img/adobexd.png" alt="adobexd" class="imgCapacity">`;
//         figma.innerHTML = `<img id="figmaLogo" src="public/assets/img/figma.png" alt="figma" class="imgCapacity">`;
//         vscode.innerHTML = `<img id="vscodeLogo" src="public/assets/img/vscode.svg" alt="vscode" class="imgCapacity">`;
        
//     })
// })