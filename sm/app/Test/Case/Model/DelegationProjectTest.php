<?php
App::uses('DelegationProject', 'Model');

/**
 * DelegationProject Test Case
 */
class DelegationProjectTest extends CakeTestCase {

/**
 * Fixtures
 *
 * @var array
 */
	public $fixtures = array(
		'app.delegation_project',
		'app.project'
	);

/**
 * setUp method
 *
 * @return void
 */
	public function setUp() {
		parent::setUp();
		$this->DelegationProject = ClassRegistry::init('DelegationProject');
	}

/**
 * tearDown method
 *
 * @return void
 */
	public function tearDown() {
		unset($this->DelegationProject);

		parent::tearDown();
	}

}
