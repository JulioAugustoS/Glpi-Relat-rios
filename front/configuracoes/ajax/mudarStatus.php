<?php

include('../../../../../inc/includes.php');
include('../../../../../config/config.php');
include('../../includes/config.php');

global $DB;

  $id = $_GET['id'];
  $status = $_GET['status'];
  $data = date('Y-m-d H:i:s');

  if($status == 0):
    $status = 1;
  else:
    $status = 0;
  endif;

  $update = "UPDATE glpi_plugin_relatorios_menu SET status = '$status', data_modificacao = '$data' WHERE id = '$id'";
  $save = $DB->query($update) or die('Erro ao atualizar o status');

  if($save):
    $response = array("success" => true);
  else:
    $response = array("success" => false);
  endif;

  echo json_encode($response);
