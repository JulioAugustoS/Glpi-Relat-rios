<?php

include('../../../../../inc/includes.php');
include('../../../../../config/config.php');
include('../../includes/config.php');
include('../../api/functions.php');

global $DB;

$ano = $_GET['ano'];
$equipamento = $_GET['equipamento'];

$dataInicial = $ano . "-01-01";
$dataFinal = $ano . "-12-31";

  $locations = "SELECT
                  COUNT(glpi_locations.id) AS total,
                  glpi_locations.id AS locationsId,
                  glpi_locations.name AS locationsName
                FROM glpi_locations
                WHERE name NOT IN ('Agências')
                  AND entities_id = 6
                  AND name LIKE '%Agência%'
                  OR name LIKE '%Garagem%'
                  AND id NOT IN (27,142,148)
                  AND entities_id NOT IN (0)
                GROUP BY locationsName
                ORDER BY name ASC
                ";
  $result_locations = $DB->query($locations) or die('Erro ao buscar as localidades');

  $totalJan = 0;
  $totalFev = 0;
  $totalMar = 0;
  $totalAbr = 0;
  $totalMai = 0;
  $totalJun = 0;
  $totalJul = 0;
  $totalAgo = 0;
  $totalSet = 0;
  $totalOut = 0;
  $totalNov = 0;
  $totalDez = 0;

  while($list_locations = $DB->fetch_assoc($result_locations)):

    echo $list_locations['LocationsName'];

    $chamados = "SELECT
                  COUNT(glpi_tickets_users.tickets_id) AS total,
                  AVG(glpi_tickets.close_delay_stat) AS avgtime,
  								SUM(CASE WHEN (MONTH(date) = 1) THEN 1 ELSE 0 END) QtdJan,
  								SUM(CASE WHEN (MONTH(date) = 2) THEN 1 ELSE 0 END) QtdFev,
  								SUM(CASE WHEN (MONTH(date) = 3) THEN 1 ELSE 0 END) QtdMar,
  								SUM(CASE WHEN (MONTH(date) = 4) THEN 1 ELSE 0 END) QtdAbr,
  								SUM(CASE WHEN (MONTH(date) = 5) THEN 1 ELSE 0 END) QtdMai,
  								SUM(CASE WHEN (MONTH(date) = 6) THEN 1 ELSE 0 END) QtdJun,
  								SUM(CASE WHEN (MONTH(date) = 7) THEN 1 ELSE 0 END) QtdJul,
  								SUM(CASE WHEN (MONTH(date) = 8) THEN 1 ELSE 0 END) QtdAgo,
  								SUM(CASE WHEN (MONTH(date) = 9) THEN 1 ELSE 0 END) QtdSet,
  								SUM(CASE WHEN (MONTH(date) = 10) THEN 1 ELSE 0 END) QtdOut,
  								SUM(CASE WHEN (MONTH(date) = 11) THEN 1 ELSE 0 END) QtdNov,
  								SUM(CASE WHEN (MONTH(date) = 12) THEN 1 ELSE 0 END) QtdDez
                FROM glpi_tickets_users

                LEFT JOIN glpi_tickets
                  ON (glpi_tickets.id = glpi_tickets_users.tickets_id)

                LEFT JOIN glpi_users
                  ON (glpi_users.id = glpi_tickets_users.users_id)

                WHERE glpi_tickets.date BETWEEN '$dataInicial' AND '$dataFinal'
                  AND (glpi_tickets.name LIKE ('%$equipamento%')
                  OR glpi_tickets.name LIKE ('%($equipamento)%'))
                  AND glpi_tickets.is_deleted = 0
                  AND glpi_users.locations_id = ".$list_locations['locationsId']."
                ";
    $resultChamados = $DB->query($chamados) or die('Erro ao buscar os chamados');
    $listChamados = $DB->fetch_assoc($resultChamados);

    $slaTime = ($listChamados['avgtime'] / $listChamados['total']);

    if($listChamados['total'] != 0):



      if($listChamados['QtdJan'] < 1): $jan = ''; else: $jan = $listChamados['QtdJan']; endif;
      if($listChamados['QtdFev'] < 1): $fev = ''; else: $fev = $listChamados['QtdFev']; endif;
      if($listChamados['QtdMar'] < 1): $mar = ''; else: $mar = $listChamados['QtdMar']; endif;
      if($listChamados['QtdAbr'] < 1): $abr = ''; else: $abr = $listChamados['QtdAbr']; endif;
      if($listChamados['QtdMai'] < 1): $mai = ''; else: $mai = $listChamados['QtdMai']; endif;
      if($listChamados['QtdJun'] < 1): $jun = ''; else: $jun = $listChamados['QtdJun']; endif;
      if($listChamados['QtdJul'] < 1): $jul = ''; else: $jul = $listChamados['QtdJul']; endif;
      if($listChamados['QtdAgo'] < 1): $ago = ''; else: $ago = $listChamados['QtdAgo']; endif;
      if($listChamados['QtdSet'] < 1): $set = ''; else: $set = $listChamados['QtdSet']; endif;
      if($listChamados['QtdOut'] < 1): $out = ''; else: $out = $listChamados['QtdOut']; endif;
      if($listChamados['QtdNov'] < 1): $nov = ''; else: $nov = $listChamados['QtdNov']; endif;
      if($listChamados['QtdDez'] < 1): $dez = ''; else: $dez = $listChamados['QtdDez']; endif;

      $data[] = array(
        "Localidade" => $list_locations['locationsName'],
        "Jan" => $jan,
        "Fev" => $fev,
        "Mar" => $mar,
        "Abr" => $abr,
        "Mai" => $mai,
        "Jun" => $jun,
        "Jul" => $jul,
        "Ago" => $ago,
        "Set" => $set,
        "Out" => $out,
        "Nov" => $nov,
        "Dez" => $dez,
        "Total" => $listChamados['total'],
        "Sla" => time_hrs($slaTime)
      );

    endif;

  endwhile;

  $results = [
      "sEcho" => 1,
      "iTotalRecords" => count($data),
      "iTotalDisplay" => count($data),
      "data" => $data
  ];

echo json_encode($results);
