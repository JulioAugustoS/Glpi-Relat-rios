<?php

include('../../../../../inc/includes.php');
include('../../../../../config/config.php');
include('../../includes/config.php');
include('../../api/functions.php');

global $DB;

$response = array();
$empresa = $_GET['empresa'];

  $Locations = "SELECT
                  glpi_locations.id   AS IDLocation,
                  glpi_locations.name AS NameLocation
                FROM glpi_locations
                WHERE glpi_locations.id = 56
              ";
  $sqlLocations = $DB->query($Locations) or die('Erro ao retornar dados de localização');
  $listLocations = $DB->fetch_assoc($sqlLocations);
  $locationID = $listLocations['IDLocation'];

  $states_id = 2;
  $is_deleted = 0;

  $Equipamento = "SELECT
                    glpi_monitors.id        AS ID,
                    glpi_monitors.name      AS Nome,
                    glpi_monitors.serial    AS NumSerie,
                    glpi_monitors.date_mod  AS Modificado
                  FROM glpi_monitors
                  WHERE is_deleted = '$is_deleted'
                    AND entities_id = '$empresa'
                    AND states_id = '$states_id'
                    OR locations_id = '$locationID'

                  UNION

                  SELECT
                    glpi_computers.id       AS ID,
                    glpi_computers.name     AS Nome,
                    glpi_computers.serial   AS NumSerie,
                    glpi_computers.date_mod AS Modificado
                  FROM glpi_computers
                  WHERE is_deleted = '$is_deleted'
                    AND entities_id = '$empresa'
                    AND states_id = '$states_id'
                    OR locations_id = '$locationID'

                  UNION

                  SELECT
                    glpi_printers.id        AS ID,
                    glpi_printers.name      AS Nome,
                    glpi_printers.serial    AS NumSerie,
                    glpi_printers.date_mod  AS Modificado
                  FROM glpi_printers
                  WHERE is_deleted = '$is_deleted'
                    AND entities_id = '$empresa'
                    AND states_id = '$states_id'
                    OR locations_id = '$locationID'

                  UNION

                  SELECT
                    glpi_peripherals.id        AS ID,
                    glpi_peripherals.name      AS Nome,
                    glpi_peripherals.serial    AS NumSerie,
                    glpi_peripherals.date_mod  AS Modificado
                  FROM glpi_peripherals
                  WHERE is_deleted = '$is_deleted'
                    AND entities_id = '$empresa'
                    AND states_id = '$states_id'
                    OR locations_id = '$locationID'
                ";
  $sqlEquipamento = $DB->query($Equipamento) or die('Erro ao recuperar dados dos equipamentos');

  while($listEquipamento = $DB->fetch_assoc($sqlEquipamento)):
    $Manut = "SELECT
                glpi_logs.itemtype  AS Equipamento,
                glpi_logs.items_id  AS IDEquipamento
              FROM glpi_logs
              WHERE items_id = '".$listEquipamento['ID']."'
            ";
    $sqlManut = $DB->query($Manut) or die('Erro ao recuperar dados de logs');
    $listManut = $DB->fetch_assoc($sqlManut);

    $Tempo = conv_data($listEquipamento['Modificado']);
    $Dias = ' dias';
    $Tempo = calculaDatas($Tempo);

    $data[] = array(
      "ID" => $listEquipamento['ID'],
      "Nome" => $listEquipamento['Nome'],
      "NumSerie" => $listEquipamento['NumSerie'],
      "Modificado" => conv_data_hora($listEquipamento['Modificado']),
      "Tempo" => $Tempo . $Dias
    );

  endwhile;

  $results = [
    "sEcho" => 1,
    "iTotalRecords" => count($data),
    "iTotalDisplay" => count($data),
    "aaData" => $data
  ];

  echo json_encode($results);
