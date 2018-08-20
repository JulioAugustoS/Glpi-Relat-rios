<?php

$profileIdAtivo = $_SESSION["glpiID"];

echo '
	<header>
		<div class="bar-topo">
			<div class="col-md-12">
				<div class="logo">
					<img src="'.$urlPlugin.'front/images/logo_glpi.png" alt="Passaro Marron">
				</div>
				<nav class="menu fright">
					<ul class="nav nav-pills">
			';

			if($profileIdAtivo != 11):
				echo '<li role="presentation"><button class="btn btn-link branco" onclick="pluginHome()">Home</button></li>';
				echo '<li role="presentation"><button class="btn btn-link branco" onclick="voltarGlpi()">Voltar ao GLPI</button></li>';
			else:
				echo '<li role="presentation"><button class="btn btn-link branco" onclick="goConfiguracoes()">Configurações</button></li>';
			  echo '<li role="presentation"><button class="btn btn-link branco" onclick="pluginHome()">Home</button></li>';
			  echo '<li role="presentation"><button class="btn btn-link branco" onclick="voltarGlpi()">Voltar ao GLPI</button></li>';
			endif;

echo '
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<script>
			function goConfiguracoes() {
				location.href="'.$urlPlugin.'front/configuracoes/"
			}

			function voltarGlpi() {
				location.href="'.$urlGLPI.'";
			}

			function pluginHome() {
				location.href="'.$urlPlugin.'front/index.php"
			}
		</script>

		';
