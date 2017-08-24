<?php
App::uses('AppController', 'Controller');

class LanguagesController extends AppController {

	public function add()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
 	$data=array(
 	'name'=>$request['name'],
 	'abbreviation'=>$request['abbreviation']);
 	$this->Language->create();
	$this->Language->save($data);
	$this->Language->recursive = 0;
	$this->response->body(json_encode(array('languages'=>$this->paginate())));
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
  	'name'=>$request['name'],
 	'abbreviation'=>$request['abbreviation']);
 	$this->Language->create();
	$this->Language->save($data);
	$this->Language->recursive = 0;
	$this->response->body(json_encode(array('languages'=>$this->paginate())));
	return $this->response;
	}
}
public function delete()
{
	if ($this->request->is('delete'))
	{
		$request=$this->request->query;
 $this->Language->id=$request['id'];
 $this->Language->delete();
	$this->Language->recursive = 0;
	$this->response->body(json_encode(array('languages'=>$this->paginate())));
	return $this->response;
	}
}
public function view()
{
	if ($this->request->is('get'))
		{
		$sectors=$this->Language->find('all');
		$this->response->body(json_encode(array('languages'=>$sectors)));
		return $this->response;
		}	
}

}
