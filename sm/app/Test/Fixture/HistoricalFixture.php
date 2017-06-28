<?php
/**
 * HistoricalFixture
 *
 */
class HistoricalFixture extends CakeTestFixture {

/**
 * Fields
 *
 * @var array
 */
	public $fields = array(
		'period' => array('type' => 'string', 'null' => false, 'default' => null, 'length' => 200, 'collate' => 'utf8_general_ci', 'charset' => 'utf8'),
		'rabais' => array('type' => 'string', 'null' => false, 'default' => null, 'length' => 200, 'collate' => 'utf8_general_ci', 'charset' => 'utf8'),
		'offer_id' => array('type' => 'integer', 'null' => false, 'default' => null),
		'profile_id' => array('type' => 'integer', 'null' => false, 'default' => null),
		'id' => array('type' => 'integer', 'null' => false, 'default' => null, 'key' => 'primary'),
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
			'period' => 'Lorem ipsum dolor sit amet',
			'rabais' => 'Lorem ipsum dolor sit amet',
			'offer_id' => 1,
			'profile_id' => 1,
			'id' => 1
		),
	);

}
