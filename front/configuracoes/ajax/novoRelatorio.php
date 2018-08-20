<?php

include('../../../../../inc/includes.php');
include('../../../../../config/config.php');
include('../../includes/config.php');

global $DB;

	$categoria  	= $_GET['categoria'];
	$descricao 	 	= $_GET['descricao'];
	$link 			  = $_GET['link'] . '.php';
	$data_cadastro 	= date('Y-m-d H:i:s');

	$insert = "INSERT INTO glpi_plugin_relatorios_menu
			(categoria,descricao,link,data_cadastro,status)
			VALUES ('$categoria', '$descricao', '$link', '$data_cadastro', 0)";
	$save = $DB->query($insert) or die('Error ao salvar o relatorio');

  if($save):
    $response = array("success" => true);
  else:
    $response = array("success" => false);
  endif;
      
  echo json_encode($response);
