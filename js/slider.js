$(document).ready(function(){
	$('.slider').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:8400,
        slidesToShow:6,
        slidesToScroll:1,
        infinite:true,
        responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2
				}
			}
		]
    });
});