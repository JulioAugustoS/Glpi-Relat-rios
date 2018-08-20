<?php

include('../../../../inc/includes.php');
include('../../../../config/config.php');
include('../includes/config.php');
include('../api/functions.php');

global $DB;

$sqlRequest = "SELECT DISTINCT glpi_users.id AS id, 
				glpi_users.firstname AS name, 
				glpi_users.realname AS sname,
				glpi_users.locations_id AS location, 
				glpi_users.entities_id AS entities
				FROM glpi_profiles_users
				LEFT JOIN glpi_tickets_users
					ON (glpi_tickets_users.users_id = glpi_profiles_users.users_id)
				LEFT JOIN glpi_users
					ON (glpi_users.id = glpi_profiles_users.users_id)
				WHERE glpi_users.is_deleted = 0
				AND glpi_users.is_active = 1
				AND glpi_tickets_users.type = 1
				AND glpi_profiles_users.entities_id = 6
				ORDER BY name ASC";
$lnRequest = $DB->query($sqlRequest) or die('Error');
while($resultRequest = $DB->fetch_assoc($lnRequest)):
	$vetor[] = array_map('utf8_encode', $resultRequest);
endwhile;	

echo json_encode($vetor);