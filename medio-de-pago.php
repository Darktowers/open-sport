<!DOCTYPE html>
<html lang="es" xml:lang="es">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Open Sport</title>
	<meta name="keywords" content="">
	<meta name="author" content="">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0">
	<link rel="icon" href="favicon.ico">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/other-styles.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
	<div class="notification">
		<img src="img/transparent-rectangles-small.png" alt="" class="mosaico">
		<div class="wrap slidex">
			<div class="notifi">
				
				<p><b>EN VIVO:</b> Barça vs Real Madrid, desde el Estadio Santiago Bernabéu</p>
				<a href="" class="btn btn-b_black">VER</a>
			</div>
			<div class="notifi">
		
				<p><b>EN VIVO:</b> Atletico Madrid vs Galicia desde el Estadio Santiago Bernabéu</p>
				<a href="" class="btn btn-b_black">VER</a>
			</div>
			<div class="notifi">
				
				<p><b>EN VIVO:</b> Formula 1 G.P. MALASIA</p>
				<a href="" class="btn btn-b_black">VER</a>
			</div>
		</div>
	</div>
	<header class="header">

		<div class="header-Container wrap">
			<a href="index.php">
			<div class="header-Container-Logo">
				<img src="img/logo-open-sport.svg" alt="">
			</div>
			</a>
			<div class="menu-icon">
				<i class="fa fa-bars" aria-hidden="true"></i>
			</div>
		<div class="pre-menu">
			<div class="menu">
				<div class="filtro"></div>
				<i class="fa fa-times movil"></i>
				<a href="index.php">
				<div class="header-Container-Logo movil">
					<center>
						<img  style="display:inline-block"src="img/logo-open-sport.svg" alt="">
					</center>
				</div>
				</a>
				<ul>
					<li><a href="programacion.php">PRÓXIMOS EVENTOS</a></li>
					<li><a href="deportes.php">DEPORTES</a></li>
					<li><a href="">CONTRÁTALO</a></li>
                    <li class="login user"><a href=""><i class="fa fa-user"></i><p>Manuel</p></a></li>
				</ul>
			</div>
		</div>		
		</div>
	</header>
	<div class="wrapper">
<div class="preheader"></div>
<div class="profile">
    <div class="profile-Box">
        <div class="box">
            <div class="tile email"><i class="fa fa-user"></i><p>manugarcia@gmail.com</p></div>
            <div class="tile"><a href=""><i class="fa fa-cog"></i><p>Mi cuenta</p></a></div>
            <div class="tile"><a href=""><i class="fa fa fa-question-circle-o"></i><p>Ayuda</p></a></div>
            <div class="tile"><a href=""><i class="fa fa-power-off"></i><p>Cerrar Sesión en <b>Opensport</b></p></a></div>            
        </div>
    </div>
    <div class="profile-Account">
    <div class="titlex">
     <h1 class="title">MI CUENTA</h1>
<a href="profile.php"><p><i class="fa fa-angle-left"></i>VOLVER</p></a>
    </div>

    <div class="facturacion">
        <div class="colx principal"><p>ACTUALIZAR MEDIO DE PAGO</p>
			<div class="seguro">
				<img src="img/seguro.svg" alt="">
				<div class="segurocont">
					<p>Servicio Seguro</p>
					<a href="" class="t_purple">Más información</a>
				</div>
			</div>
		</div>
        <div class="colx">
            
            <div class="formul formulx contra">
                <p>Se aplicará tu nuevo método de pago a tu siguiente ciclo de facturación. <br> Tu suscripción mensual se factura el primer día de cada periodo de facturación.</p>                
                <div class="precontent">
                    <div class="tabpa ">
                        <p><b>Tarjeta de crédito o débito</b></p>
                        <div class="iconspago">
                            <img src="img/visa.svg" alt="">
                            <img src="img/mastercard.svg" alt="">
                            <img src="img/angle-up.svg" alt="" class="contentdown">
                        </div>
                    </div>
                    <div class="contentpa">
                        <div class="pago" >
							 <div class="card-wrapper"></div>
                            <form action="">
                                <div class="doublecolumn">
                                    <div class="column">
                                        <label for="">Nombres</label>
										<input id="column-left" type="text" name="first-name" />
                                       
                                    </div>
                                    <div class="column">
                                        <label for="">Apellidos</label>
										<input id="column-right" type="text" name="last-name" />                                    
                                    </div>
                                </div>
                                <label for="">Número de la tarjeta</label>
								<input id="input-field" type="text" name="number" placeholder="**** **** **** ****"/>
                                <div class="doublecolumn">
                                    <div class="column">
                                        <label for="">Fecha de caducidad</label>
          								<input id="column-left" type="text" name="expiry" placeholder="MM / YY"/>      
                                    </div>
                                    <div class="column">
                                        <label for="">Código de seguridad</label>
                                        <input id="column-right" type="text" name="cvc" placeholder="CCV"/>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <input type="submit" value="ACTUALIZAR INFORMACIÓN TARJETA" class="btn-green">
									<img src="img/norton.png" alt="">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="precontent">
                    <div class="tabpa">
                        <p><b>PayPal</b></p>
                        <div class="iconspago">
                            <img class="paypal" src="img/paypal.svg" alt="">
                            <img src="img/angle-up.svg" alt="" class="contentdown">
                        </div>

                    </div>
                    <div class="contentpa">
						<p>Para completar la suscripción, haz clic en el botón “Continuar en PayPal” e incia sesión en PayPal contu correo y contraseña.</p>
						<a href="" class="btn-green">Continuar en PayPal</a>
                    </div>
					<a href="" class="t_purple">Canjear una tarjeta o código Opensport</a>
                </div>
				
		    </div>
        </div>
    </div>

</div>
<!--<div class="premodal" >
	<div class="modal">
		<div class="formul email" >
			<form action="">
				<i class="fa fa-times"></i>
				<h3 class="t_purple">CAMBIAR CORREO</h3>
				<label for="">Nueva dirección de correo electrónico</label>
				<input type="email" name="email">
				<label for="">Verificar dirección de correo electrónico</label>
				<input type="email"name="reemail" >
				<div class="buttons">
					<a href="#" class="cancelar btn-gray">CANCELAR</a>
					<input type="submit" value="GUARDAR" class="btn-green">
				</div>
			</form>
		</div>
		<div class="formul contra">
			<form action="">
				<i class="fa fa-times"></i>
				<h3 class="t_purple">CAMBIAR CONTRASEÑA</h3>
				<label for="">Contraseña actual</label>
				<input type="password" name="pass">
				<label for="">Nueva contraseña</label>
				<input type="password"name="repass" >
				<div class="buttons">
					<a href="#" class="cancelar btn-gray">CANCELAR</a>
					<input type="submit" value="GUARDAR" class="btn-green">
				</div>
			</form>
		</div>
		<div class="formul facturacion">
			<form action="">
				<i class="fa fa-times"></i>
				<h3 class="t_purple">DATOS DE FACTURACIÓN</h3>
				<label for="">Nombres y apellidos</label>
				<input type="text" name="nombres">
				<label for="">Dirección de facturación</label>
				<input type="text"name="direccion" >
				<div class="doublecolumn">
					<div class="column">
						<label for="">Ciudad</label>
						<input type="text"name="city" >
					</div>
					<div class="column">
						<label for="">Provincia / Región</label>
						<input type="text"name="region" >
					</div>
				</div>
				<div class="doublecolumn">
					<div class="column">
						<label for="">Codigo postal</label>
						<input type="text"name="postal" >
					</div>
					<div class="column">
						<label for="">Pais</label>
						<select name="pais" id="">
							<option value="0">Paises...</option>
							<option value="0">España</option>
							<option value="0">Colombia</option>
							<option value="0">USA</option>
							
						</select>
					</div>
				</div>
				<label for="">Telefono</label>
				<input type="text"name="telefono" >
				<div class="buttons">
					<a href="#" class="cancelar btn-gray">CANCELAR</a>
					<input type="submit" value="GUARDAR" class="btn-green">
				</div>
			</form>
		</div>
		<div class="formul pago" >
			<form action="">
				<i class="fa fa-times"></i>
				<h3 class="t_purple">ACTUALIZAR MÉTODO DE PAGO</h3>
				<label for="">Nombres y apellidos</label>
				<input type="text" name="nombres">
				<label for="">Número de la tarjeta</label>
				<input type=text pattern="[0-9]{13,16}" name="creditcard">

				<div class="doublecolumn">
					<div class="column">
						<label for="">Fecha de caducidad</label>
						<input type="text"name="date" placeholder="mm/aa">
					</div>
					<div class="column">
						<label for="">Código de seguridad</label>
						<input type="text" name="codigose" placeholder="***">
					</div>
				</div>
				<a href="" class="t_purple">Más información sobre métodos de pago</a>
				<div class="buttons">
					<a href="#" class="cancelar btn-gray">CANCELAR</a>
					<input type="submit" value="GUARDAR" class="btn-green">
				</div>
			</form>
		</div>
		<div class="formul telefono" >
			<form action="">
				<i class="fa fa-times"></i>
				<h3 class="t_purple">CAMBIAR TELÉFONO</h3>
				<label for="">Nueva número de teléfono</label>
				<input type="text" name="telefono">
				<div class="buttons">
					<a href="#" class="cancelar btn-gray">CANCELAR</a>
					<input type="submit" value="GUARDAR" class="btn-green">
				</div>
			</form>
		</div>
		<div class="formul"></div>
		<div class="formul"></div>
		<div class="formul"></div>
	</div>
</div>-->

<?php include("footer.php");?>