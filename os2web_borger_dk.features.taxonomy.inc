<?php
/**
 * @file
 * os2web_borger_dk.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2web_borger_dk_taxonomy_default_vocabularies() {
  return array(
    'os2web_borger_dk_form_menu' => array(
      'name' => 'Borger.dk FORM Emneord',
      'machine_name' => 'os2web_borger_dk_form_menu',
      'description' => 'FORM taxonomy used by Borger.dk menus and articles',
      'hierarchy' => '0',
      'module' => 'taxonomy',
      'weight' => '0',
    ),
  );
}
