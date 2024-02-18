<?php
include '.\includes\templates\header.php';
?>

<body>
	<center>
	<div id="contenedor">
		<form id="formulario" name="formulario" method="post" action="">
			<h2>indexedDB</h2>
				<table>
					<tr>
						<td>Nombre</td>
						<td><input type="text" name="nombre" id="nombre"></td>
					</tr>
					<tr>
						<td>Empresa</td>
						<td><input type="text" name="empresa" id="empresa"></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="button" name="boton" id="boton" value='Enviar'>
						
					</tr>
				</table>		
		</form>
		<br>
		<br>
		<label>Nombre:</label>
		<input type="text" name="deleteClave" id="deleteClave">
		<input type="submit" name="delete" id='delete' value="Borrar"></td>	
	</div>
</center>
    <div>
        <h2><u>Clientes Insatisfechos</u></h2>
        <ul id="listaclientes"></ul>
    </div>
</body>
<script src="../js/indexDB.js"></script>
<?php
 include '.\includes\templates\footer.php';
?>