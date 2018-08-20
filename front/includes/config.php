<?php

$urlGeral 	= 'http://suporte.passaromarron.com.br:86/glpi/';
$urlGLPI 	= $urlGeral . 'front/central.php';
$urlPlugin 	= $urlGeral . 'plugins/relatorios/';

global $DB;
session::checkLoginUser();

$profileIdAtivo = $_SESSION['glpiactiveprofile']['id'];
$val = $profileIdAtivo;

switch ($val) {
	case 3:
		$redir = '';
		break;
	case 4:
		$redir = '';
		break;
	case 10:
		$redir = '';
		break;
	case 11:
		$redir = '';
		break;
	default:
		$redir = '<meta http-equiv="refresh" content="0; url=graphs/graf_tech.php?con=1" />';
		break;
}
