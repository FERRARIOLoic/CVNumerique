
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


// Create a new ScrollTrigger instance with some custom options
const trigger = new ScrollTrigger({
    trigger: {
        once: true
    }
})
// Add all html elements with attribute data-trigger, these elements will only be triggered once
trigger.add('[data-trigger]')
// Add all html elements with attribute data-triggerAlways, these elements will always be triggered
trigger.add('[data-triggerAlways]', { once: false })






let btnMenuChoose = document.querySelectorAll('#btnMenuChoose');

btnMenuChoose.forEach(element => {
    element.onmouseover = (event) => {

        const id_navbar = event.target.dataset.value;
        const action_navbar = `btnMenuChoose_${id_navbar}`;
        console.log(id_navbar)


        switch (action_navbar) {
            //?------------- AAA ---------//
            case 'presentation':
                document.getElementById(action_navbar).classList.add('cars_action_show');

                break;
            case 'parcours':
                document.getElementById("btnMenuChoose").classList.add('bg-primary');
                break;
        }
    }

    element.addEventListener('click', () => {

        //fonction while case
        switch (element.dataset.value) {
            case 'presentation':
                document.getElementById("textPresentation").classList.remove('slideOutTopPresentation');
                document.getElementById("textPresentation").classList.add('appearFromTopPresentation');
                document.getElementById("jobWorkVue1").classList.add('slideOutTop1');
                document.getElementById("jobWorkVue2").classList.add('slideOutTop1');
                document.getElementById("jobWorkVue3").classList.add('slideOutTop1');
                document.getElementById("jobWorkVueS1").classList.add('slideOutTop1');
                // document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
                document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
                textPresentation.innerHTML = `
                <span class="textPresentation">
                Passionné d'informatique et curieux de nature, j'ai créé et développe depuis 6 ans le site de formation interne de l'entreprise pour laquelle j'exerce en parallèle le métier de Technicien SAV Mobile. 
                Initialement autodidacte, j'ai entrepris une formation de Développeur Web / Web Mobile au sein de la Manu d'Amiens afin d'actualiser mes connaissances et me perfectionner en HTML, CSS, Javascript, PHP, Bootstrap...
                Mon objectif est d'exercer désormais ce métier de développeur web à temps complet
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
    // document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
    document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
    textPresentation.innerHTML = `
    <span  class="textPresentation">
    Passionné d'informatique et curieux de nature, j'ai créé et développe depuis 6 ans le site de formation interne de l'entreprise pour laquelle j'exerce en parallèle le métier de Technicien SAV Mobile.</span>
<br>
    <span  class="textPresentation">
    Initialement autodidacte, j'ai entrepris une formation de Développeur Web / Web Mobile au sein de la Manu d'Amiens afin d'actualiser mes connaissances et me perfectionner en HTML, CSS, Javascript, PHP, Bootstrap...
    </p>
    Mon objectif est d'exercer désormais ce métier de développeur web à temps complet
        </span>
        `;
})
boxPresentation.addEventListener('mouseout', () => {
    document.getElementById("textPresentation").classList.add('slideOutTopPresentation');
    document.getElementById("textPresentation").classList.remove('appearFromTopPresentation');
    textPresentation.innerHTML = ``;
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
                <div class="row">
                    <div class="col-12">
                        <i>Conception, développement et gestion du site de formation des boutiques
                    </div>
                    <div class="col-12">
                        Création de formation pour les nouveaux produits, mise à jour de la liste des appareils, du référentiel des pièces...
                    </div>
                    <div class="col-12">
                        Mise en place d'outils logiciels d'assistance des techniciens</i>
                    </div>
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
            // case 'school2':
            //     document.getElementById("school2Img").classList.remove('shakeVertical');
            //     document.getElementById("school2Img").classList.add('flipScaleUp');
            //     document.getElementById("jobWorkVueS2").classList.add('appearFromTop');
            //     document.getElementById("jobWorkVueS2").classList.remove('slideOutTop1');
            //     jobWorkVueS2.innerHTML = `
            //     <div id="school2Text" class="jobWorkVue px-2">
            //         <div class="row">
            //             <div class="col-12 tet-end">
            //                 <i>Apprentissage de la programmation en C#</i>
            //             </div>
            //         </div>
            //     </div>
            //     `;
            //     break;
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
        // document.getElementById("school2Img").classList.remove('flipScaleUp');
        // document.getElementById("school2Img").classList.add('shakeVertical');
        document.getElementById("school3Img").classList.remove('flipScaleUp');
        document.getElementById("school3Img").classList.add('shakeVertical');
        document.getElementById("jobWorkVue1").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue2").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue3").classList.remove('appearFromTop');
        document.getElementById("jobWorkVueS1").classList.remove('appearFromTop');
        // document.getElementById("jobWorkVueS2").classList.remove('appearFromTop');
        document.getElementById("jobWorkVueS3").classList.remove('appearFromTop');
        document.getElementById("jobWorkVue1").classList.add('slideOutTop1');
        document.getElementById("jobWorkVue2").classList.add('slideOutTop1');
        document.getElementById("jobWorkVue3").classList.add('slideOutTop1');
        document.getElementById("jobWorkVueS1").classList.add('slideOutTop1');
        // document.getElementById("jobWorkVueS2").classList.add('slideOutTop1');
        document.getElementById("jobWorkVueS3").classList.add('slideOutTop1');
        jobWorkVue1.innerHTML = ``;
        jobWorkVue2.innerHTML = ``;
        jobWorkVue3.innerHTML = ``;
        jobWorkVues1.innerHTML = ``;
        // jobWorkVues2.innerHTML = ``;
        jobWorkVues3.innerHTML = ``;

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
                    <div id="htmlImg" class="progress-circle small justify-content-center" data-value="70" id="jauge_2">
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
                    <div id="cssImg" class="progress-circle small text-center" data-value="60" id="jauge_2">
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
                    <div id="javascriptImg" class="progress-circle small text-center" data-value="30" id="jauge_2">
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
                    <div id="phpImg" class="progress-circle small text-center" data-value="55" id="jauge_2">
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
                    <div id="bootstrapImg" class="progress-circle small text-center" data-value="45" id="jauge_2">
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
                    <div id="symfonyImg" class="progress-circle small justify-content-center" data-value="20" id="jauge_2">
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
                    <div id="wordpressImg" class="progress-circle small text-center" data-value="50" id="jauge_2">
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
                    <div id="mysqlImg" class="progress-circle small text-center" data-value="65" id="jauge_2">
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

language.forEach(element => {
    element.addEventListener('mouseout', () => {
        html.innerHTML = `<img id="htmlLogo" src="public/assets/img/html5.svg" alt="HTML5" class="imgCapacity">`;
        css.innerHTML = `<img id="cssLogo" src="public/assets/img/css3.svg" alt="CSS3" class="imgCapacity">`;
        javascript.innerHTML = `<img id="javascriptLogo" src="public/assets/img/javascript.svg" alt="javascript" class="imgCapacity">`;
        php.innerHTML = `<img id="phpLogo" src="public/assets/img/php.svg" alt="php" class="imgCapacity">`;
        bootstrap5.innerHTML = `<img id="bootstrapLogo" src="public/assets/img/bootstrap.svg" alt="bootstrap" class="imgCapacity">`;
        symfony.innerHTML = `<img id="symfonyLogo" src="public/assets/img/symfony.svg" alt="symfony" class="imgCapacity">`;
        wordpress.innerHTML = `<img id="wordpressLogo" src="public/assets/img/wordpress.svg" alt="wordpress" class="imgCapacity">`;
        mysql.innerHTML = `<img id="mysqlLogo" src="public/assets/img/mysql.svg" alt="mysql" class="imgCapacity">`;
        adobexd.innerHTML = `<img id="adobexdLogo" src="public/assets/img/adobexd.svg" alt="adobexd" class="imgCapacity">`;
        figma.innerHTML = `<img id="figmaLogo" src="public/assets/img/figma.svg" alt="figma" class="imgCapacity">`;
        vscode.innerHTML = `<img id="vscodeLogo" src="public/assets/img/vscode.svg" alt="vscode" class="imgCapacity">`;

    })
})