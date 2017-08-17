<?php
/**
 * DelegationProject Fixture
 */
class DelegationProjectFixture extends CakeTestFixture {

/**
 * Table name
 *
 * @var string
 */
	public $table = 'delegation_project';

/**
 * Fields
 *
 * @var array
 */
	public $fields = array(
		'id' => array('type' => 'integer', 'null' => false, 'default' => null, 'unsigned' => false, 'key' => 'primary'),
		'project_id' => array('type' => 'integer', 'null' => false, 'default' => null, 'unsigned' => false),
		'user_id' => array('type' => 'integer', 'null' => false, 'default' => null, 'unsigned' => false),
		'edit' => array('type' => 'string', 'null' => false, 'default' => null, 'length' => 22, 'collate' => 'utf8_general_ci', 'charset' => 'utf8'),
		'acces' => array('type' => 'string', 'null' => false, 'default' => null, 'length' => 222, 'collate' => 'utf8_general_ci', 'charset' => 'utf8'),
		'indexes' => array(
			'PRIMARY' => array('column' => 'id', 'unique' => 1)
		),
		'tableParameters' => array('charset' => 'utf8', 'collate' => 'utf8_general_ci', 'engine' => 'InnoDB')
	);

/**
 * Records
 *
 * @var array
 */
	public $records = array(
		array(
			'id' => 1,
			'project_id' => 1,
			'user_id' => 1,
			'edit' => 'Lorem ipsum dolor si',
			'acces' => 'Lorem ipsum dolor sit amet'
		),
	);

}
