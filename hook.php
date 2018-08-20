<?php

function plugin_relatorios_install() {

	global $DB, $LANG;

	if(! TableExists("glpi_plugin_relatorios_menu")) {
		$query = "CREATE TABLE `glpi_plugin_relatorios_menu` (
			`id` int(11) NOT NULL AUTO_INCREMENT,
			`categoria` varchar(255) NOT NULL,
			`descricao` varchar(255) NOT NULL,
			`link` varchar(255) NOT NULL,
			`data_cadastro` datetime NOT NULL,
			`data_modificacao` datetime DEFAULT NULL,
			`status` int(11) NOT NULL,
			PRIMARY KEY (`id`)
			) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
		";

		$DB->query($query) or die("error ao criar glpi_plugins_relatorios_menu " . $DB->error());
	}

	return true;

}

function plugin_relatorios_uninstall() {

	global $DB;

	$drop_menu = "DROP TABLE glpi_plugin_relatorios_menu";
	$DB->query($drop_menu);

	return true;

}