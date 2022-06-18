
let btnChoose = document.querySelectorAll('#btnChoose');
console.log(btnChoose);

btnChoose.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element.dataset.value);


        //fonction while case
        switch (element.dataset.value) {
            case 'job3':
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                <div class="row p-3">
                    <div class="col-12 col-md-3">
                        <h5>2017 - à ce jour</h5>
                    </div>
                    <div class="col-12 col-md-9">
                        <H3>Technicien SAV / Responsable Support formation</H3>
                    </div>
                </div>
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
                    <div class="col-3 align-self-center">
                        <img class="imgSociety" src="public/assets/img/save.png">
                    </div>
                    <div class="col-9 align-self-center">
                        <h4><i>Point Services Mobiles / Save Store</i></h4>
                    </div>
                </div>
                </div>
                `;
                break;
            case 'job2':
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                <div class="row p-3">
                    <div class="col-12 col-md-3">
                        <h5>2012 - 2017</h5>
                    </div>
                    <div class="col-12 col-md-9">
                        <H3>Technicien SAV en Téléphonie Mobile</H3>
                    </div>
                </div>
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
                    <div class="col-3 align-self-center">
                        <img class="imgSociety" src="public/assets/img/psm_old.jpg">
                    </div>
                    <div class="col-9 align-self-center">
                        <h4><i>Point Services Mobiles</i></h4>
                    </div>
                </div>
                </div>
                `;
                break;
            case 'job1':
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                <div class="row p-3">
                    <div class="col-12 col-md-3">
                        <h5>2011 - 2012</h5>
                    </div>
                    <div class="col-12 col-md-9">
                        <H3>Responsable SAV en informatique</H3>
                    </div>
                </div>
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
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                <div class="row p-3">
                    <div class="col-12 col-md-3">
                        <h5>Mars à Octobre 2022</h5>
                    </div>
                    <div class="col-12 col-md-9">
                        <H3>Formation développeur Web/Web Mobile</H3>
                    </div>
                </div>
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
                break;
            case 'school3':
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                <div class="row p-3">
                    <div class="col-12 col-md-3">
                        <h5>2006</h5>
                    </div>
                    <div class="col-12 col-md-9">
                        <H3>Formation de Programmeur système</H3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p>
                            Apprentissage de la programmation en C# et
                            en JavaScript.

                        </p>
                    </div>
                </div>
                <div class="jobSociety row">
                    <div class="col-3 align-self-center">
                        <img class="imgSociety" src="public/assets/img/educatel.png">
                    </div>
                    <div class="col-9 align-self-center">
                        <h4><i>Educatel</i></h4>
                    </div>
                </div>
                </div>
                `;
                break;
            case 'school2':
                jobWorkVue.innerHTML = `
                <div class="jobWorkVue">
                    <div class="row p-3">
                        <div class="col-12 col-md-3">
                            <h5>2002</h5>
                        </div>
                        <div class="col-12 col-md-9">
                            <H3>Baccalauréat STL</h3> 
                            <h5>Spécialité Biochimie Génie Biologique</H6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            
                        </div>
                    </div>
                    <div class="jobSociety row">
                        <div class="col-3 align-self-center">
                            <img class="imgSociety" src="public/assets/img/lycee.png">
                        </div>
                        <div class="col-9 align-self-center">
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

