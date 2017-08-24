<?php
App::uses('AppController', 'Controller');
/**
 * Offers Controller
 *
 * @property Offer $Offer
 */
class OffersController extends AppController {



public function add()
{
		$this->loadModel('Regulation');
        $this->loadModel('Item');
	if ($this->request->is('post'))
	{
		$request=$this->request->query;
 	$data=array(
				'name'=>$request['name'],
				 'date'=>date("Y-m-d"),
				 'price'=>$request['total_price'],
				 'description'=>$request['description'],
				 'period'=>$request['period']
				 );
 		$this->Regulation->create();
        $this->Regulation->save($data);
        $Regulation_id=$this->Regulation->getLastInsertID();
         $listeItem=explode(',',$request['items']);
        for ($i=0; $i <count($listeItem); $i++)
        {
        	$offers=array(
        		'nombre'=>'1',
        		'price_ligne'=>'0',
        		'regulation_id'=>$Regulation_id,
        		'items_id'=>$listeItem[$i]);
        	$this->Offer->create();
			$this->Offer->save($offers);
        }
	$this->Regulation->recursive = 0;
	$this->response->body(json_encode(array('regulations'=>$this->paginate())));
	return $this->response;
	}
}
public function edit()
{		$this->loadModel('Regulation');
        $this->loadModel('Item');
	if ($this->request->is('put'))
	{
		$request=$this->request->query;
		$Regulation_id=$request['id'];
 		$data=array(
 				 'id'=>$Regulation_id,
				 'name'=>$request['name'],
				 'date'=>date("Y-m-d"),
				 'price'=>$request['total_price'],
				 'description'=>$request['description'],
				 'period'=>$request['period']
				 );
 		$this->Regulation->create();
        $this->Regulation->save($data);

         $this->Offer->deleteAll(array('Offer.regulation_id'=>$Regulation_id));
         $listeItem=explode(',',$request['items']);
        for ($i=0; $i <count($listeItem); $i++) { 
        	$offers=array(
        		'nombre'=>'1',
        		'price_ligne'=>'0',
        		'regulation_id'=>$Regulation_id,
        		'items_id'=>$listeItem[$i]);
        	$this->Offer->create();
			$this->Offer->save($offers);
        }
	$this->Regulation->recursive = 0;
	$this->response->body(json_encode(array('regulations'=>$this->paginate())));
	return $this->response;
	}
}
public function delete()
{$this->loadModel('Regulation');
        $this->loadModel('Item');
	if ($this->request->is('delete'))
	{
		$request=$this->request->query;
		$this->Offer->deleteAll(array('Offer.regulation_id'=>$request['id']));
 		$this->Regulation->id=$request['id'];
	    $this->Regulation->delete();
	$this->Regulation->recursive = 0;
	$this->response->body(json_encode(array('regulations'=>$this->paginate())));
	return $this->response;
	}
}
public function view()
{$this->loadModel('Regulation');
        $this->loadModel('Item');
	if ($this->request->is('get'))
		{
		$this->Regulation->recursive = 0;
	$this->response->body(json_encode(array('regulations'=>$this->paginate())));
	return $this->response;
		}	
}
}
