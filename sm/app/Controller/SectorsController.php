<?php
App::uses('AppController', 'Controller');
/**
 * Sectors Controller
 *
 * @property Sector $Sector
 */
class SectorsController extends AppController {

/**
 * index method
 *
 * @return void
 */
// 	public function index($liste=null) {
//       if($liste){
//       $index=explode(',-,',$liste);
//       if(count($index)==2)
//       {
		
// 			$data=array('id'=>$index[0],'description'=>$index[1]);
// 		if ($this->request->is('post') || $this->request->is('put')) 
// 			$this->Sector->save($data);
// 	}else if(count($index)==1)
// 	{
// 	$data=array('description'=>$index[0]);
// 	$this->Sector->create();
// 	$this->Sector->save($data);
// 	}else if(count($index)>2)
// 	{
// $this->Sector->id = $index[0];
// $this->Sector->delete();
// 	}
// 	}

// 		$this->Sector->recursive = 0;
// 		$this->set('sectors', $this->paginate());

// }

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
 	$this->Sector->create();
	$this->Sector->save($data);
	$this->Sector->recursive = 0;
	$this->response->body(json_encode($this->paginate()));
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
	$this->response->body(json_encode($this->paginate()));
	return $this->response;
	}
}
public function view()
{
	if ($this->request->is('get'))
		{
		$sectors=$this->Sector->find('all');
		$this->response->body(json_encode($sectors));
		return $this->response;
		}	
}
	
}
