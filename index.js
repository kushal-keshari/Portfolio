$(document).ready(function){
    alert('hello babe')
    // CHECK THE SCREEN WIDTH
    if($(window).width()>=769){
        // For desktop: Bindcllick to menu icon
        $('.menu-icon').on('click',function(){
            $('.navbar ul').toggle();
        });
    }
};