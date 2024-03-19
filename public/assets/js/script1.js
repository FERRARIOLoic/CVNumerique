
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


let btn_navbar_choose = document.querySelectorAll('#btn_navbar');
btn_navbar_choose.forEach(eachTableElement => {
    eachTableElement.onclick = (event) => {

        let btn_choose = event.target.dataset.btn;
        // console.log(btn_choose);

        switch (btn_choose) {
            case 'about_me':
                about_me.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'jobs':
                jobs.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'training':
                training.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'skills':
                skills.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'achievements':
                achievements.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'hobbies':
                hobbies.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'soft_skills':
                soft_skills.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'contact':
                contact.classList.add('bg_blue', 'rounded');
                ;
                break;
            case 'profile':
                profile.classList.add('bg_blue', 'rounded');
                ;
                break;
        };
    };
});


//------------- PHOTO ---------//
photo.addEventListener('mouseover', () => {
    photo_img.classList.remove('shadow_drop_center_reverse');
    photo_img.classList.add('shadow_drop_center');
    photo_img.addEventListener('animationend', function () {
        photo_img.classList.add('shadow_drop_center');
    });
});
photo.addEventListener('mouseout', () => {
    photo_img.classList.add('shadow_drop_center_reverse');
    photo_img.addEventListener('animationend', function () {
        photo_img.classList.remove('shadow_drop_center');
        photo_img.classList.remove('shadow_drop_center_reverse');
    });
});

//------------- HTML5 ---------//
html5_div.addEventListener('mouseover', () => {
    html5_img.classList.add('scale_out_horizontal_center');
    html5_img.addEventListener('animationend', function () {
        html5_img.src = "public/assets/img/icons/html5_grey.png";
        html5_img.classList.remove('scale_out_horizontal_center');
        html5_img.classList.add('scale_in_horizontal_center');
    });
});
html5_div.addEventListener('mouseout', () => {
    html5_img.classList.remove('scale_in_horizontal_center');
    html5_img.classList.add('scale_out_horizontal_center');
    html5_img.addEventListener('animationend', function () {
        html5_img.src = "public/assets/img/icons/html5.svg";
        html5_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- CSS3 ---------//
css3_div.addEventListener('mouseover', () => {
    css3_img.classList.add('scale_out_horizontal_center');
    css3_img.addEventListener('animationend', function () {
        css3_img.src = "public/assets/img/icons/css3_grey.png";
        css3_img.classList.remove('scale_out_horizontal_center');
        css3_img.classList.add('scale_in_horizontal_center');
    });
});
css3_div.addEventListener('mouseout', () => {
    css3_img.classList.remove('scale_in_horizontal_center');
    css3_img.classList.add('scale_out_horizontal_center');
    css3_img.addEventListener('animationend', function () {
        css3_img.src = "public/assets/img/icons/css3.svg";
        css3_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- JAVASCRIPT ---------//
javascript_div.addEventListener('mouseover', () => {
    javascript_img.classList.add('scale_out_horizontal_center');
    javascript_img.addEventListener('animationend', function () {
        javascript_img.src = "public/assets/img/icons/javascript_grey.png";
        javascript_img.classList.remove('scale_out_horizontal_center');
        javascript_img.classList.add('scale_in_horizontal_center');
    });
});
javascript_div.addEventListener('mouseout', () => {
    javascript_img.classList.remove('scale_in_horizontal_center');
    javascript_img.classList.add('scale_out_horizontal_center');
    javascript_img.addEventListener('animationend', function () {
        javascript_img.src = "public/assets/img/icons/javascript.svg";
        javascript_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- PHP8 ---------//
php8_div.addEventListener('mouseover', () => {
    php8_img.classList.add('scale_out_horizontal_center');
    php8_img.addEventListener('animationend', function () {
        php8_img.src = "public/assets/img/icons/php8_grey.png";
        php8_img.classList.remove('scale_out_horizontal_center');
        php8_img.classList.add('scale_in_horizontal_center');
    });
});
php8_div.addEventListener('mouseout', () => {
    php8_img.classList.remove('scale_in_horizontal_center');
    php8_img.classList.add('scale_out_horizontal_center');
    php8_img.addEventListener('animationend', function () {
        php8_img.src = "public/assets/img/icons/php8.svg";
        php8_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- BOOTSTRAP ---------//
bootstrap_div.addEventListener('mouseover', () => {
    bootstrap_img.classList.add('scale_out_horizontal_center');
    bootstrap_img.addEventListener('animationend', function () {
        bootstrap_img.src = "public/assets/img/icons/bootstrap_grey.png";
        bootstrap_img.classList.remove('scale_out_horizontal_center');
        bootstrap_img.classList.add('scale_in_horizontal_center');
    });
});
bootstrap_div.addEventListener('mouseout', () => {
    bootstrap_img.classList.remove('scale_in_horizontal_center');
    bootstrap_img.classList.add('scale_out_horizontal_center');
    bootstrap_img.addEventListener('animationend', function () {
        bootstrap_img.src = "public/assets/img/icons/bootstrap.svg";
        bootstrap_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- WORDPRESS ---------//
wordpress_div.addEventListener('mouseover', () => {
    wordpress_img.classList.add('scale_out_horizontal_center');
    wordpress_img.addEventListener('animationend', function () {
        wordpress_img.src = "public/assets/img/icons/wordpress_grey.png";
        wordpress_img.classList.remove('scale_out_horizontal_center');
        wordpress_img.classList.add('scale_in_horizontal_center');
    });
});
wordpress_div.addEventListener('mouseout', () => {
    wordpress_img.classList.remove('scale_in_horizontal_center');
    wordpress_img.classList.add('scale_out_horizontal_center');
    wordpress_img.addEventListener('animationend', function () {
        wordpress_img.src = "public/assets/img/icons/wordpress.svg";
        wordpress_img.classList.add('scale_in_horizontal_center');
    });
});

//------------- MYSQL ---------//
mysql_div.addEventListener('mouseover', () => {
    mysql_img.classList.add('scale_out_horizontal_center');
    mysql_img.addEventListener('animationend', function () {
        mysql_img.src = "public/assets/img/icons/mysql_grey.png";
        mysql_img.classList.remove('scale_out_horizontal_center');
        mysql_img.classList.add('scale_in_horizontal_center');
    });
});
mysql_div.addEventListener('mouseout', () => {
    mysql_img.classList.remove('scale_in_horizontal_center');
    mysql_img.classList.add('scale_out_horizontal_center');
    mysql_img.addEventListener('animationend', function () {
        mysql_img.src = "public/assets/img/icons/mysql.svg";
        mysql_img.classList.add('scale_in_horizontal_center');
    });
});



contact_phone.addEventListener('mouseover', () => {
    contact_phone_img.classList.add('shake_bottom');
    contact_phone_img.addEventListener('animationend', function () {
        contact_phone_img.classList.remove('shake_bottom');
    });
});
contact_email.addEventListener('mouseover', () => {
    contact_email_img.classList.add('rotate_center');
    contact_email_img.addEventListener('animationend', function () {
        contact_email_img.classList.remove('rotate_center');
    });
});
contact_linkedin.addEventListener('mouseover', () => {
    contact_linkedin_img.classList.add('jello_horizontal');
    contact_linkedin_img.addEventListener('animationend', function () {
        contact_linkedin_img.classList.remove('jello_horizontal');
    });
});
contact_github.addEventListener('mouseover', () => {
    contact_github_img.classList.add('pulse_heartbeat');
    contact_github_img.addEventListener('animationend', function () {
        contact_github_img.classList.remove('pulse_heartbeat');
    });
});
