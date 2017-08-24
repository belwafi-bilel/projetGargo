<?php
App::uses('AppController', 'Controller');
/**
 * Sectors Controller
 *
 * @property Sector $Sector
 */
class SectorsController extends AppController {


public function add()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
 	$data=array(
 	'description'=>$request['description'],
 	'langue'=>$request['langue']);
 	$this->Sector->create();
	$this->Sector->save($data);
	$this->Sector->recursive = 0;
	$this->response->body(json_encode(array('sectors'=>$this->paginate())));
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
 	$this->Sector->create();
	$this->Sector->save($data);
	$this->Sector->recursive = 0;
	$this->response->body(json_encode(array('sectors'=>$this->paginate())));
	return $this->response;
	}
}
public function delete()
{
	if ($this->request->is('delete'))
	{
		$request=$this->request->query;
 $this->Sector->id=$request['id'];
 $this->Sector->delete();
	$this->Sector->recursive = 0;
	$this->response->body(json_encode(array('sectors'=>$this->paginate())));
	return $this->response;
	}
}
public function view()
{
	if ($this->request->is('get'))
		{
		$this->Sector->recursive = 0;
	$this->response->body(json_encode(array('sectors'=>$this->paginate())));
	return $this->response;
		}	
}
	
}
