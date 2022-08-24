
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
                                    Mes expériences de travail
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
                                            Mes formations
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
                                                Mes compétences
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
                                                    Un peu plus de moi
                                                </p>
                                            </div>
                                        </div>
                                        `;
                break;
        }
    })
})



let btnChoose = document.querySelectorAll('#btnChoose');

btnChoose.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element.dataset.value);


        //fonction while case
        switch (element.dataset.value) {
            case 'job3':
                jobWorkVue3.innerHTML = `
                <div class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                        <p>
                            Diagnostics, réparations, reprogrammations de smartphones,
                            tablettes, accessoires <br>(agréments Samsung, Huawei,
                            Xiaomi, Apple)
                        </p>
                        <P>
                            Conception, développement et gestion du
                            site
                            de
                            formation/gestion des boutiques en France
                        </P>
                    </div>
                </div>
                <div class="jobSociety row">
                    <div class="col-3 col-md-2 text-center align-self-center">
                        <img class="imgSociety" src="public/assets/img/save.png">
                    </div>
                    <div class="col-9 col-md-10 align-self-center">
                        <h5><i>Point Services Mobiles / Save Store</i></h5>
                    </div>
                </div>
                </div>
                `;
                jobWorkVue2.innerHTML = ``;
                jobWorkVue1.innerHTML = ``;
                break;
            case 'job2':
                jobWorkVue3.innerHTML = ``;
                jobWorkVue2.innerHTML = `
                <div class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                    <p>
                    Diagnostics, réparations, reprogrammations de smartphones,
                    tablettes,
                    accessoires (agréments Samsung, Sony, Nokia, Huaweï)
                </p>
                    </div>
                </div>
                <div class="jobSociety row ">
                    <div class="col-3 col-md-2 text-center align-self-center">
                        <img class="imgSociety" src="public/assets/img/psm_old.jpg">
                    </div>
                    <div class="col-9 col-md-10 align-self-center">
                        <h4><i>Point Services Mobiles</i></h4>
                    </div>
                </div>
                </div>
                `;
                jobWorkVue1.innerHTML = ``;
                break;
            case 'job1':
                jobWorkVue3.innerHTML = ``;
                jobWorkVue2.innerHTML = ``;
                jobWorkVue1.innerHTML = `
                <div class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                    <p>
                    Assemblage, Paramétrage, Diagnostic, Réparation d'ordinateurs fixes
                    et
                    portables
                </p>
                <p>
                Installation, paramétrage des équipements Numéricable (modem,
                routeur,
                décodeur télévision)
            </p>
                    </div>
                </div>
                <div class="jobSociety row">
                    <div class="col-sm align-self-bottom">
                        <h4><i>XXB Consulting</i></h4>
                    </div>
                </div>
                </div>
                `;
                break;
            //case school
            case 'school4':
                jobWorkVueS4.innerHTML = `
                <div class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                        <p>
                            La Manu Amiens est une école de formation de
                            développement web et de développement mobile.
                            Elle est située à Amiens, en France.
                        </p>
                    </div>
                </div>
                <div class="jobSociety row">
                    <div class="col-4 align-self-center">
                        <img class="imgSociety" src="public/assets/img/laManu.jpg">
                    </div>
                    <div class="col-8 align-self-center">
                        <h4><i>La Manu Amiens</i></h4>
                    </div>
                </div>
                </div>
                `;
                jobWorkVueS3.innerHTML = ``;
                jobWorkVueS2.innerHTML = ``;
                break;
            case 'school3':
                jobWorkVueS4.innerHTML = ``;
                jobWorkVueS3.innerHTML = `
                <div class="jobWorkVue px-2">
                <div class="row">
                    <div class="col-12">
                        <p>
                            Apprentissage de la programmation en C# et
                            en JavaScript.

                        </p>
                    </div>
                </div>
                <div class="jobSociety row">
                    <div class="col-3 col-md-2 text-center align-self-center">
                        <img class="imgSociety" src="public/assets/img/educatel.png">
                    </div>
                    <div class="col-9 col-md-10 align-self-center">
                        <h4><i>Educatel</i></h4>
                    </div>
                </div>
                </div>
                `;
                jobWorkVueS2.innerHTML = ``;
                break;
            case 'school2':
                jobWorkVueS4.innerHTML = ``;
                jobWorkVueS3.innerHTML = ``;
                jobWorkVueS2.innerHTML = `
                <div class="jobWorkVue px-2">
                    <div class="row">
                        <div class="col-12">
                            Spécialité Biochimie Génie Biologique
                        </div>
                    </div>
                    <div class="jobSociety row">
                        <div class="col-3 col-md-2 text-center align-self-center">
                            <img class="imgSociety" src="public/assets/img/lycee.png">
                        </div>
                        <div class="col-9 col-md-10 align-self-center">
                            <h4><i>Sainte Marie de Nevers (Toulouse)</i></h4>
                        </div>
                        </div>
                        </div>
                    `;
                break;

        }

    })


}
)

