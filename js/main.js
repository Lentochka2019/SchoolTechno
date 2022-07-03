$(function()
{
	$('#slider-partner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:false,
	autoWidth:false,
	autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
	$('#big-slider.owl-carousel.big-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoWidth:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.carousel').carousel();
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
	
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Btntop").style.display = "block";
    } else {
        document.getElementById("Btntop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
/*function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/

var t;
function topFunction() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('topFunction()',50);
	} else clearTimeout(t);
	return false;
}

