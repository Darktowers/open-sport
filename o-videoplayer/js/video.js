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
			$('.duration').text(timeFormat(videostyle[0].duration));
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
				videostyle[0].onprogress = function () {
					if(videostyle[0].buffered.length>0){
							var w = 100*(videostyle[0].buffered.end(0))/videostyle[0].duration;
							$('.bufferBar').css('width', w + '%');
						}

				};
			 })

			 

			$('.fullscreen').on('click', function (e) {
				e.preventDefault();
				//For Webkit
				videostyle[0].webkitEnterFullscreen();

				//For Firefox
				videostyle[0].mozRequestFullScreen();

				return false;
			});
			/*
			$("#Video").hover(function () {
				$(".preheadervideo").stop().fadeIn();
				$(".control").stop().fadeIn();
			}, function () {
				$(".preheadervideo").stop().fadeOut();
				$(".control").stop().fadeOut();
			});*/
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

			};



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