<?php include("header-usuario.php");?>
<section class="banner bannerusuario">
    <div class="banner-Container">
        <div class="banner-Container-Item">
            <div class="back">
                <img src="img/partidaso.jpg" alt="">
            </div>
            <div class="content">
                <div class="text">
                    <h1>EL MADRID <br> BARÇA ESTÁ <br> EMITIÉNDOSE</h1> <h2>NO TE LO PUEDES PERDER</h2>
                    <a href="" class="btn btn-green" tabindex="-1">PRUEBA UN MES GRATIS</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="content-tab cont-3 backblue" style="display: block">
    <div id="Video">
    <video id="my_video_1" class="video-js vjs-default-skin" width="640px" height="267px"
        controls preload="none" poster='img/partidaso.jpg'
        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
        <source src="video/open-sport-video-v5.mp4" type='video/mp4' />
        <source src="http://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
    </video>
    </div>
</section>
<script src="http://vjs.zencdn.net/5.16.0/video.js"></script>
<?php include("footer.php");?>