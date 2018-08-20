<?php

include('../../../inc/includes.php');
include('../../../config/config.php');
include('includes/config.php');

global $DB;
session::checkLoginUser();

?>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Relatórios</title>
	<?php include('includes/links.php'); ?>
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div id="container">
		<div class="topo_page">
			<h3 class="text-center">Menu Relatórios</h3>
			<ol class="breadcrumb">
			  	<li><a href="<?= $urlGLPI; ?>">GLPI</a></li>
			  	<li class="active">Relatórios</li>
			</ol>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="table-relatorios">
					<table class="table table-striped table-bordered" id="listRelatorios">
						<thead>
							<tr>
								<th>Código</th>
								<th>Categoria</th>
								<th>Descrição do relatório</th>
								<th>Ação</th>
							</tr>
						</thead>
						<tbody>
							<?php

								$Menu = "
										SELECT * FROM
											glpi_plugin_relatorios_menu
										WHERE status = 0
										";
								$sqlMenu = $DB->query($Menu) or die('Error');

								while($listMenu = $DB->fetch_assoc($sqlMenu)):

									echo '<tr>';

									if($listMenu['id'] < 10):
										echo '<td>00'.$listMenu['id'].'</td>';
									elseif($listMenu['id'] >= 10 && $listMenu['id'] < 100):
										echo '<td>0'.$listMenu['id'].'</td>';
									else:
										echo '<td>'.$listMenu['id'].'</td>';
									endif;

									echo '
											<td>'.$listMenu['categoria'].'</td>
											<td>'.$listMenu['descricao'].'</td>
											<td><a href="'.$urlPlugin.'front/report/'.$listMenu['link'].'?idTela='.$listMenu['id'].'">Acessar</a></td>
										</tr>
										';

								endwhile;

							?>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<script>
		$(document).ready(function() {

			$('#listRelatorios').DataTable({
				"order": [[ 3, "desc" ]]
			});

		});
	</script>
</body>
</html>
