<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Video Player</title>
    <link rel="stylesheet" href="css/video.css">
</head>

<body>
    <div class="modalvideo" style="display:block;">
        <div class="containerVideo">
            <div id="Video">
                <div class="preheadervideo">
                    <div class="headervideo">
                        <div class="backclose closevideo">
                            <div class="img">
                                <img src="img/backvideo.png" alt="">
                            </div>
                            <p>Volver a Menu</p>
                        </div>
                    </div>
                </div>
                <video id="my_video_1" class="videox" preload="none" poster='img/partidaso.jpg'>
                    <source src="http://www.html5videoplayer.net/videos/toystory.mp4">
                </video>
                <div class="control">
                    <div class="mainvideo">
                        <div class="progressbarcont">
                            <div class="progressBar">
                                <div class="bufferBar">

                                </div>
                                <div class="timeBar">
                                    <div class="pointervideo">

                                    </div>
                                </div>
                            </div>
                            <div class="progressTime">
                                <span class="current"></span>
                                <span class="duration"></span>
                            </div>
                        </div>
                        <div class="controls">
                            <div class="blockco">
                                <div class="cont playbtn">
                                    <a href="#" class="btnPlay paused">
                                        <img class="fa-pause-circle-o" src="img/stopicon.png">
                                        <img class="fa-play-circle-o" src="img/playicon.png">
                                    </a>
                                </div>
                                <div class="cont volumebtn">
                                    <a href="#" class="sound">
                                        <img class="fa-volume-off" src="img/nosoundicon.png">
                                        <img class="fa-volume-up" src="img/soundfullicon.png">

                                    </a>
                                    <div class="prevolume">
                                        <div class="volume">
                                            <div class="volumeBar">
                                                <div class="pointervideo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="blockco">
                                <div class="cont subtitle">
                                    <a href="" class="subtitle-a"><img src="img/subicon.png" alt=""></a>
                                    <div class="data-action">
                                        <a href="" class="sub-es actions">Sub Esp</a>
                                        <a href="" class="sub-en actions">Sub Eng</a>
                                    </div>
                                </div>
                                <div class="cont config">
                                    <a href="" class="config-a"><img src="img/confiicon.png" alt=""></a>
                                     <div class="data-action">
                                        <a href="" class="quality-360 actions">360p</a>
                                        <a href="" class="quality-720 actions">720p</a>
                                         <a href="" class="quality-1080 actions">1080</a>
                                     </div>
                                </div>
                                <div class="cont info">
                                    <a href="" class="chromecast-a"><img src="img/infoicon.png" alt=""></a>
                                     <div class="data-action">
                                         <div class="info-data actions">
                                             <a href="" class=" moreinfo">¿Necesitas ayuda?</a>
                                         </div>
                                     </div>
                                </div>
                                <div class="cont chromecast">
                                    <a href="" class="chromecast-a"><img src="img/chromecasticon.png" alt=""></a>
                                     
                                </div>
                                <div class="cont fullscreen">
                                    <a href="" class="full-a"><img src="img/fullscreen.png" alt=""></a>
                                    
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/video.js"></script>
</body>

</html>