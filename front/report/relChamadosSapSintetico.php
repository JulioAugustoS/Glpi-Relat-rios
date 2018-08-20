<?php
include('../../../../inc/includes.php');
include('../../../../config/config.php');
include('../includes/config.php');
include('../api/functions_all.php');
include('../api/functions.php');
?>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Relatório Sintético de Chamados - SAP</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
	<meta http-equiv="content-language" content="en-us" />
	<?php include('../includes/links.php'); ?>
</head>
<body>
	<?php
		include('../includes/header.php');
		if(!isset($_GET['idTela'])):
			echo '<div class="container"><div class="col-md-12 text-center">';
			echo '<div class="alert alert-danger" style="font-size:20px;">Você não tem permissão para acessar essa tela diretamente pela URL, volte ao menu e selecione o relatório desejado!</div>';
			echo '<a href="'.$urlPlugin.'front/index.php" class="btn btn-danger btn-lg"> Voltar Menu </a>';
			echo '</div></div>';
		else:
	?>
	<div id="container" style="margin-bottom: 40px;">
		<div class="topo_page">
			<h3 class="text-center">Relatório Sintético de Chamados - SAP</h3>
			<ol class="breadcrumb">
			  	<li><a href="<?= $urlGLPI; ?>">GLPI</a></li>
			  	<li><a href="<?= $urlPlugin; ?>front/index.php">Relatórios</a></li>
			  	<li class="active">Relatório Sintético de Chamados - SAP</li>
			</ol>
		</div>
		<form name="chamadoSapSintetico" action="" method="GET" class="text-center">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12">
						<div class="form-group col-xs-6 col-md-2 padd-padrao" style="margin-left:25%;">
							<label>Ano</label>
							<select class="form-control" name="status" id="status">
								<option value="todos">Todos</option>
								<option value="2">Processando</option>
								<option value="4">Pendente</option>
								<option value="6">Fechado</option>
							</select>
						</div>
						<div class="form-group col-xs-6 col-md-2 padd-padrao">
							<label>Ano</label>
							<select class="form-control" name="ano" id="ano">
								<option value="2018">2018</option>
								<option value="2017">2017</option>
							</select>
						</div>
						<div class="form-group col-xs-6 col-md-2">
					  		<label style="color: #FFF;">.</label>
							<button type="button" class="btn btn-success col-md-12" onclick="gerarRelChamadosSapAnual()">Gerar Relatório</button>
					  </div>
					</div>
				</div>
			</div>
    </form>
		<hr>
		<div class="table-responsive">
			<table id="tabelaChamadosSapAnual" class="display table table-striped table-bordered" style="width:100%"></table>
		</div>
  </div>
	<?php endif; ?>
</body>
</html>
