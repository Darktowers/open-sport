(function ($) {
	jQuery(document).ready(function ($) {
		$(".tabox").on("click",function(){
			var activebox = $(this).attr("data-active");
			$(".tabox").removeClass("active")
			$(this).addClass("active");
			if(activebox == "box1"){
				$(".box1").addClass("active");
				$(".box2").removeClass("active");
			}else{
				$(".box2").addClass("active");
				$(".box1").removeClass("active");
			}
			$("."+activebox).addClass("active");
			
		})
		$(".login a").on("click",function(e){
			e.preventDefault();
			var modal = $(this).attr("data-target");
			$("#"+modal).slideDown("slow");
		})
		$(".modal-header .close").on("click",function(e){
			e.preventDefault();
			var modal = $(this).attr("data-target");
			$("#modal_login").slideUp("slow");
		})
		$(".modal-body .close").on("click",function(e){
			e.preventDefault();
			var modal = $(this).attr("data-target");
			$("#cookies_id").slideUp("slow");
		})
		
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
			$(this).find(".label").css("display", "flex");

		}, function () {
			$(this).find(".label").fadeOut();
		});
		$(".loginx").on("click", function (e) {
			e.preventDefault();
			$(this).find(".spandable").stop().slideToggle();
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
		$(".questionco").hover(function () {
			$(this).find(".question").show();
		}, function () {
			$(this).find(".question").fadeOut();
		});
		$(".open-cont3").on("click", function (e) {
			e.preventDefault();
			$(".tab").removeClass("active");
			$(".tab3").addClass("active");
			$(".cont-3").slideDown();
			$(".cont-2").slideUp();
			$(".cont-1").slideUp();

		});

		// 	$(".contentdownx").on("click",function(){
		// 		 x = $(this).parent().parent().parent();
		// 		$(".precontent .contentpa").slideUp();
		// 		x.toggleClass("active");
		// 		$(x).find(".contentpa").stop().slideToggle();	
		// })
		$('.contentdownx').on('click', function (event) {
			event.preventDefault();
			var $focus = $(this).parents('.precontent');
			$($focus).toggleClass('active');
			$($focus).find('.contentpa').stop().slideToggle('300');
			$($focus).siblings('.precontent').removeClass('active');
			$($focus).siblings('.precontent').find('.contentpa').stop().slideUp('300');
		});
		$(".contentdown").on("click", function () {
			x = $(this).parent().parent().parent();
			x.toggleClass("active");
			$(x).find(".contentpa").stop().slideToggle();
		})

		$('.pago form').card({
			container: '.card-wrapper',
			width: 280,

			formSelectors: {
				nameInput: 'input[name="first-name"], input[name="last-name"]'
			}, placeholders: {
				number: '•••• •••• •••• ••••',
				name: 'Nombre Completo',
				expiry: '••/••',
				cvc: '•••'
			},
		});
		/*
						$(".cancelar,.fa-times").on("click",function(e){
					e.preventDefault();
					$(".formul").slideUp();
					$(".premodal").slideUp();
				});*/
		$(".openform").on("click", function (e) {
			e.preventDefault();
			var form = $(this).attr("alt");
			$(".premodal").slideDown();
			$(".modal ." + form).slideDown();
		})
		$(".tabs-Container .tab").on("click", function () {
			console.log("ready2");
			$(".tab").removeClass("active");
			$(this).addClass("active");
			$('html, body').stop().animate({
				scrollTop: $("#tabs").offset().top - 100
			});
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
		$(document).ready(function () {

			$(document).click(function(eventx) { 
				if(!$(eventx.target).closest('.logoexpand').length) {
					if($('.premenuexp').is(":visible")) {
						$('.premenuexp').fadeOut();
					}
				} 
				if(!$(eventx.target).closest('.loginx').length){
					if($('.spandable').is(":visible")) {
						$('.spandable').fadeOut();
					}
				}        
			});


			$(".logoexpand").on("click",function(event){
				event.preventDefault();
				event.stopPropagation();
				$(".premenuexp").fadeIn();
	
				}
			)
//Inicio Controles

			$(".blockco .cont").hover(function(){
				$(this).find(".data-action").stop().fadeIn();
			},function(){
				$(this).find(".data-action").stop().fadeOut();
			})
			//return a DOM object
			var videostyle = $('#my_video_1');
			//Play/Pause control clicked
			$(".btnPlay").on("click", function () {
				$(this).toggleClass("paused");
				if (videostyle[0].paused) {
					videostyle[0].play();
				}
				else {
					videostyle[0].pause();
				}
				return false;
			})
			var timeFormat = function (seconds) {
				var m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60);
				var s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
				return m + ":" + s;
			}
			$('.current').text(timeFormat(0));
			if($(".duration").length){$('.duration').text(timeFormat(videostyle[0].duration));}
			;
			//start to get video buffering data 
		
			//Time format converter - 00:00

			//get HTML5 video time duration
			videostyle.on('loadedmetadata', function () {
				$('.duration').text(timeFormat(videostyle[0].duration));
			});


			//display current video play time
			videostyle.on('timeupdate', function () {
				var currentPos = videostyle[0].currentTime;
				var maxduration = videostyle[0].duration;
				var perc = 100 * currentPos / maxduration;
				$('.timeBar').css('width', perc + '%');
				$('.current').text(timeFormat(currentPos));
				
			});

			var timeDrag = false;   /* Drag status */
			$('.progressBar').mousedown(function (e) {
				timeDrag = true;
				updatebar(e.pageX);
			});
			$(document).mouseup(function (e) {
				if (timeDrag) {
					timeDrag = false;
					updatebar(e.pageX);
				}
			});
			$(document).mousemove(function (e) {
				if (timeDrag) {
					updatebar(e.pageX);
				}
			});

			//update Progress Bar control
			var updatebar = function (x) {
				var progress = $('.progressBar');
				var maxduration = videostyle[0].duration; //Video duraiton
				var position = x - progress.offset().left; //Click pos
				var percentage = 100 * position / progress.width();

				//Check within range
				if (percentage > 100) {
					percentage = 100;
				}
				if (percentage < 0) {
					percentage = 0;
				}
				//Update progress bar and video currenttime
				$('.timeBar').css('width', percentage + '%');
				videostyle[0].currentTime = maxduration * percentage / 100;
			};


			//display video buffering bar
			 $(document).ready(function(){
				 var videostyle = $('#my_video_1');
				 if(videostyle.length){
				videostyle[0].onprogress = function () {
					if(videostyle[0].buffered.length>0){
							var w = 100*(videostyle[0].buffered.end(0))/videostyle[0].duration;
							$('.bufferBar').css('width', w + '%');
						}

				};}
			 })

			 

			$('.fullscreen').on('click', function (e) {
				e.preventDefault();
				//For Webkit
				videostyle[0].webkitEnterFullscreen();

				//For Firefox
				videostyle[0].mozRequestFullScreen();

				return false;
			});
			$("#Video").hover(function () {
				$(".preheadervideo").stop().fadeIn();
				$(".control").stop().fadeIn();
			}, function () {
				$(".preheadervideo").stop().fadeOut();
				$(".control").stop().fadeOut();
			});
			//Mute/Unmute control clicked
			//sound button clicked
			$(".volumebtn").hover(function () {
				$(".prevolume").stop().fadeIn();
			}, function () {
				$(".prevolume").stop().fadeOut();
			});
			$('.sound').click(function () {
				videostyle[0].muted = !videostyle[0].muted;
				$(this).toggleClass('muted');
				if (videostyle[0].muted) {
					$('.volumeBar').css('height', 0);
				}
				else {
					$('.volumeBar').css('height', videostyle[0].volume * 100 + '%');
				}
			});


			//VOLUME BAR
			//volume bar event
			var volumeDrag = false;

			$('.volume').on('mousedown', function (e) {
				volumeDrag = true;
				videostyle[0].muted = false;
				$('.sound').removeClass('muted');
				updateVolume(e.pageY);
			});
			$(document).on('mouseup', function (e) {
				if (volumeDrag) {
					volumeDrag = false;
					updateVolume(e.pageY);
				}
			});
			$(document).on('mousemove', function (e) {
				if (volumeDrag) {
					updateVolume(e.pageY);
				}
			});
			$(document).ready(function () {
				updateVolume(0, 0.7)
			})
			var updateVolume = function (x, vol) {
				var volume = $('.volume');
				if(volume.length){

				
				var percentage;
				//if only volume have specificed
				//then direct update volume
				if (vol) {
					percentage = vol * 100;
				}
				else {
					var position = x - volume.offset().top;;
					percentage = 100 - (100 * position / volume.height());
				}

				if (percentage > 100) {
					percentage = 100;
				}
				if (percentage < 0) {
					percentage = 0;
				}

				//update volume bar and video volume
				$('.volumeBar').css('height', percentage + '%');
				videostyle[0].volume = percentage / 100;

				//change sound icon based on volume
				if (videostyle[0].volume == 0) {
					$('.sound').removeClass('sound2').addClass('muted');
				}
				else if (videostyle[0].volume > 0.5) {
					$('.sound').removeClass('muted').addClass('sound2');
				}
				else {
					$('.sound').removeClass('muted').removeClass('sound2');
				}
				}
			};
			

		})

		var video = $('#my_video_1');
		$(".vsc").on("click", function (e) {
			$(".btnPlay").removeClass("paused");
			e.preventDefault();
			video.get(0).pause()
			var videon = $(this).attr("data-src")
			video.find("source").attr("src", videon)
			video.get(0).load()
			$(".modalvideo").slideDown();
			setTimeout(function () {
				video.get(0).play();
			}, 1000);
		})
		$(".closevideo").on("click", function () {
			video.get(0).pause();
			$(".btnPlay").toggleClass("paused");
			$(".modalvideo").slideUp();
		})
//Fin Controles
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
		//Eventos Slider tipo netflix
		/*Netflix gallery*/
		function animateElements(element, number, widthSlider) {
			$(element).css({
				"transform": "translate3d(" + number + "px,0,0) scale(1.5)",
				"-moz-transform": "translate3d(" + number + "px,0,0) scale(1.5)",
				"-webkit-transform": "translate3d(" + number + "px,0,0) scale(1.5)"
			});
			$(element).prevAll().css({
				"transform": "translate3d(-" + (widthSlider - number) + "px,0,0)",
				"-moz-transform": "translate3d(-" + (widthSlider - number) + "px,0,0)",
				"-webkit-transform": "translate3d(-" + (widthSlider - number) + "px,0,0)"
			});
			$(element).nextAll().css({
				"transform": "translate3d(" + (widthSlider + number) + "px,0,0)",
				"-moz-transform": "translate3d(" + (widthSlider + number) + "px,0,0)",
				"-webkit-transform": "translate3d(" + (widthSlider + number) + "px,0,0)"
			});
		}
		var firstTime = false;
		$.each($('.gallery-netflix'), function (index, val) {
			var html = "<div class=\"btn-left\"></div><div class=\"btn-right\"></div>";
			$(val).append(html)
			$(val).find('.gallery-inner').prepend($(this).find('.gallery-inner .slide:last-child'));
			$(val).find('.gallery-inner').css({
				"transform": "translate3d(-350px,0,0)",
				"-moz-transform": "translate3d(-350px,0,0)",
				"-webkit-transform": "translate3d(-350px,0,0)"
			});
		});
		$('.gallery-netflix .slide').hover(function () {
			var widthSlider = $(this).innerWidth() / 4;
			var ind = $(this).index();
			switch (ind) {
				case 1:
					if (window.innerWidth > 768) {
						animateElements(this, 60, widthSlider);
					}
					break;
				case 2:
					if (window.innerWidth > 768) {
						animateElements(this, 60, widthSlider);
					}
					break;
				case 3:
					if (window.innerWidth > 768) {
						animateElements(this, 0, widthSlider);
					}
					break;
				case 4:
					if (window.innerWidth > 768) {
						animateElements(this, 0, widthSlider);
					}
					break;
				case 5:
					if (window.innerWidth > 768) {
						animateElements(this, -60, widthSlider);
					}
					break;
				case 6:
					if (window.innerWidth > 768) {
						animateElements(this, -60, widthSlider);
					}
					break;
			}
		}, function () {
			$('.slide').removeAttr('style');
		});

		$('.gallery-netflix').on('click', '.btn-left', function (event) {
			event.preventDefault();
			var focus = $(this).siblings('.gallery-inner');
			var lenSlides = $(focus).find('.slide').length;
			if (window.innerWidth > 768) {
				$(focus).attr("style", "transform:translate3d(-2100px,0,0)");
				$.each($(focus).find('.slide').get().reverse(), function (index, val) {
					if (index < 6) {
						$(focus).prepend($(val));
					}
				});
				setTimeout(function () {
					$(focus).css({
						"-webkit-transform": "translate3d(-350px,0,0)",
						"-moz-transform": "translate3d(-350px,0,0)",
						"transform": "translate3d(-350px,0,0)",
						"-webkit-transition": "transform 1s",
						"-moz-transition": "transform 1s",
						"transition": "transform 1s"
					});
				}, 0);
			}
			if (window.innerWidth < 768) {
				$(focus).attr("style", "transform:translate3d(-700px,0,0)");
				$.each($(focus).find('.slide').get().reverse(), function (index, val) {
					if (index < 6) {
						$(focus).prepend($(val));
					}
				});
				setTimeout(function () {
					$(focus).css({
						"-webkit-transform": "translate3d(-350px,0,0)",
						"-moz-transform": "translate3d(-350px,0,0)",
						"transform": "translate3d(-350px,0,0)",
						"-webkit-transition": "transform 1s",
						"-moz-transition": "transform 1s",
						"transition": "transform 1s"
					});
				}, 0);
				/*				$(focus).css({
									"transform": "translate3d(-700px,0,0)",
									"-moz-transform": "translate3d(-700px,0,0)",
									"-webkit-transform": "translate3d(-700px,0,0)",
									"-webkit-transition": "transform 1s",
									"-moz-transition": "transform 1s",
									"transition": "transform 1s"
								});
								setTimeout(function () {
									$.each($(focus).find('.slide'), function (index, val) {
										if (index < 6) {
											$(focus).append($(val));
										}
									});
									$(focus).css({
										"transform": "translate3d(-350px,0,0)",
										"-moz-transform": "translate3d(-350px,0,0)",
										"-webkit-transform": "translate3d(-350px,0,0)",
										"-webkit-transition": "transform 0s",
										"-moz-transition": "transform 0s",
										"transition": "transform 0s"
									});
								}, 1000);*/
			}
		});
		$('.gallery-netflix').on('click', '.btn-right', function (event) {
			event.preventDefault();
			var focus = $(this).siblings('.gallery-inner');
			if (window.innerWidth > 768) {
				$(focus).css({
					"transform": "translate3d(-2100px,0,0)",
					"-moz-transform": "translate3d(-2100px,0,0)",
					"-webkit-transform": "translate3d(-2100px,0,0)",
					"-webkit-transition": "transform 1s",
					"-moz-transition": "transform 1s",
					"transition": "transform 1s"
				});
				setTimeout(function () {
					$.each($(focus).find('.slide'), function (index, val) {
						if (index < 6) {
							$(focus).append($(val));
						}
					});
					$(focus).css({
						"transform": "translate3d(-350px,0,0)",
						"-moz-transform": "translate3d(-350px,0,0)",
						"-webkit-transform": "translate3d(-350px,0,0)",
						"-webkit-transition": "transform 0s",
						"-moz-transition": "transform 0s",
						"transition": "transform 0s"
					});
				}, 1000);
			}
			if (window.innerWidth < 768) {
				$(focus).css({
					"transform": "translate3d(-700px,0,0)",
					"-moz-transform": "translate3d(-700px,0,0)",
					"-webkit-transform": "translate3d(-700px,0,0)",
					"-webkit-transition": "transform 1s",
					"-moz-transition": "transform 1s",
					"transition": "transform 1s"
				});
				setTimeout(function () {
					$.each($(focus).find('.slide'), function (index, val) {
						if (index < 6) {
							$(focus).append($(val));
						}
					});
					$(focus).css({
						"transform": "translate3d(-350px,0,0)",
						"-moz-transform": "translate3d(-350px,0,0)",
						"-webkit-transform": "translate3d(-350px,0,0)",
						"-webkit-transition": "transform 0s",
						"-moz-transition": "transform 0s",
						"transition": "transform 0s"
					});
				}, 1000);
			}
		});
	});

})(jQuery);