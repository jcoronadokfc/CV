$(document).ready(function(){

    $(".tabs li a").click(function(e){
        e.preventDefault();
        let idMenu = $(this).attr('name');

        $("html, body").animate({ scrollTop: $(`#${idMenu}`).offset().top }, 1500);
    })

   
})