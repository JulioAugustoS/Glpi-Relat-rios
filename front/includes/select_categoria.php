<?php

include('../../../../inc/includes.php');
include('../../../../inc/config.php');

global $DB;

	$sql_category = "SELECT glpi_itilcategories.id AS id, glpi_itilcategories.name AS name FROM glpi.glpi_itilcategories WHERE entities_id != '' ORDER BY id DESC";
	$result_category = $DB->query($sql_category);

	while($category = $DB->fetch_assoc($result_category)):
		echo '<option value="'.$category['id'].'">'.$category['name'].'</option>';
	endwhile;		

?>	