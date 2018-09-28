<?php

include('../../../../../inc/includes.php');
include('../../includes/config.php');
include('../../api/functions.php');

global $DB;

$dataInicial    = $_GET['dataInicial'];
$dataFinal      = $_GET['dataFinal'];

    $categories = "SELECT 
                    glpi_itilcategories.id AS ID,
                    glpi_itilcategories.name AS Nome
                   FROM glpi_itilcategories
                   WHERE id IN(39, 32, 33, 38, 30, 29, 28, 31, 25, 24, 26)
                ";
    $result_categories = $DB->query($categories) or die('Erro ao buscar as categorias');

    while($list_categories = $DB->fetch_assoc($result_categories)):

        $chamados = "SELECT 
                        COUNT(id) AS total,
                            AVG(close_delay_stat) AS avgtime,
                            SUM(CASE WHEN (status IN (1,2,3,4)) THEN 1 ELSE 0 END) Aberto,
                            SUM(CASE WHEN (status IN (2,3)) THEN 1 ELSE 0 END) Processando,
                            SUM(CASE WHEN (status = 4) THEN 1 ELSE 0 END) Pendente,
                            SUM(CASE WHEN (status IN (5,6)) THEN 1 ELSE 0 END) Fechado
                        FROM glpi_tickets
                        WHERE date BETWEEN '$dataInicial' AND '$dataFinal'
                            AND is_deleted = 0
                            AND itilcategories_id = ". $list_categories['ID'] ." 
                    ";
        $resultChamados = $DB->query($chamados) or die('Erro ao buscar os chamados');
        $listChamados = $DB->fetch_assoc($resultChamados);

        if($listChamados['Aberto'] < 1): $aberto = ''; else: $aberto = $listChamados['Aberto']; endif;
        if($listChamados['Processando'] < 1): $processando = ''; else: $processando = $listChamados['Processando']; endif;
        if($listChamados['Pendente'] < 1): $pendente = ''; else: $pendente = $listChamados['Pendente']; endif;
        if($listChamados['Fechado'] < 1): $fechado = ''; else: $fechado = $listChamados['Fechado']; endif;

        $data[] = array(
            "Categoria" => $list_categories['Nome'],
            "Aberto" => $aberto,
            "Processando" => $processando,
            "Pendente" => $pendente,
            "Fechado" => $fechado,
            "Total" => $listChamados['total']
        );

    endwhile;

$result = [
    "sEcho" => 1,
    "iTotalRecords" => count($data),
    "iTotalDisplay" => count($data),
    "aaData" => $data
];

echo json_encode($result);