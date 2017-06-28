<?php


App::uses('Controller', 'Controller');
App::uses('File', 'Utility');
App::uses('Folder', 'Utility');
/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @package		app.Controller
 * @link		http://book.cakephp.org/2.0/en/controllers.html#the-app-controller
 */
session_start();
class AppController extends Controller {


	// added the debug toolkit
	// sessions support
	// authorization for login and logut redirect
	public $components = array(
		'RequestHandler',
		'Session',
		//'DebugKit.Toolbar',
   //      'Auth' => array(
   //          'loginRedirect' => array('controller' => 'users', 'action' => 'index'),
   //          'logoutRedirect' => array('controller' => 'users', 'action' => 'login'),
			// 'authError' => 'You must be logged in to view this page.',
			// 'loginError' => 'Invalid Username or Password entered, please try again.'
 
   //      )
        );
	
	// only allow the login controllers only
	public function beforeFilter() {
     //  $this->Auth->allow('login');
		$this->Session->write('id','14');
        $user_id = $this->Session->read("id");
        $this->set('user_id', $user_id);
         if ($this->Session->check('Config.language')) {
           //  Configure::write('Config.language', $this->Session->read('Config.language'));
            configure::write('langue', $this->Session->read('Config.language'));
        }
$langue = $this->Session->read('Config.language');
        $this->set('langue', $langue);
        
    }
	
	public function isAuthorized($user) {
		// Here is where we should verify the role and give access based on role
		
		return true;
	}
	
}
