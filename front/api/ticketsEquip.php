<?php

include('../../../../inc/includes.php');
include('../../../../config/config.php');
include('../includes/config.php');
include('../api/functions.php');

global $DB;
session::checkLoginUser();

$dataInicio = '2017-01-01';
$dataFinal  = '2017-12-31';

$sql = "
		SELECT 
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
		WHERE YEAR(date) = '2018'	

			";

$list = $DB->query($sql) or die('Error');
while($result = $DB->fetch_assoc($list)):
	echo $result['QtdJan'] . '<br>';
	echo $result['QtdFev'];
endwhile;	
	



	