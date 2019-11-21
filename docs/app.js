// app.js
jQuery(document).ready(function($) {
    // load content
    $('#nav').load('nav.html');
    $('#install').load('install.html');
    $('#typography').load('typography.html');
    $('#forms').load('forms.html');
    $('#lists').load('lists.html');
    $('#tables').load('tables.html');
    $('#flex').load('flex.html');
    $('#misc').load('misc.html');
    $('#dark-mode').load('dark-mode.html');
    $('#grids').load('grids.html');
    $('#animations').load('animations.html');
    $('#css-grid-layouts').load('css-grid-layouts.html');
    $('#layouts').load('layouts.html');
    $('#wp-skelet').load('wp-ad.html');

    // start animations
    $('body').on('click', '[data-animation]', function(event) {
        var animationName = $(this).data("animation");
        $(this).addClass('animate d1s' + ' ' + animationName);
    });

    // Smooth Scroll
    $(document).on('click', 'a', function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });

    // if OS is in Dark mode switch automatically.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('body').addClass('dark-mode');
    }

    // Turn Dark Mode on/off
    $('body').on('click', '.lightsoff', function(event) {
        $('body').toggleClass('dark-mode');
    });

});
