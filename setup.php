<?php

class PluginRelatorios extends CommonDBTM {

	static protected $notable = true;

	/**
	 * @see  CommonGLPI::getMenuName()
	**/
	static function getMenuName() {
		return __('Relatorios');
	}

	static function getMenuContent() {
		global $CFG_GLPI;

		$menu = array();

		$menu['title'] 		= __('Relatorios');
		$menu['page']		= "/plugins/relatorios/front/index.php";
		return $menu;
	}

}

function plugin_init_relatorios() {

	global $PLUGIN_HOOKS, $LANG;

	$PLUGIN_HOOKS['menu_entry']['relatorios'] = true;
	$PLUGIN_HOOKS['csrf_compliant']['relatorios'] = true;
	$PLUGIN_HOOKS['menu_toadd']['relatorios'] = array('plugins' => 'PluginRelatorios');
	$PLUGIN_HOOKS['config_page']['relatorios'] = 'front/configuracoes/index.php';

}

function plugin_version_relatorios() {

	global $DB, $LANG;

	return array(
		'name'				=> __('Relatórios', 'relatórios'),
		'version'			=> '0.1.2',
		'author'			=> '<a href="mailto:julio@beautyhall.com.br">Julio Augusto</a>',
		'license'			=> 'GLPv2+',
		'homepage'			=> 'http://glpi-relatorios.sourceforge.net',
		'minGlpiVersion'	=> '0.85'	
	);

}

function plugin_relatorios_check_prerequisites() {

	if(GLPI_VERSION >= 0.85):
		return true;
	else:
		echo "GLPI version NOT compatible. Requires GLPI 0.85";
	endif;

}

function plugin_relatorios_check_config($verbose = false) {

	if($verbose):
		echo 'Installed / not configured';
	else: 
		return true;
	endif;		

}