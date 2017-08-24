<?php
App::uses('AppController', 'Controller');
/**
 * Customers Controller
 *
 * @property Customer $Customer
 */

class CustomersController extends AppController {


public function add()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
 	$data=array(
 	'description'=>$request['description'],
 	'langue'=>$request['langue']);
 	$this->Customer->create();
	$this->Customer->save($data);
	$this->Customer->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function edit()
{
	if ($this->request->is('put'))
	{
		$request=$this->request->query;
 	$data=array(
 		'id'=>$request['id'],
 	'description'=>$request['description'],
 	'langue'=>$request['langue']);
 	$this->Customer->create();
	$this->Customer->save($data);
	$this->Customer->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function delete()
{
	if ($this->request->is('delete'))
	{
		$request=$this->request->query;
 $this->Customer->id=$request['id'];
 $this->Customer->delete();
	$this->Customer->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function view()
{
	if ($this->request->is('get'))
		{
		$sectors=$this->Customer->find('all');
		$this->response->body(json_encode($sectors));
		return $this->response;
		}	
}


}
