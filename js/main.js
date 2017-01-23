(function ($) {
	jQuery(document).ready(function ($) {
		if ($(".tabs").length) {
			var waypoint2 = new Waypoint({
				element: document.getElementById('tabs'),
				handler: function (direction) {
					if (direction == "down") {
						console.log('Scrolled to waypoint!');
						$(".tabs").addClass("fixed");
					} else if (direction == "up") {
						$(".tabs").removeClass("fixed");
					}
				}
			})
		}
		$(".device").hover(function () {
			$(this).find(".label").css("display","flex");

		},function(){
			$(this).find(".label").fadeOut();
		});
		/*	
				$(window).scroll(function () {
					$('video').each(function () {
						if ($(this).is(":in-viewport")) {
							$(this)[0].play();
						} else {
							$(this)[0].pause();
						}
					})
				});  */
		$(".play").on("click", function () {
			$('.video').each(function () {
				$(this)[0].play();
			})
			$(this).fadeOut();
			$(".pause").show();
		});
		$(".pause").on("click", function () {
			$('.video').each(function () {
				$(this)[0].pause();
			})
			$(this).fadeOut();
			$(".play").show();
		});

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

		$(".open-cont3").on("click", function (e) {
				e.preventDefault();
				$(".tab").removeClass("active");
				$(".tab3").addClass("active");
				$(".cont-3").slideDown();
				$(".cont-2").slideUp();
				$(".cont-1").slideUp();
			
		});
		$(".tabs-Container .tab").on("click", function () {
			console.log("ready2");
			$(".tab").removeClass("active");
			$(this).addClass("active");
				$('html, body').animate({
					scrollTop: $("#tabs").offset().top - 50
				}, 1000);
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
		$(".programacion .tab-programacion").on("click", function () {
			$(".programacion .tab-programacion").removeClass("active")
			$(this).addClass("active");
			if ($(this).hasClass("tab_pre_semanal")) {
				$(".calendar-weekend-container").slideDown();
				$(".calendar-month-container").slideUp();
				$(".tab-mensual").slideUp();
				$(".tab-semanal").slideDown();
				$(".tab-live").slideUp();
				$(".live-calendar-container").slideUp();
			} else if ($(this).hasClass("tab_pre_mensual")) {
				$(".calendar-month-container").slideDown();
				$(".calendar-weekend-container").slideUp();
				$(".tab-mensual").slideDown();
				$(".tab-semanal").slideUp();
				$(".tab-live").slideUp();
				$(".live-calendar-container").slideUp();
			} else if ($(this).hasClass("tab_pre_live")) {
				$(".calendar-month-container").slideUp();
				$(".calendar-weekend-container").slideUp();
				$(".tab-mensual").slideUp();
				$(".tab-semanal").slideUp();
				$(".tab-live").slideDown();
				$(".live-calendar-container").slideDown();

			}

		});

		$(".programa-item .visible-item").on("click", function () {
			$(this).parent().find(".modal-item").slideDown();
		});
		$(".programa-item .fa-times").on("click", function () {
			$(this).parent().parent().slideUp();
		});
		$(".tab-mensual .tab-programacion").on("click", function () {
			var active = $(this).attr("data-active");
			$(".tab-mensual .tab-programacion").removeClass("active");
			$(this).addClass("active");
			$(".calendar-month").slideUp();
			$("." + active).slideDown();
		});
		$(".tab-semanal .tab-programacion").on("click", function () {
			var active = $(this).attr("data-active");
			$(".tab-semanal .tab-programacion").removeClass("active");
			$(this).addClass("active");
			$(".calendar-weekend").slideUp();
			$(".calendar-weekend-movil").slideUp();
			$("." + active).slideDown();
	});/*
		days = ["L", "M", "X", "J", "V", "S", "D"]
		$.getJSON("./datas.json", function (json) {
			head = "";
			contentHead = "";
			c = 0;
			jsonx = json.weekend.yearsweek;
			$.each(jsonx, function (i, item) {
				$.each(item, function (i, item) {

					$.each(item, function (i, item) {

						head = head + "<a>" + item.titleMin + "</a>";
						$.each(item.days, function (i, item) {



							if (c != 7) {
								console.log("LELELE" + c);
								console.log(item.dayNum);
								contentHead += '<div class="segment-tab" class="' + item.dayNum + '">' +
									'<p>' + days[c] + ' <span class="number">' + item.dayNum + '<span></p>' +
									'</div>';
								c++;
							} else {

							}

						}) // end $.each() loop
					}) // end $.each() loop

				}) // end $.each() loop
			}) // end $.each() loop

			$(".calendar-test .header-segment").append(contentHead);

		});*/
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
		//Menu
		$(".menu-icon").on("click", function () {
			$(".pre-menu").show("fade");
		});
		$(".pre-menu .fa-times").on("click", function () {
			$(".pre-menu").hide("fade");
		});
		/*Logica Time Line
		$(".pre-time .program").each(function (index) {
			var totalTimePix = 5760;
			var hourPix = 240;
			var totalHours = 24;
			var widthProgram = 0;
			var startProgram = 0;
			var finalProgram = 0;
			var pixelDelay = 1000;
			var timeStart = $(this).attr("data-time-start");
			var timeEnd = $(this).attr("data-time-end");
			var timeStart = parseFloat(timeStart);
			var timeEnd = parseFloat(timeEnd);
			var Digital = new Date()
			var actualHour = Digital.getHours();
			var actualMin = Digital.getMinutes();
			if (actualMin <= 9) {
				var actualHourString = actualHour + ":0" + actualMin;
				actualMin = "0.0" + actualMin
				actualMin = parseFloat(actualMin);
				actualMin = actualMin * 1 / 0.6;

				var actualHourLive = actualHour + actualMin;


			} else {

				var actualHourString = actualHour + ":" + actualMin;
				actualMin = "0." + actualMin
				actualMin = parseFloat(actualMin);
				actualMin = actualMin * 1 / 0.6;

				var actualHourLive = actualHour + actualMin;

				var actualHourLive = parseFloat(actualHourLive);


			}
			var startLive = (actualHourLive * totalTimePix / totalHours) - hourPix;
			$(".live-calendar .time").each(function (index) {
				$(this).attr("style", "left:-" + (startLive - 500) + "px");
			});
			$(".live-calendar .time-now").attr("style", "left:-" + startLive + "px");
			$(".live-calendar .now").attr("style", "left:" + (startLive + 450) + "px");
			$(".live-calendar .now .time-live").html(actualHourString);


			if (timeStart > timeEnd) {
				var error = true;
			}
			if (actualHourLive >= timeStart && actualHourLive <= timeEnd) {
				$(this).addClass("active-event")
			} else {
				$(this).removeClass("active-event")
			}
			startProgram = (timeStart * totalTimePix / totalHours) - hourPix;
			finalProgram = (timeEnd * totalTimePix / totalHours) - hourPix;
			widthProgram = finalProgram - startProgram;
			$(this).attr("style", "width: " + widthProgram + "px;left:" + startProgram + "px;")


		});*/
		$('.banner-Container').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
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