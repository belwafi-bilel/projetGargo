<?php
App::uses('AppModel', 'Model');
/**
 * DelegationTache Model
 *
 * @property Tache $Tache
 */
class DelegationTache extends AppModel {

/**
 * Use table
 *
 * @var mixed False or table name
 */
	public $useTable = 'delegation_tache';


	// The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * belongsTo associations
 *
 * @var array
 */
	public $belongsTo = array(
		'Tache' => array(
			'className' => 'Tache',
			'foreignKey' => 'tache_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
