<?php

include('../../../../../inc/includes.php');
include('../../includes/config.php');
include('../../api/functions.php');

global $DB;

$ano = $_GET['ano'];
$status = $_GET['status'];

if($status == 'todos'):
  $queryStatus = 'status IN (1, 2, 3, 4, 5, 6)';
elseif($status == 10):
  $queryStatus = 'status IN(2, 3, 4)';
else:
  $queryStatus = 'status = '.$status.'';
endif; 

$dataIncial = $ano . "-01-01";
$dataFinal = $ano . "-12-31";

  $categories = "SELECT
                    glpi_itilcategories.id AS ID,
                    glpi_itilcategories.name AS Nome
                 FROM glpi_itilcategories
                 WHERE id IN(39, 32, 33, 38, 30, 29, 28, 31, 25, 24, 26)
              ";
  $result_categories = $DB->query($categories) or die('Erro ao buscar as categorias');

  while($list_categories = $DB->fetch_assoc($result_categories)):
    if($status != 6):
      $chamados = "SELECT
                      COUNT(id) AS total,
                      AVG(close_delay_stat) AS avgtime,
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
                    FROM glpi_tickets
                    WHERE date BETWEEN '$dataIncial' AND '$dataFinal'
                      AND is_deleted = 0
                      AND ".$queryStatus."
                      AND itilcategories_id = ". $list_categories['ID'] ."
                  ";
      $resultChamados = $DB->query($chamados) or die('Erro ao buscar os chamados');
      $listChamados = $DB->fetch_assoc($resultChamados);
    else:
      $chamados = "SELECT
                      COUNT(id) AS total,
                      AVG(close_delay_stat) AS avgtime,
                      SUM(CASE WHEN (MONTH(closedate) = 1) THEN 1 ELSE 0 END) QtdJan,
                      SUM(CASE WHEN (MONTH(closedate) = 2) THEN 1 ELSE 0 END) QtdFev,
                      SUM(CASE WHEN (MONTH(closedate) = 3) THEN 1 ELSE 0 END) QtdMar,
                      SUM(CASE WHEN (MONTH(closedate) = 4) THEN 1 ELSE 0 END) QtdAbr,
                      SUM(CASE WHEN (MONTH(closedate) = 5) THEN 1 ELSE 0 END) QtdMai,
                      SUM(CASE WHEN (MONTH(closedate) = 6) THEN 1 ELSE 0 END) QtdJun,
                      SUM(CASE WHEN (MONTH(closedate) = 7) THEN 1 ELSE 0 END) QtdJul,
                      SUM(CASE WHEN (MONTH(closedate) = 8) THEN 1 ELSE 0 END) QtdAgo,
                      SUM(CASE WHEN (MONTH(closedate) = 9) THEN 1 ELSE 0 END) QtdSet,
                      SUM(CASE WHEN (MONTH(closedate) = 10) THEN 1 ELSE 0 END) QtdOut,
                      SUM(CASE WHEN (MONTH(closedate) = 11) THEN 1 ELSE 0 END) QtdNov,
                      SUM(CASE WHEN (MONTH(closedate) = 12) THEN 1 ELSE 0 END) QtdDez
                    FROM glpi_tickets
                    WHERE date BETWEEN '$dataIncial' AND '$dataFinal'
                      AND is_deleted = 0
                      AND ".$queryStatus."
                      AND itilcategories_id = ". $list_categories['ID'] ."
                  ";
      $resultChamados = $DB->query($chamados) or die('Erro ao buscar os chamados');
      $listChamados = $DB->fetch_assoc($resultChamados);
    endif;

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
      "Categoria" => $list_categories['Nome'],
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
      "Total" => $listChamados['total']
    );

  endwhile;

  $results = [
      "sEcho" => 1,
      "iTotalRecords" => count($data),
      "iTotalDisplay" => count($data),
      "aaData" => $data
  ];

echo json_encode($results);
