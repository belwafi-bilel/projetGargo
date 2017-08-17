<?php
App::uses('DelegationTache', 'Model');

/**
 * DelegationTache Test Case
 */
class DelegationTacheTest extends CakeTestCase {

/**
 * Fixtures
 *
 * @var array
 */
	public $fixtures = array(
		'app.delegation_tache',
		'app.tache'
	);

/**
 * setUp method
 *
 * @return void
 */
	public function setUp() {
		parent::setUp();
		$this->DelegationTache = ClassRegistry::init('DelegationTache');
	}

/**
 * tearDown method
 *
 * @return void
 */
	public function tearDown() {
		unset($this->DelegationTache);

		parent::tearDown();
	}

}
