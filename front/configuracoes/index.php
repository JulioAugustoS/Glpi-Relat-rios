<?php

include('../../../../inc/includes.php');
include('../../../../inc/config.php');
include('../includes/config.php');

global $DB;
session::checkLoginUser();

?>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Relatórios - Configurações</title>
	<?php include('../includes/links.php'); ?>
</head>
<body>
	<?php include('../includes/header.php'); ?>
	<div id="container">
		<div class="topo_page">
			<h3 class="text-center">Configurações do Plugin Relatórios</h3>
			<ol class="breadcrumb">
			  	<li><a href="<?= $urlGLPI; ?>">GLPI</a></li>
			  	<li class="active">Configurações</li>
			</ol>
		</div>
		<div class="row">
			<div class="col-md-12">
				<button class="btn btn-info" style="margin-bottom:20px;" data-toggle="modal" data-target="#novoRelatorio">Novo Relatório</button>
			</div>
			<div class="col-md-12">
				<!-- Lista de Relatorios -->
				<div class="notify"></div>
				<div class="table-relatorios">
					<table class="table table-striped table-bordered" id="listRelatorios">
						<thead>
							<tr>
								<th>Código</th>
								<th>Categoria</th>
								<th>Descrição do relatório</th>
								<th>Status</th>
								<th>Ação</th>
							</tr>
						</thead>
						<tbody>
							<?php

								$Menu = "
										SELECT * FROM
											glpi_plugin_relatorios_menu
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

									if($listMenu['status'] == 0):
										$status = 'Ativo';
									else:
										$status = 'Desativado';
									endif;

									echo '
											<td>'.$listMenu['categoria'].'</td>
											<td>'.$listMenu['descricao'].'</td>
											<td>'.$status.'</td>
											<td>
												<button class="btn btn-primary" aria-hidden="true" onclick="editarRelatorio('.$listMenu['id'].')">
													<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
												</button>
												<button class="btn btn-danger" title="Excluir" onclick="excluir('.$listMenu['id'].')">
													<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
												</button>
												';
												if($listMenu['status'] == 0):
													echo '<button class="btn btn-danger" title="Desativar" onclick="mudarStatus('.$listMenu['id'].', '.$listMenu['status'].')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';
												else:
													echo '<button class="btn btn-success" title="Ativar" onclick="mudarStatus('.$listMenu['id'].', '.$listMenu['status'].')"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button>';
												endif;
									echo '
											</td>
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

	<!-- Modal cadastro de relatorio -->
	<div class="modal fade" id="novoRelatorio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">Incluir novo relatório</h4>
	      </div>
	      <div class="modal-body">
					<form name="novoRelatorio" method="GET" id="novoRel">
							<div class="form-group">
								<label>Categoria</label>
								<select name="categoria" class="form-control" required>
									<option selected>Selecione...</option>
									<option value="Chamados">Chamados</option>
									<option value="Equipamentos">Equipamentos</option>
									<option value="SAP">SAP</option>
								</select>
							</div>
							<div class="form-group">
								<label>Descrição</label>
								<input type="text" name="descricao" class="form-control" placeholder="Descrição do relatório" required>
							</div>
							<div class="form-group">
							<label>Link</label>
								<div class="input-group">
									<div class="input-group-addon">/relatorios/front/report/</div>
									<input type="text" name="link" class="form-control" placeholder="Ex: relatorio_chamados" required>
								</div>
							</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
	        <button type="button" class="btn btn-success" onclick="salvarRelatorio()">Salvar</button>
	      </div>
				</form>
	    </div>
	  </div>
	</div>

	<!-- Modal editar relatorio -->
	<div class="modal fade" id="editarRelatorio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" onclick="cancelar()" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">Incluir novo relatório</h4>
	      </div>
	      <div class="modal-body">
					<form name="editRelatorio" method="GET" id="editRel">
							<input type="hidden" name="id" id="id" value="">
							<div class="form-group">
								<label>Categoria</label>
								<select name="categoria" id="categoria" class="form-control" required>
									<option selected>Selecione...</option>
									<option value="Chamados">Chamados</option>
									<option value="Equipamentos">Equipamentos</option>
									<option value="SAP">SAP</option>
								</select>
							</div>
							<div class="form-group">
								<label>Descrição</label>
								<input type="text" name="descricao" id="descricao" class="form-control" placeholder="Descrição do relatório" required>
							</div>
							<div class="form-group">
							<label>Link</label>
								<div class="input-group">
									<div class="input-group-addon">/relatorios/front/report/</div>
									<input type="text" name="link" id="link" class="form-control" placeholder="Ex: relatorio_chamados" required>
								</div>
							</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="cancelar()">Fechar</button>
	        <button type="button" class="btn btn-success" onclick="salvarEdicaoRelatorio()">Salvar</button>
	      </div>
				</form>
	    </div>
	  </div>
	</div>

	<!-- Modal Loading -->
	<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="loading">
	  <div class="modal-dialog modal-sm" role="document">
	    <div class="modal-content text-center" style="font-size: 25px; padding: 50px;">
	      <div class="mud">Carregando...</div>
	    </div>
	  </div>
	</div>

	<script>
		// Novo relatorio
		function salvarRelatorio(){
			var dados = $('#novoRel').serialize()

      $.ajax({
          type: 'GET',
          dataType: 'json',
          url: 'ajax/novoRelatorio.php',
          async: true,
          data: dados,
					beforeSend: function() {
						$('#novoRelatorio').modal('hide')
						$('#loading').modal('show')
					},
          success: function(response) {
	        	if(response.success == true){
							console.log('Salvo com Sucesso!')
						}else{
							$('.notify').append('<div class="alert alert-error" role="alert">Erro ao salvar o relatório!</div>')
						}
          },
					complete: function() {
						$('.mud').html('<span style="color: green;font-size:35px;" class="glyphicon glyphicon-ok" aria-hidden="true"></span><br>Salvo com Sucesso!')
						setTimeout(function(){
							$('#loading').modal('hide')
							location.reload()
						}, 1500)
					}
      });

      return false;
		}

		// Editar Relatorio
		function editarRelatorio(id) {
			var id = id

			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'ajax/editarRelatorio.php?acao=consultar&id='+id,
				async: true,
				success: function(response) {
					$('#editarRelatorio').modal('show')

					if(document.getElementById('id').value == ''){
						document.getElementById('id').value = response.Dados.id
					}

					if(document.getElementById('categoria').value == 'Selecione...'){
						document.getElementById('categoria').value = response.Dados.categoria
					}

					if(document.getElementById('descricao').value == ''){
						document.getElementById('descricao').value = response.Dados.descricao
					}

					if(document.getElementById('link').value == ''){
						document.getElementById('link').value = response.Dados.link
					}
				}
			});
			return false

		}

		function salvarEdicaoRelatorio() {
			var dados = $('#editRel').serialize();

			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'ajax/editarRelatorio.php?acao=salvar',
				async: true,
				data: dados,
				beforeSend: function() {
					$('#editarRelatorio').modal('hide')
					$('#loading').modal('show')
				},
				success: function(response) {
					if(response.success == true){
						console.log('Alterado com Sucesso!')
						$('.mud').html('<span style="color: green;font-size:35px;" class="glyphicon glyphicon-ok" aria-hidden="true"></span><br>Alterado com Sucesso!')
					}else{
						$('.mud').html('<span style="color: red;font-size:35px;" class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><br>Algo deu Errado!')
					}
				},
				complete: function() {
					setTimeout(function(){
						$('#loading').modal('hide')
						location.reload()
					}, 1500)
				}
			})
		}

		// Mudar status
		function mudarStatus(id, status) {
			var id = id
			var status = status

			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'ajax/mudarStatus.php?id='+id+'&status='+status,
				async: true,
				beforeSend: function() {
					$('#loading').modal('show')
				},
				success: function(response) {
					if(response.success == true){
						console.log('Status Alterado com Sucesso!')
						$('.mud').html('<span style="color: green;font-size:35px;" class="glyphicon glyphicon-ok" aria-hidden="true"></span><br>Alterado com Sucesso!')
					}else{
						$('.mud').html('<span style="color: red;font-size:35px;" class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><br>Algo deu Errado!')
					}
				},
				complete: function() {
					setTimeout(function(){
						$('#loading').modal('hide')
						location.reload()
					}, 1000)
				}
			});
			return false;
		}

		// Excluir relatorio
		function excluir(params){
			var id = params

			$.ajax({
					type: 'GET',
					dataType: 'json',
					url: 'ajax/excluir.php?id='+id,
					async: true,
					beforeSend: function() {
						$('#loading').modal('show')
					},
					success: function(response) {
							if(response.success == true){
								console.log('Excluido com Sucesso!')
							}else{
								$('.notify').append('<div class="alert alert-error" role="alert">Erro ao excluir relatório!</div>')
							}
					},
					complete: function() {
						$('.mud').html('<span style="color: green;font-size:35px;" class="glyphicon glyphicon-ok" aria-hidden="true"></span><br>Excluido com Sucesso!')
						setTimeout(function(){
							$('#loading').modal('hide')
							location.reload()
						}, 1500)
					}
			});
			return false;
		}

		function resetForm() {
        document.getElementById('categoria').value = ''
				document.getElementById('descricao').value = ''
				document.getElementById('link').value = ''
		}

		function cancelar() {
			resetForm()
		}

		$(document).ready(function() {
			$('#listRelatorios').DataTable({
				"order": [[ 0, "desc" ]]
			});
		});
	</script>
</body>
</html>
