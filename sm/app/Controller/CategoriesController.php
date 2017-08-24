<?php
App::uses('AppController', 'Controller');
/**
 * Categories Controller
 *
 * @property Category $Category
 */
class CategoriesController extends AppController {

public function add()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
 	$data=array(
 	'description'=>$request['description'],
 	'langue'=>$request['langue']);
 	$this->Category->create();
	$this->Category->save($data);
	$this->Category->recursive = 0;
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
 	$this->Category->create();
	$this->Category->save($data);
	$this->Category->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function delete()
{
	if ($this->request->is('delete'))
	{
		$request=$this->request->query;
 $this->Category->id=$request['id'];
 $this->Category->delete();
	$this->Category->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function view()
{
	if ($this->request->is('get'))
		{
		$sectors=$this->Category->find('all');
		$this->response->body(json_encode($sectors));
		return $this->response;
		}	
}


}
