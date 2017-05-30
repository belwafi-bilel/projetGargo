<?php
App::uses('AppController', 'Controller');
/**
 * PermissionAccesses Controller
 *
 * @property PermissionAccess $PermissionAccess
 */
class PermissionAccessesController extends AppController {

/**
 * index method
 *
 * @return void
 */
	public function index() {
		$this->PermissionAccess->recursive = 0;
		$this->set('permissionAccesses', $this->paginate());
	}

/**
 * view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function view($id = null) {
		if (!$this->PermissionAccess->exists($id)) {
			throw new NotFoundException(__('Invalid permission access'));
		}
		$options = array('conditions' => array('PermissionAccess.' . $this->PermissionAccess->primaryKey => $id));
		$this->set('permissionAccess', $this->PermissionAccess->find('first', $options));
	}

/**
 * add method
 *
 * @return void
 */
	public function add() {
		if ($this->request->is('post')) {
			$this->PermissionAccess->create();
			if ($this->PermissionAccess->save($this->request->data)) {
				$this->Session->setFlash(__('The permission access has been saved'));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The permission access could not be saved. Please, try again.'));
			}
		}
	}

/**
 * edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function edit($id = null) {
		if (!$this->PermissionAccess->exists($id)) {
			throw new NotFoundException(__('Invalid permission access'));
		}
		if ($this->request->is('post') || $this->request->is('put')) {
			if ($this->PermissionAccess->save($this->request->data)) {
				$this->Session->setFlash(__('The permission access has been saved'));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The permission access could not be saved. Please, try again.'));
			}
		} else {
			$options = array('conditions' => array('PermissionAccess.' . $this->PermissionAccess->primaryKey => $id));
			$this->request->data = $this->PermissionAccess->find('first', $options);
		}
	}

/**
 * delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function delete($id = null) {
		$this->PermissionAccess->id = $id;
		if (!$this->PermissionAccess->exists()) {
			throw new NotFoundException(__('Invalid permission access'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->PermissionAccess->delete()) {
			$this->Session->setFlash(__('Permission access deleted'));
			$this->redirect(array('action' => 'index'));
		}
		$this->Session->setFlash(__('Permission access was not deleted'));
		$this->redirect(array('action' => 'index'));
	}
}
