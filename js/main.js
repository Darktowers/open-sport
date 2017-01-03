(function ($) {



	jQuery(document).ready(function ($) {

		$(document).on("scroll", function () {
			//sacamos el desplazamiento actual de la página
			var desplazamientoActual = $(document).scrollTop();
			//accedemos al control de "ir arriba"
			var controlArriba = $(".rowUp");
			//compruebo si debo mostrar el botón
			if (desplazamientoActual > 100 && controlArriba.css("display") == "none") {
				controlArriba.css("display", "flex");
			}
			//controlo si debo ocultar el botón
			if (desplazamientoActual < 100 && controlArriba.css("display") == "flex") {
				controlArriba.fadeOut(500);
			}


		});

		$(".tab").on("click", function () {
			console.log("ready");
			if ($(this).hasClass("tab-jornada")) {
				$(".jornada").addClass("active");
				$(".mes").removeClass("active");
				$(".tab").removeClass("tab-active");
				$(this).addClass("tab-active");
				$(".jornada .btn-purple").removeClass("inactive");
				$(".jornada .btn-purple").addClass("active");
				$(".mes .btn-purple").addClass("inactive");
			} else if ($(this).hasClass("tab-mes")) {
				$(".mes").addClass("active");
				$(".jornada").removeClass("active");
				$(".tab").removeClass("tab-active");
				$(this).addClass("tab-active");
				$(".jornada .btn-purple").addClass("inactive");
				$(".mes .btn-purple").removeClass("inactive");
				$(".mes .btn-purple").addClass("active");
			}
		});
		$(".tab").on("click", function () {
			console.log("ready2");
			$(".tab").removeClass("active");
			$(this).addClass("active");
			if ($(this).hasClass("tab1")) {
				$(".cont-1").slideDown();
				$(".cont-2").slideUp();
				$(".cont-3").slideUp();
			} else if ($(this).hasClass("tab2")) {
				$(".cont-2").slideDown();
				$(".cont-1").slideUp();
				$(".cont-3").slideUp();
			} else if ($(this).hasClass("tab3")) {
				$(".cont-3").slideDown();
				$(".cont-2").slideUp();
				$(".cont-1").slideUp();
			}
		});

		$(".rowUp").on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		});
		$('a.ancla').click(function (e) {
			e.preventDefault();
			enlace = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(enlace).offset().top
			}, 1000);
		});
		$(".video-Link .question").on("click",
			function () {
				$(".video-Link .info").slideToggle();
			}
		);

		var i = 0;
		while (i != 150) {
			i++;
			var div = document.createElement('div');
			$(".back-Star").append(div);
			div.setAttribute('class', 'start' + Math.round(Math.random() * 5));
			div.style.left = Math.round(Math.random() * 99) + "%";
			div.style.bottom = Math.round(Math.random() * 99) + "%";
			width = (Math.round(Math.random() * 1) + 1);
			div.style.width = width + "px";
			div.style.height = width + "px";
		}

		$(".menu").on("click", function () {
			$(".header-Menu-Nav").animate({ width: 'toggle' }, 500);
		});
		$(".header-Menu-Nav").on("click", function () {
			$(".header-Menu-Nav").animate({ width: 'toggle' }, 500);
		});

		$(".start-form-artist").on("click", function (e) {
			e.preventDefault()
			$(".forms-Info").css("display", "none");
			$(".form-artist").slideToggle(500);

		});
		$(".start-form-news").on("click", function (e) {
			e.preventDefault()
			$(".forms-Info").css("display", "none");
			$(".form-news").slideToggle(500);

		});
		$(".close").on("click", function () {
			$(".form-Modal").slideUp("slow");
			$(".form").css("display", "none");
			$(".forms-Info").css("display", "block");
			$(".modal-video").slideUp("slow");
			$("iframe").each(function () {
				var src = $(this).attr('src');
				$(this).attr('src', src);
			});
		});
		$(".programacion .tab-programacion").on("click",function(){
			$(".programacion .tab-programacion").removeClass("active")
			$(this).addClass("active");
			if($(this).hasClass("tab_pre_semanal")){
				$(".calendar-weekend-container").slideDown();
				$(".calendar-month-container").slideUp();
				$(".tab-mensual").slideUp();	
				$(".tab-semanal").slideDown();	
			}else if($(this).hasClass("tab_pre_mensual")){
				$(".calendar-month-container").slideDown();
				$(".calendar-weekend-container").slideUp();
				$(".tab-mensual").slideDown();	
				$(".tab-semanal").slideUp();				
			}
			
		});
		
		$(".programa-item .visible-item").on("click",function(){
			$(this).parent().find(".modal-item").slideDown();
		});
		$(".programa-item .fa-times").on("click",function(){
			$(this).parent().parent().slideUp();
		});
			$(".tab-mensual .tab-programacion").on("click",function(){
			var active = $(this).attr("data-active");
			$(".tab-mensual .tab-programacion").removeClass("active");
			$(this).addClass("active");
			$(".calendar-month").slideUp();
			$("."+active).slideDown();
		});
		$(".tab-semanal .tab-programacion").on("click",function(){
			var active = $(this).attr("data-active");
			$(".tab-semanal .tab-programacion").removeClass("active");
			$(this).addClass("active");
			$(".calendar-weekend").slideUp();
			$("."+active).slideDown();
		});
		days= ["L","M","X","J","V","S","D"]
		$.getJSON("./datas.json", function (json) {
			head = "";
			contentHead ="";
			c=0;
			jsonx = json.weekend.yearsweek;
			$.each(jsonx, function (i, item) {
				$.each(item, function (i, item) {

					$.each(item, function (i, item) {

						head = head + "<a>" + item.titleMin+ "</a>";
					$.each(item.days, function (i, item) {

						
						
						if(c!=7){
							console.log("LELELE"+c);
							console.log(item.dayNum);
							contentHead+='<div class="segment-tab" class="'+item.dayNum+'">' +
							'<p>'+days[c]+' <span class="number">'+item.dayNum+'<span></p>' +
                			'</div>';
							c++;
						}else{
						
						}
					
					}) // end $.each() loop
					}) // end $.each() loop

				}) // end $.each() loop
			}) // end $.each() loop
			
			$(".calendar-test .header-segment").append(contentHead);

		});
		// $('.desp').on('mouseover', function(){
		// 	$('.back-desp').slideToggle();
		// });
		$(".span-menuM").on("click", function () {

			$(".menuM").stop().slideDown();
			$(".span-menuM").attr("style", "display:none !important;");
			$(".span-menuM-Close").attr("style", "display:block !important;");
		});
		$(".span-menuM-Close").on("click", function () {

			$(".menuM").stop().slideUp();
			$(".span-menuM").attr("style", "display:block !important;");
			$(".span-menuM-Close").attr("style", "display:none !important;");
		});

		$('.banner-Container').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 890,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]

		});
		$('.slidex').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			nav: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 890,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]

		});

	});

})(jQuery);