<?php

include('../../../../../inc/includes.php');
include('../../../../../config/config.php');
include('../../includes/config.php');
include('../../api/functions.php');

global $DB;

$response = array();

$empresa = 6;
$categoria = $_GET['categoria'];
$status = $_GET['status'];

if($status == 'tudo'):
  $queryStatus = 'status IN(2, 3, 4)';
else:
  $queryStatus = 'status = '.$status.'';
endif;

if($categoria == 9):
  $queryCategoria = 'itilcategories_id IN (9, 42)';
else:
  $queryCategoria = 'itilcategories_id = '.$categoria.'';
endif;

// Seleciona os chamados com os dados recebidos do formulario
$sqlChamados = "SELECT
                  id                  AS ID,
                  type                AS Tipo,
                  name                AS Titulo,
                  users_id_recipient  AS Requerente,
                  date                AS Aberto
                FROM glpi_tickets
                WHERE is_deleted = 0
                  AND entities_id = '$empresa'
                  AND ".$queryStatus."
                  AND ".$queryCategoria."
                  AND id != '13637'
              ";
$lnChamados = $DB->query($sqlChamados) or die('Erro ao buscar os chamados');

// Seleciona as categoria
$sqlCategories2 = "SELECT name
                    FROM glpi_itilcategories
                    WHERE entities_id = '$empresa'
                    AND id = '$categoria'
                ";
$lnCategories2 = $DB->query($sqlCategories2) or die('Erro ao buscar as categorias');
$resultCategories2 = $DB->fetch_assoc($lnCategories2);

while($resultChamados = $DB->fetch_assoc($lnChamados)):
  // tipo
  if($resultChamados['Tipo'] == 1):
    $tipo = 'Incidente';
  else:
    $tipo = 'Requisição';
  endif;

  // Busca a categoria pelo ID
  $sqlCategoria = "SELECT name FROM glpi_itilcategories WHERE id = '$categoria'";
  $lnCategoria = $DB->query($sqlCategoria) or die('Erro ao buscar a categoria');
  $resultCategoria = $DB->fetch_assoc($lnCategoria);

  // requerentes
  $sqlRequerentes = "SELECT id, firstname, realname, locations_id
                      FROM glpi_users
                      WHERE id = '".$resultChamados['Requerente']."'
                  ";
  $lnRequerente = $DB->query($sqlRequerentes) or die('Erro ao buscar os requerentes');
  $resultRequerente = $DB->fetch_assoc($lnRequerente);

  // Local de abertura do chamado
  $sqlLocations = "SELECT id, name
                    FROM glpi_locations
                    WHERE id = '".$resultRequerente['locations_id']."'
                ";
  $lnLocations = $DB->query($sqlLocations) or die('Erro ao buscar localizações');
  $resultLocations = $DB->fetch_assoc($lnLocations);

  // Forma o nome do requerente
  $requerente = $resultRequerente['firstname'].' '.$resultRequerente['realname'];

  // Forma o tempo em dias que o chamado esta pendente ou fechado
  $Tempo = conv_data($resultChamados['Aberto']);
  $Dias = ' dias';
  $Tempo = calculaDatas($Tempo);

  // Monta o array com os dados para retorno ao javascript
  $data[] = array(
    "ID" => $resultChamados['ID'],
    "Categoria" => $resultCategoria['name'],
    "Tipo" => $tipo,
    "Titulo" => $resultChamados['Titulo'],
    "Requerente" => $requerente,
    "Local" => $resultLocations['name'],
    "Aberto" => conv_data_hora($resultChamados['Aberto']),
    "Tempo Pendente" => $Tempo . $Dias
  );

endwhile;

  $results = [
      "sEcho" => 1,
      "iTotalRecords" => count($data),
      "iTotalDisplay" => count($data),
      "aaData" => $data
  ];

echo json_encode($results);
