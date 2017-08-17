<?php
App::uses('AppModel', 'Model');
/**
 * DelegationProject Model
 *
 * @property Project $Project
 */
class DelegationProject extends AppModel {

/**
 * Use table
 *
 * @var mixed False or table name
 */
	public $useTable = 'delegation_project';


	// The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * belongsTo associations
 *
 * @var array
 */
	public $belongsTo = array(
		'Project' => array(
			'className' => 'Project',
			'foreignKey' => 'project_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
