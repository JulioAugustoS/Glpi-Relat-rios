<?php

include('../../../../../inc/includes.php');
include('../../../../../inc/config.php');
include('../../includes/config.php');

global $DB;

if($_GET['acao'] == 'consultar'):

  $id = $_GET['id'];

  $consulta = "SELECT * FROM glpi_plugin_relatorios_menu WHERE id = '$id'";
  $sql = $DB->query($consulta) or die('Erro ao retornar os dados!');

  $list = $DB->fetch_assoc($sql);

  if($sql):
    $response = array("success" => true, "Dados" => $list);
  else:
    $response = array("success" => false);
  endif;

endif;

if($_GET['acao'] == 'salvar'):

  $id = $_GET['id'];
  $categoria  	= $_GET['categoria'];
	$descricao 	 	= $_GET['descricao'];
	$link 			  = $_GET['link'];
	$data	        = date('Y-m-d H:i:s');

  $update = "UPDATE glpi_plugin_relatorios_menu
              SET categoria = '$categoria', descricao = '$descricao', link = '$link', data_modificacao = '$data'
              WHERE id = '$id'
            ";
  $sql = $DB->query($update) or die('Erro ao atualizar o relatório!');

  if($sql):
    $response = array("success" => true);
  else:
    $response = array("success" => false);
  endif;

endif;

echo json_encode($response);
