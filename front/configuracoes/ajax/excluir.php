<?php

include('../../../../../inc/includes.php');
include('../../../../../inc/config.php');
include('../../includes/config.php');

global $DB;
//session::checkLoginUser();

$id = $_GET['id'];

$delete = "DELETE FROM glpi_plugin_relatorios_menu WHERE id = '$id'";
$del = $DB->query($delete) or die('Erro ao excluir o relatório');

if($del):
  $response = array("success" => true);
else:
  $response = array("success" => false);
endif;
    
echo json_encode($response);
