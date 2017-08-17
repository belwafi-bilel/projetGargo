<?php
App::uses('AppController', 'Controller');
/**
 * Plans Controller
 *
 * @property Plan $Plan
 */

class PlansController extends AppController {
 




// public function textarea($liste=null)
// {
// 	$this->set(compact('liste'));
// }

// public function exemple($liste=null)
// {
// 	$index=explode('-,',$liste);

// 	if(count($index)==3){
// 	$TableTails=$this->Session->read("TableTail");
// 	//$i=count($TableTails[$index[0]][$index[1]]['data']);
//      $this->Session->write('TableTail.'.$index[0].'.'.$index[1].'.data',htmlspecialchars($index[2]));
//        }
// $TableTails=$this->Session->read("TableTail");
// $this->set(compact('index','TableTails'));
// }



public function newPlan($image=null)
{
	$this->loadModel('TypePlan');
 	if ($this->request->is('post')) 
 
          // if($photo["size"]>0){
          //    $fileData = fread(fopen($image,"r"),$photo["size"]);
          //     }
 	$id=$this->Session->read('id');
 $id=14;
 	$date=array(
 		'title'=>'',
 		'date_create'=>date("Y-m-d h:s:i"),
 		'logo'=>null,
 		'adress'=>'',
 		'user_id'=>$id);
 
$this->Plan->create();
$this->Plan->save($date);
$idLaste= $this->Plan->getLastInsertID();
$this->addTypePlanning($idLaste.',1');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Objectives');
$this->addTypePlanning($idLaste.',2');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Activities');
$this->addTypePlanning($idLaste.',3');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Indicator');
$this->addTypePlanning($idLaste.',4');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Resources');
$this->addTypePlanning($idLaste.',5');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Budget');
$this->addTypePlanning($idLaste.',6');
$id=$this->TypePlan->getLastInsertID();
$this->setTypePlanning($id.','.'Deadline');
 $this->addHistoricalPlanning($idLaste);
$id_Historical= $this->HistoricalPlan->getLastInsertID();
$this->addAxes($id_Historical);
//$this->redirect('../../#/SmartLibrary/listplan');
 }


// public function plan($liste=null)
// {
// 	$total=$this->Session->read("total");
// 	$detail=0;
// 	$tab=explode(',', $liste);
// 	SessionComponent::delete('TableTail');
// 	SessionComponent::delete('ettiquette');
// 	$id_profile=$this->Session->read('id');
//     $plans=$this->Plan->find('first',array('conditions'=>array('Plan.id'=>$tab[0])));  
//             if($tab[1]==1)
//             {
// 	        $detail=intval($this->Session->read("detail"));
// 	       if($detail<$total)
// 	       	{
// 	       		$detail+=1;
// 	       	}
//            }else
//             {
//             $detail=intval($this->Session->read("detail"));
//             if($detail>0)
//        	     $detail-=1;
//         	}
// $result=$this->detailplans($tab[0],$detail);
// $this->Session->write("TableTail",$result[0]);
// $this->Session->write("ettiquette",$result[1]);
// $this->Session->write('id_plan',$tab[0]);
// $this->tableau();
// $listes=array("user1","user2","user3","user4");
// $this->set(compact('types','listes','plans','total'));
// }

public function planingJson($string=null)
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
$data=$this->request->query;

switch ($data['status']) {
	case 'get':
	$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
		break;
	case 'new':
		switch ($data['posEvent'])
		 {
			case 'axis':
				$this->addAxes($data['historical_planing_id']);
				$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'column':
			     $row=$this->getNUmbreRowPlanningTable($data['planing_id'])+1;
			      $this->addTypePlanning($data['planing_id'].','.$row);
				$tab=$data['historical_planing_id'].','.$row;
					$this->addRow($tab);
					$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'plan':
			$this->newPlan($data['image']);
			$this->loadModel('Plan');
			$this->loadModel('HistoricalPlan');
			$id_plan=$this->Plan->getLastInsertID();
			$id_historical_plan=$this->HistoricalPlan->getLastInsertID();
			$reponses=$this->getPlanning($id_plan.','.$id_historical_plan);
			

				break;
				
		}
		break;
	case 'edit':
		switch ($data['posEvent']) 
		{
			case 'axis':
			$this->setAxes($data['id'].",".$data['data']);
			$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'cell':
			$this->saveCelle($data['id'].",".$data['data']);
			$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'type':
			$this->setTypePlanning($data['id'].",".$data['data']);
			$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
			default:
				break;
		}
		break;
	
	case 'delete':
	switch ($data['posEvent'])
		 {
			case 'axis':
				$this->deleteLine($data['id']);
				$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'column':
			$this->deleteRow($data['historical_planing_id'].",".$data['id']);
			$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
			    break;
			    case "plan":
					$this->deletePlan($data['Planing_id']);
					$reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
			    break;
			default:
				;
				break;
		}
		break;
	case "move":
		switch ($data['posEvent']) {
			case 'axis':
			$tab=$data['id'].','.$data['data'].','.$data['historical_planing_id'];
		$this->moveAxis($tab);
	     $reponses=$this->getPlanning($data['planing_id'].','.$data['historical_planing_id']);
				break;
			case 'column':

			default:
				# code...
				break;
		}
	    
		break;
}
$this->response->body($reponses);
	return $this->response;
}
die();
}
public function moveAxis()
{
		if ($this->request->is('post')||($this->request->is('put')))
	{
    $request=$this->request->query;
	$this->loadModel('Axis');
	$axismove=$this->Axis->findById($request['id']);
	if($request['destination']<$axismove['Axis']['position'])
	{
    $AllAxisEditPosition=$this->Axis->find('all',
    	['conditions'=>['Axis.position >'=>$request['destination'],'Axis.position <'=>$axismove['Axis']['position'],'Axis.historical_plan_id'=>$request['historical_planing_id']]
    	]);
    foreach ($AllAxisEditPosition as $Axis) 
	{
		$data=array('id'=>$Axis['Axis']['id'],
			'position'=>intval($Axis['Axis']['position'])+1);
		$this->Axis->save($data);
	}
	$data=array('id'=>$axismove['Axis']['id'],
		'position'=>intval($request['destination'])+1);
	$this->Axis->save($data);
	}else
	{
		 $AllAxisEditPosition=$this->Axis->find('all',
    	['conditions'=>['Axis.position <='=>$request['destination'],'Axis.position >'=>$axismove['Axis']['position'],'Axis.historical_plan_id'=>$request['historical_planing_id']]
    	]);
		
    foreach ($AllAxisEditPosition as $Axis) 
	{
		$data=array('id'=>$Axis['Axis']['id'],
			'position'=>intval($Axis['Axis']['position'])-1);
		$this->Axis->save($data);
	}
	$data=array('id'=>$axismove['Axis']['id'],
		'position'=>intval($request['destination']));
	$this->Axis->save($data);
	}
}
 $reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}
/*************************function MoveRow*****************/
/*
function move row of the params id row and destination and historical planing id
*/
public function moveRow()
{
		if ($this->request->is('post')||($this->request->is('put')))
	{
    $request=$this->request->query;
	$this->loadModel('Axis');
	$AxisAll=$this->Axis->findAllByHistoricalPlanId($request['historical_planing_id'],'id');
	foreach ($AxisAll as $axis) {
	$tab[]=$axis['Axis']['id'];
	}
	$this->loadModel('DetailPlan');
	$this->loadModel('TypePlan');
	$typePlaningMove=$this->getSourceById('TypePlan,'.$request['id']);
	
	$detailPlansMove=$this->DetailPlan->findByRowAndAxesId($typePlaningMove['TypePlan']['position'],$tab);
	
if($request['destination']<$typePlaningMove['TypePlan']['position'])
{
		$detailplans=$this->DetailPlan->find('all',
			['conditions'=>['DetailPlan.Axes_id'=>$tab,
			'DetailPlan.row >='=>$request['destination'],
			'DetailPlan.row <' =>$typePlaningMove['TypePlan']['position']]
			]
			);
		$typePlannings=$this->TypePlan->find('all',
			['conditions'=>['TypePlan.position >='=>$request['destination'],
			'TypePlan.position <'=>$typePlaningMove['TypePlan']['position']]]);
		foreach ($typePlannings as $type) {
			$data=array(
				'id'=>$type['TypePlan']['id'],
				'position'=>intval($type['TypePlan']['position'])+1);
			$this->TypePlan->save($data);
		}
		foreach ($detailplans as $detailplan) {
			$data1=array('id'=>$detailplan['DetailPlan']['id'],
				'row'=>intval($detailplan['DetailPlan']['row'])+1);
			$this->DetailPlan->save($data1);
		}
	}
	else if($request['destination']>$typePlaningMove['TypePlan']['position'])
	{
		$detailplans=$this->DetailPlan->find('all',
			['conditions'=>['DetailPlan.Axes_id'=>$tab,
			'DetailPlan.row >'=>$typePlaningMove['TypePlan']['position'],
			'DetailPlan.row <=' =>$request['destination']]
			]
			);
		foreach ($detailplans as $detailplan) {
			$data=array('id'=>$detailplan['DetailPlan']['id'],
				'row'=>intval($detailplan['DetailPlan']['row'])-1);
			$this->DetailPlan->save($data);
		}
		$typePlannings=$this->TypePlan->find('all',
			['conditions'=>['TypePlan.position <='=>$request['destination'],
			'TypePlan.position >'=>$typePlaningMove['TypePlan']['position']]]);
		foreach ($typePlannings as $type) {
			$data=array(
				'id'=>$type['TypePlan']['id'],
				'position'=>intval($type['TypePlan']['position'])-1);
			$this->TypePlan->save($data);
		}
		}
	}
	$data=array('id'=>$typePlaningMove['TypePlan']['id'],
		'position'=>$request['destination']);
	$this->TypePlan->save($data);
	$data=array('id'=>$detailPlansMove['DetailPlan']['id'],
		'row'=>$request['destination']);
	$this->DetailPlan->save($data);

$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
 
}
// public function index()
// { 
// 	    $plans="";
// 	    $types="";
//         $this->layout=null;
// 		$this->loadModel('TypeComponent');
// 		$types=$this->TypeComponent->find('all');
// 		$this->loadModel('PersonalOffer');
// 	    $this->loadModel('PermissionAccess');
//         $id=$this->Session->read('id');
// 	    $this->loadModel('Historical');
// 	    $this->loadModel('TypeComponent');
// 	//$this->loadModel('Plan');
// 	$plans=$this->Plan->find('all',array('conditions'=>array('Plan.user_id'=>$id)));
// 	if($plans)
// 	{
// 			$histrical=$this->Historical->find('first',array('conditions'=>['Historical.user_id'=>$id]));
// 			if($histrical)
// 			{
// 			 $date= explode('=>',$histrical['Historical']['period']);
// 			 if((date("Y-m-d")>$date[0])&&(date("Y-m-d")<$date[1]))
// 				{
// 				$personalOffers=$this->PersonalOffer->find('all',array('conditions'=>
// 				 array('PersonalOffer.historical_id'=>$histrical['Historical']['id'])));
// 				$tab=0;
// 				foreach ($personalOffers as $value) 
// 					$tab[]=$value['PersonalOffer']['id'];
// 				$PermissionAccesses=$this->PermissionAccess->find('all',
// 					array('conditions'=>array('PermissionAccess.personal_offers_id'=>$tab)));
// 				//SessionComponent::delete('TableTail');
				
// 				$types=$this->TypeComponent->find('all');
// 		       }else
// 				{
// 				 $access=array('access'=>false);
// 			     $this->set((compact('access','')));
// 				}
// 				$this->Session->write('plan_id',$plans[0]['Plan']['id']);
// 			}
// 	}
// $this->set(compact('types','listes','plans'));  
// }
public function detailPlans($id=null,$x=null)
{
	$total=0;
	$TableTail=array();
	$tab=array();
$this->loadModel('DetailPlan');
$plans=$this->Plan->find('first',array('conditions'=>array('Plan.id'=>$id)));
if($x==null)
{
$detailplans=$this->DetailPlan->find('first',
	['conditions'=>['DetailPlan.id_plan'=>$id],'order'=>['DetailPlan.id'=>'DESC']]);
}else{
	$total=$this->DetailPlan->find('count',['conditions'=>['DetailPlan.id_plan'=>$id]]);
$this->Session->write("total",$total);

$detailplans=$this->DetailPlan->find('all',['conditions'=>['DetailPlan.id_plan'=>$id]]);
	for ($i=0; $i <($total-$x+1) ; $i++) { 
		$tab=$detailplans[$i];
		$this->Session->write("detail",$i);
	}

}

$detailplans=$tab;
if($detailplans)
{
$lignecolone=explode('!!-!!',explode('%55%',$detailplans['DetailPlan']['content'])[0]);
$ligneEtiquettes=explode('!##!',explode('%55%',$detailplans['DetailPlan']['content'])[1]);
    for ($KK=0; $KK <count($ligneEtiquettes)-1; $KK++) 
		 { 
		 	$x=explode('%3%',$ligneEtiquettes[$KK]);
		 	 $tab[]=array('id'=>$x[1],'description'=>$x[2]);
		 }
	for ($k=0; $k <count($lignecolone)-1 ; $k++) 
	{ 
		$indexI=explode('<>',$lignecolone[$k])[0];
		$colone=explode('=.=',explode('<>',$lignecolone[$k])[1]);
	    $content=explode('?!?',$colone[1]);
		$indexJ=$colone[0];
		$detail[$indexJ]=array(
				'type'=> $content[0],
				'color'=>$content[1],
				'display'=>$content[2],
				'data'=>$content[3],
				'duplicate'=>$content[4]
				);
			$TableTail[$indexI]=$detail;
	}
}

return array($TableTail,$tab,$total);
}
public function comment()
{
	$id=$this->Session->read('id');
$this->loadModel('Plan');
$comments="";
$plans=$this->Plan->find('all',['conditions'=>['Plan.profile_id'=>$id]]);
if($plans)
{
foreach ($plans as $plan) {
	$id_plans[]=$plan['Plan']['id'];
}
	$this->loadModel('Comment');
	$comments=$this->Comment->find('all',array('conditions'=>['plan_id'=>$id_plans]));
}
$this->set(compact('comments'));
}
public function tableau($coordonner=null)
{
    $TableTails=$this->Session->read("TableTail");
	if($coordonner!=null)
	{
	$coordonners=explode(',',$coordonner);
	$detail="";
	$tableaux="";
	if(count($coordonners)>1)
	if($coordonners[1])
	for ($i=0; $i <$coordonners[0]+1 ; $i++) 
	{ 
		for ($j=0; $j <$coordonners[1]+1 ; $j++)
		 { 	
			$detail[$j]=array(
				'type'=>$this->gettypes($j),
				'color'=>$this->getcolor($i,$j),
				'display'=>$this->getdisplay($j),
				'data'=>$this->getData($i,$j),
				'duplicate'=>$this->getdeblock($i,$j)
				);
		}
		$tableaux[$i]=$detail;
	}
if($tableaux)
$this->Session->write("TableTail",$tableaux);
}else if(count($TableTails))
{
$coordonners=array(count($TableTails),count($TableTails[0]));
}
if(count($TableTails)==0)
{$coordonners=array(0,0);}

$TableTails=$this->Session->read("TableTail");
$ettiquette=$this->Session->read('ettiquette');
$this->set(compact('TableTails','coordonners','ettiquette'));
}

public function linkWeb($id=null)
{
    $this->loadModel('Linkweb');
$linkweb=$this->Linkweb->find('first',array('conditions'=>array('Linkweb.plan_id'=>$id)));
if(count($linkweb))
{
	return "127.0.0.1/sou_project/sm/plans/link/".$linkweb['Linkweb']['link'];
	
}else
{
	$reference= $this->random('32');
    $link="127.0.0.1/sou_project/sm/plans/link/".$reference;
    
    $date=array('lien'=>$reference,'plan_id'=>$id);
    $this->Linkweb->create();
    $this->Linkweb->save($date);
	return $link;
}
}
public function link($reference=null)
{
	if ($this->request->is('post')) 
{$TableTail=array();
	$this->loadModel('Comment');
	$this->Comment->create();
	$data=array('plan_id'=>$this->request->data['id'],
				'ref_cellule'=>$this->request->data['ref'],
				'email_send'=>$this->request->data['email'],
				'name'=>$this->request->data['name'],
				'date_send'=>date('Y-m-d h:s:i'),
				'message'=>$this->request->data['message'],
				'organization'=>$this->request->data['organization'],
				'favorite'=>'0',
				'email_recive'=>"");
	$this->Comment->save($data);
$plan_id=$this->request->data['id'];
}
$this->loadModel('DetailPlan');
	if($reference)
	{
	$this->loadModel('Linkweb');
$linkweb=$this->Linkweb->find('first',array('conditions'=>array('Linkweb.link'=>$reference)));
	$plan_id=$linkweb['Linkweb']['plan_id'];
	}

	$plans=$this->Plan->find('first',array('conditions'=>array('Plan.id'=>$plan_id)));
$detailplans=$this->DetailPlan->find('first',['conditions'=>['DetailPlan.id_plan'=>$plan_id],'order'=>['DetailPlan.id'=>'DESC']]);
if($detailplans)
{
$lignecolone=explode('!!-!!',$detailplans['DetailPlan']['content']);
for ($k=0; $k <count($lignecolone)-1 ; $k++) { 
	$indexI=explode('<>',$lignecolone[$k])[0];
	$colone=explode('=.=',explode('<>',$lignecolone[$k])[1]);
    $content=explode('?!?',$colone[1]);
	$indexJ=$colone[0];
	$detail[$indexJ]=array(
			'type'=> $content[0],
			'color'=>$content[1],
			'display'=>$content[2],
			'data'=>$content[3],
			'duplicate'=>$content[4]
			);
$TableTail[$indexI]=$detail;
}
}
$detailplans=$TableTail;
$coordonners=array(count($TableTail),count($TableTail[0]));
$this->set(compact('linkweb','plans','detailplans','coordonners'));
}
public function table()
{
	$this->layout=null;
		//SessionComponent::delete('TableTail');
		$this->loadModel('TypeComponent');
		$types=$this->TypeComponent->find('all');
		$listes=array("user1","user2","user3","user4");
		$this->set(compact('types','listes'));
    $id=$this->Session->read('id');
 
	$this->loadModel('Historical');
	//$this->loadModel('Plan');
	$plans=$this->Plan->find('first',array('conditions'=>array('Plan.profile_id'=>$id)));
	
	$this->loadModel('PersonalOffer');
	$this->loadModel('PermissionAccess');
	$histrical=$this->Historical->find('first',array('conditions'=>['Historical.user_id'=>$id]));
	// print_r($histrical);
	// echo date("Y-m-d");
	if($histrical)
	{
	 $date= explode('=>',$histrical['Historical']['period']);
	 if((date("Y-m-d")>$date[0])&&(date("Y-m-d")<$date[1]))
		{
		$personalOffers=$this->PersonalOffer->find('all',array('conditions'=>
		 array('PersonalOffer.historical_id'=>$histrical['Historical']['id'])));
		$tab=0;
		foreach ($personalOffers as $value) 
			$tab[]=$value['PersonalOffer']['id'];

		$PermissionAccesses=$this->PermissionAccess->find('all',
			array('conditions'=>array('PermissionAccess.personal_offers_id'=>$tab)));
		//SessionComponent::delete('TableTail');
		$this->loadModel('TypeComponent');
		$types=$this->TypeComponent->find('all');
		$listes=array("user1","user2","user3","user4");
		$this->set(compact('types','listes','plans'));
       }else
		{
		 $access=array('access'=>false);
	     $this->set((compact('access')));
		}
	}
}











public function random($car) {
$string = "";
$chaine = "abcdefghijklmnpqrstuvwxyABCDEFGHIJKLMNPQRSTUVWXY0123456789";
srand((double)microtime()*1000000);
for($i=0; $i<$car; $i++) {
$string .= $chaine[rand()%strlen($chaine)];
}
return $string;
}

/*****************************************function function for project ***********************/
/*
function set project to add new project in data base 
 */
public function newTask()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
    $data=array('project_id'=>$request['project_id'],
    			'title'=>$request['title'],
    			'description'=>$request['description'],
    			'date_start'=>$request['date_start'],
    			'date_end'=>$request['date_end'],
    			'heurs_estimee'=>$request['hours_est'],
    			'tauxe_estimee'=>$request['tauxe_est'],
    			'urgent'=>$request['urgent'],
    			'notify_user'=>$request['notify_user'],
    			'accompli'=>$request['accompli'],
    			'value'=>$request['value'],
    			'cible'=>$request['cible']);
   $this->loadModel('Tach');
   $this->Tach->create();
   $this->Tach->save($data);
  }
   $reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}

public function deleteTask($id=null)
{
		if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
	 $this->loadModel('Tach');
	 $this->loadModel('DelegationTache');
	 $this->DelegationTache->deleteAll(array('DelegationTache.tache_id'=>$request['id']));
	$this->Tach->id = $request['id'];
$this->Tach->delete();
}
$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}


public function editTask()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
    $data=array('id'=>$request['id'],
    			'title'=>$request['title'],
    			'description'=>$request['description'],
    			'date_start'=>$request['date_start'],
    			'date_end'=>$request['date_end'],
    			'heurs_estimee'=>$request['hours_est'],
    			'tauxe_estimee'=>$request['tauxe_est'],
    			'urgent'=>$request['urgent'],
    			'notify_user'=>$request['notify_user'],
    			'accompli'=>$request['accompli'],
    			'value'=>$request['value'],
    			'cible'=>$request['cible']);
   $this->loadModel('Tach');
   $this->Tach->save($data);
  }
   $reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}
/**********************fin  task*******************************************/
public function deletePlan($id=null)
{
$this->Plan->id = $id;
$this->Plan->delete();
$this->loadModel('DetailPlan');
$this->DetailPlan->deleteAll(array('DetailPlan.id_plan'=>$id));
}




/*****************************************function function for project ***********************/
/*
function set project to add new project in data base 
 */
public function setProject()
{

	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
		$this->loadModel('ProjectDetailPlanning');
		$this->loadModel('Project');
		$data=array('title'=>$request['title'],
					'description'=>$request['description'],
					'accompli'=>$request['accompli'],
					'notify_user'=>$request['notify_user']);
		$this->Project->create();
		$this->Project->save($data);
		$id=$this->Project->getLastInsertID();
		print_r($data);
		$liste_id=explode(',',$request['id_cells']);
		for ($i=0; $i <count($liste_id) ; $i++) 
		{ 
			$data=array('detail_planning_id'=>$liste_id[$i],
						'project_id'=>$id);
			$this->ProjectDetailPlanning->create();
			$this->ProjectDetailPlanning->save($data);
		}
	}
 $reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;

}
public function editProject()
{
		if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
	$this->loadModel('Project');
	$data=array(	'id'=>$request['id'],
					'title'=>$request['title'],
					'description'=>$request['description'],
					'accompli'=>$request['accompli'],
					'notify_user'=>$request['notify_user']);
	$this->Project->save($data);
	$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
	$this->response->body($reponses);
	return $this->response;
	}
}

public function deleteProject()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
	$request=$this->request->query;
	$this->loadModel('Project');
	$this->Project->id=$request['id'];
	$this->Project->delete();
	$this->loadModel('ProjectDetailPlanning');
	$this->loadModel('Tach');
	$this->Tach->deleteAll(array("Tach.project_id"=>$request['id']));
	$this->loadModel('DelegationProject');
	 $this->DelegationProject->deleteAll(array('DelegationProject.project_id'=>$request['id']));
	$this->ProjectDetailPlanning->deleteAll(array('ProjectDetailPlanning.project_id'=>$request['id']));
	$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
	$this->response->body($reponses);
	return $this->response;
	}
}

/**************************function sendMessage********************************/
/*
function sendMessage to share the planning=?
*/
public function sendMessage($liste=null)
{
// 	$liste=explode('&99;',$liste);
// $headers  = 'MIME-Version: 1.0' . "\r\n";
//      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
//      $headers .= 'From:'..'<'..'>' . "\r\n";
//      $headers .= 'Cc:' . "\r\n";
// $sujet = $liste[1];
// $message = $liste[2];
// mail($Email_Pro, $sujet, $message,$headers);
 
}
/**************************function planning********************************/
/*
function planning to return all data for action planning id=?
*/
     public function getPlanning($liste=null)
{
	$this->loadModel('HistoricalPlan');
	$row=3;
	$line=0;
	$id=explode(',',$liste)[0];
	$positionBudget=$this->getPositionType($id.',BUDGET,BUDGETS');
    $positionActivite=$this->getPositionType($id.',ACTIVITIES,ACTIVITE,ACTIVITY,ACTIVITÉS,ACTIVITÉ');
    $positionIndicator=$this->getPositionType($id.',INDICATOR,MESURE');
    $positionEcheance=$this->getPositionType($id.',ECHÉANCES,DEADLINE');
	$his_id=explode(',',$liste)[1];
	$plans =array();
	$axes=array();
	$type_Planning=array();
 $plans=$this->Plan->find('first',array('conditions'=>array('Plan.id'=>$id)));  
 $historical_plans=$this->getHistorical_plan($plans['Plan']['id']); 
 if($his_id>=count($historical_plans))
  $his_id=count($historical_plans)-1;
 else if($his_id<0)
 	$his_id=0;
 $optionplans=$this->getOption_planning($plans['Plan']['id']);
 $visionplans=$this->getVision_planning($plans['Plan']['id']);
 if(count($historical_plans))
 {
 	$axes2=$axes = $this->getAxes($historical_plans[$his_id]['HistoricalPlan']['id']);
$style=$this->getStyle($historical_plans[$his_id]['HistoricalPlan']['id']);
  	if($axes)
  	{
  		$row=$this->getNUmbreRowPlanningTable($axes[0]['Axis']['id']);
	  	foreach ($axes2 as $axe)
	  		$axesId[]=$axe['Axis']['id'];
  		$line=$this->getNUmbreLinePlanningTable($axesId);
		$line+=count($axesId);
  	}
 }
 $type_Plannings=$this->getTypePlanning($id);
 $typePlans=array('typePlan'=>$type_Plannings);
 $id_hisorical=$historical_plans[$his_id]['HistoricalPlan']['id'];
 $axes=array('axis'=>$axes);
$data=array_merge($plans,$style,$historical_plans[0],$optionplans,$visionplans,$typePlans,$axes,array('line'=>$line,'row'=>$row,'id'=>$id,'positionActivite'=>$positionActivite,'positionIndicator'=>$positionIndicator,'positionEcheance'=>$positionEcheance,'positionBudget'=>$positionBudget,'his_id'=>$his_id,'historical_id'=>$id_hisorical));
return json_encode($data);
     
}
/*****************************function historical planning*****************************/
/*
function hitorical planning to return all historical of id planning
*/
	public function getHistorical_plan($id=null)
{
$this->loadModel('HistoricalPlan');
$HistoricalPlans=$this->HistoricalPlan->find('all',
	['conditions'=>['HistoricalPlan.plan_id'=>$id],'order'=>['HistoricalPlan.date'=>'DESC']]);
return $HistoricalPlans;
}

/***************************** function axes*****************************/
/*
function axes for return all axes for histrical planing id=??
*/
public function getAxes($id=null)
{
	$this->loadModel('HistoricalPlan');
	$HistoricalPlans=$this->HistoricalPlan->find('first',
	['conditions'=>['HistoricalPlan.id'=>$id]]);

$this->loadModel('Axis');
$axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$id],'order'=>['Axis.position'=>'ASC']]);
$axes1=array();
foreach ($axes as $axe) {
	$row=$this->getNUmbreRowPlanningTable($HistoricalPlans['HistoricalPlan']['plan_id']);
	$line=$this->getNUmbreLinePlanningTable($axe['Axis']['id']);
	$coordonners=array('row'=>$row,'line'=>($line==0)?0:($line/(($row!=0)?$row:1)));
	$axefinal=array_merge($axe['Axis'],$coordonners);
 	$axes1[]=array_merge(array('Axis'=>$axefinal),array('detail_planning'=>$this->getDetail_planning($axe['Axis']['id'])));
 }
	return $axes1;	
}
// public function getAxesById($id=null)
// {
// 	$this->loadModel('Axis');
// 	$axis=$this->Axis->findById($id);
// 	return(array_merge(array($axis,$this->getDetail_planning($id))));
	
// }
/*************************function option action planning*****************/
/*
function return all option for action planning id=??
*/
public function getOption_planning($id=null)
{
$this->loadModel('OptionPlan');
$optionplans=$this->OptionPlan->find('all',
	['conditions'=>['OptionPlan.plan_id'=>$id]]);
	return $optionplans;
}
/*************************function vision action planning*****************/
/*
function return all vision for action planning id=??
*/
public function getVision_planning($id=null)
{
$this->loadModel('VisionPlan');
$visionplans=$this->VisionPlan->find('all',
	['conditions'=>['VisionPlan.plan_id'=>$id]]);
	return $visionplans;
}

/******************************function detail planning*********************/
/*
*function detail planing return Table detail  with axes id=??
*/
function getDetail_planning($id=null)
{
	$this->loadModel('DetailPlan');
$detailplans=$this->DetailPlan->find('all',
	['conditions'=>['DetailPlan.axes_id'=>$id]]);
$detailplans1=null;
$tableau=array();
foreach ($detailplans as $detailplan) 
	{
		$detailplans1[]=array('DetailPlan'=>array_merge($detailplan['DetailPlan'],
	 		array('budgets'=>$this->getBudget($detailplan['DetailPlan']['id'],'detail')),
	 		array('projects'=>$this->getProject($detailplan['DetailPlan']['id'])),
	 		array('jobs'=>$this->getJobs($detailplan['DetailPlan']['id'])),
	 		array('MaterielSources'=>$this->getMaterielSource($detailplan['DetailPlan']['id'])),
	 		array('HumanSources'=>$this->gethumanSource($detailplan['DetailPlan']['id'])),
	 		array('Activites'=>$this->getListeActivityAndIndicatorByDetailPlanningId($detailplan['DetailPlan']['id']))
	 		));
		
	}
	
	// echo "<pre>";
	// print_r(array_merge(array('detail_planning'=>$detailplans1),array('Activites'=>$tableau)));
	// die();
	//return array_merge(array('detail_planning'=>$detailplans1),array('Activites'=>$tableau));
return $detailplans1;
}

/*****************************************function budget ***********************/
/*
function budget return budget of source_id=?? and type_budget=??
*/
public function getBudget($id=null,$type=null)
{
	$this->loadModel('Budget');
	$budgets=$this->Budget->find('first',
		['conditions'=>['Budget.source_id'=>$id,'Budget.type_budget'=>$type]]);
	if($budgets)
	{
		$budget_id=$budgets['Budget']['id'];
	    $detailbudget=$this->getDetail_budget($budget_id);
	     $tab=array_merge($budgets['Budget'],array('detailbudget'=>$detailbudget));
	     return $tab;
 	}
    return null;
}

/*****************************************function detail budget ***********************/
/*
function detail budget return detail budget of budget_id=??
*/
public function getDetail_budget($id=null)
{
$this->loadModel('BudgetDetail');
$BudgetDetails=$this->BudgetDetail->find('all',
	['conditions'=>['BudgetDetail.budget_id'=>$id]]);
return $BudgetDetails;
}
/*****************************************function project ***********************/
/*
function project return all project of detail_plnning_id=??
*/
public function getProject($id=null)
{
$this->loadModel('ProjectDetailPlanning');
$this->loadModel('Project');
$ProjectDetailPlannings= $this->ProjectDetailPlanning->find('all',
	['conditions'=>['ProjectDetailPlanning.detail_planning_id'=>$id]]);
$tab=array();
foreach ($ProjectDetailPlannings as $value) {
	$tab[]=$value['ProjectDetailPlanning']['project_id'];
}
$projects =$this->Project->find('all',
	['conditions'=>['Project.id'=>$tab]]);
$projects1=null;
foreach ($projects as $project) {
$projects1[]=array_merge($project,
	array('taches'=>$this->getTache($project['Project']['id'])));
}
return $projects1;
}

/*****************************************function project ***********************/
/*
function getproject_id return all project of id=??
*/
public function getProject_id($id=null)
{
$this->loadModel('Project');

$projects =$this->Project->find('all',
	['conditions'=>['Project.id'=>$id]]);
$projects1=null;
foreach ($projects as $project) {
$projects1[]=array_merge($project,
	array('taches'=>$this->getTache($project['Project']['id'])));
}
return $projects1;
}


/*****************************************function tache ***********************/
/*
function tache return all tache of project_id=??
*/
public function getTache($id=null)
{
	$this->loadModel("Tach");
	$taches=$this->Tach->find('all',
		['conditions'=>['Tach.project_id'=>$id]]);

	return $taches;
}

/*****************************************function jobs ***********************/
/*
function jobs return all jobs of detail_planning_id=??
*/
private function getJobs($id=null)
{
	$this->loadModel('Job');
	$Jobs=$this->Job->find('all',['conditions'=>['Job.detail_plan_id'=>$id]]);
	$jobs=null;
foreach ($Jobs as $job) {
	$jobs[]=array_merge($job,$this->getDetailJobs($job['Job']['id']));
}
return $jobs;
}

/*****************************************function detail jobs ***********************/
/*
function get detil jobs return all detail jobs of Jobs_id=??
*/
private function getDetailJobs($id=null)
{
	$this->loadModel('JobeDetail');
	$JobeDetails=$this->JobeDetail->find('all',['conditions'=>['JobeDetail.job_id'=>$id]]);
return $JobeDetails;
}
/*****************************************function material source ***********************/
/*
function getMaterielSource return all Materiel Source of detail_planning_id=??
*/
private function getMaterielSource($id=null)
{
$this->loadModel('MaterialSource');
$materilSources=$this->MaterialSource->find('all',
	['conditions'=>['MaterialSource.detail_plan_id'=>$id]]);
	return $materilSources;
}
/*****************************************function human source ***********************/
/*
function gethumanSource return human source of detail_planning_id=??
*/
private function gethumanSource($id=null)
{
	$this->loadModel('HumanSource');
	$HumanSources=$this->HumanSource->find('all',
		['conditions'=>['HumanSource.detail_plan_id'=>$id]]);
	return $HumanSources;
}
/*****************************************function Planning table Number row ***********************/
/*
function getNumberRowPlanningTable return Planning table Number row of planning_id=??
*/
private function getNUmbreRowPlanningTable($id=null)
{

	$this->loadModel('TypePlan');
    $plans=$this->TypePlan->find('all',['conditions'=>['TypePlan.plan_id'=>$id]]);
   return (count($plans))?count($plans):0;
}
/*****************************************function Planning table Number line ***********************/
/*
function getNumberLinePlanningTable return Planning table Number line of planning_id=??
*/
private function getNUmbreLinePlanningTable($id=null)
{
	$this->loadModel('DetailPlan');
    $NumberLigne=$this->DetailPlan->find('count',
	['conditions'=>['DetailPlan.axes_id'=>$id]]);
   return $NumberLigne;
}
/*****************************************function add axes ***********************/
/*
function addAxess to add new axes in dada base with id_historical=?
*/
public function addAxes($id=null)
{
$this->loadModel('Axis');
$position=(count($this-> getAxes($id)))?count($this-> getAxes($id)):1;
$data=array(
			'title'=>'Axes',
			'historical_plan_id'=>$id,
			'position'=>$position);
			$this->Axis->create();
			$this->Axis->save($data);
	$idLaste= $this->Axis->getLastInsertID();
	$idPlan=$this->getIdPlanningByHistoricalPlanId($id);
	$type_Plannings=$this->getTypePlanning($idPlan);
	$this->addLine($idLaste.",1,".count($type_Plannings));
}
/*****************************************function set axes ***********************/
/*
function setAxes to Edit axes in dada base
*/
public function setAxes($liste=null)
{$this->loadModel('Axis');
	$liste=explode(',',$liste);
	$axis=$this->Axis->find('first',['conditions'=>['Axis.id'=>$liste[0]]]);
	$data=array(
			'id'=>$liste[0],
			'title'=>trim($liste[1]),
			'historical_plan_id'=>$axis['Axis']['historical_plan_id'],
			'position'=>$axis['Axis']['position']);
			$this->Axis->save($data);
}
/*****************************************function detail_plan ***********************/
/*
function detail_plan to refresh table planning
*/
public function detail_plan($id=null)
{
$axesId=array();
$axes=array();
$line=0;
$row=0;
$liste=explode(',',$id);
$id=$liste[0];
	$axes2=$axes = $this->getAxes($id);
	if($axes)
  $row=$this->getNUmbreRowPlanningTable($id);
  foreach ($axes2 as $axe) {
  	$axesId[]=$axe['Axis']['id'];
  }
  if($axesId)
  $line=$this->getNUmbreLinePlanningTable($axesId);
$line+=count($axesId);

$id_plan=$this->getIdPlanningByHistoricalPlanId($id);
	$positionBudget=$this->getPositionType($id.',BUDGET,BUDGETS');
    $positionActivite=$this->getPositionType($id.',ACTIVITIES,ACTIVITE,ACTIVITY,ACTIVITÉS,ACTIVITÉ');
    $positionIndicator=$this->getPositionType($id.',INDICATOR,MESURE');
    $positionEcheance=$this->getPositionType($id.',ECHÉANCES,DEADLINE');
$type_Plannings=$this->getTypePlanning($id_plan);

 $this->set(compact('axes','line','row','type_Plannings','positionBudget','positionActivite','positionIndicator','positionEcheance'));
}
/*****************************************function add line  ***********************/
/*
function addLine to add new line planning action of axes_id=?? and position=?
*/
public function addLine($liste=null)
{
	$liste=explode(',',$liste);

	if($liste[2]==0)
		$liste[2]=3;
	$this->loadModel('DetailPlan');
$detailplans=$this->DetailPlan->find('all',
	['conditions'=>['DetailPlan.axes_id'=>$liste[0],'DetailPlan.line >='=>$liste[1]]]);
	foreach ($detailplans as $detailplan) 
		{
			$detailplan['DetailPlan']['line']=intval($detailplan['DetailPlan']['line'])+1;
			$this->DetailPlan->save($detailplan['DetailPlan']);
		}
 $id=$this->Session->read('id');
	for($i=0;$i<$liste[2];$i++)
	{
		$data=array(
			'line'=>$liste[1],
			'row'=>$i+1,
			'content'=>'null',
			'locked'=>'no',
			'id_user'=>$id,
			'axes_id'=>$liste[0]);
$this->DetailPlan->create();
$this->DetailPlan->save($data);
	}
}
/*****************************************function deleteTypePlaningByPlanningId ***********************/
/*
function deleteTypePlaningByPlanningId to delete all type planning by id Planning=?
*/
function deleteTypePlaningByPlanningId($id=null){
$this->loadModel('TypePlan');
$this->TypePlan->deleteAll(array('TypePlan.plan_id'=>$id));
}
/*****************************************function deleteTypePlaningByPositionType ***********************/
/*
function deleteTypePlaningByPositionType to delete  type planning by id Planning=? and position type=?
*/
function deleteTypePlaningByPositionType($liste=null){
	$liste2=explode(',',$liste);
$this->loadModel('TypePlan');
$this->TypePlan->deleteAll(array('TypePlan.plan_id'=>$liste2[0],'TypePlan.position'=>$liste2[1]));
$this->setTypePlaningByposition($liste);
}
/*****************************************function deleteTypePlaningById ***********************/
/*
function deleteTypePlannigbyId to delete type planning by id Type Planning=?
*/
function deleteTypePlanningById($id=null)
{
$this->loadModel('TypePlan');
$this->TypePlan->id=$id;
$this->TypePlan->delete();
}
/*****************************************function setTypePlaningByposition ***********************/
/*
function setTypePlaningByposition to edit position  type planning by id Type Planning=? and position=?
*/
function setTypePlaningByposition($liste=null){
	$liste=explode(',',$liste);
$this->loadModel('TypePlan');
$listeTypePlannig=$this->TypePlan->find('all',
	['conditions'=>['TypePlan.plan_id'=>$liste[0],'TypePlan.position > '=>$liste[1]]]);

	foreach ($listeTypePlannig as $type_Plannings) {
		$data=array('id'=>$type_Plannings['TypePlan']['id'],
			'position'=>intval($type_Plannings['TypePlan']['position'])-1
			);
		$this->TypePlan->save($data);
	}

}
/*****************************************function add Row  ***********************/
/*
function addRow to add new Row planning action of axes_id=?? and position=?
*/
public function addRow($liste=null)
{
	$id=$this->Session->read('id');
	$line=0;
 $liste=explode(',',$liste);
 $this->loadModel('DetailPlan');
 $this->loadModel('Axis');
$axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$liste[0]],'order'=>['Axis.position'=>'ASC']]);
	foreach ($axes as $axe) 
		{
					$data=array(
							'line'=>1,
							'row'=>$liste[1],
							'content'=>' ',
							'id_user'=>$id,
							'axes_id'=>$axe['Axis']['id']);
			$this->DetailPlan->create();
			$this->DetailPlan->save($data);
		}
	
}




/*****************************************function get Number Ligne by axes ***********************/
/*
function getNumberLineByAxes to nimber ligne by axe_id=?
*/
public function getNumberLineByAxes($id=null)
{
$this->loadModel('DetailPlan');
$number=$this->DetailPlan->find('count',['conditions'=>['DetailPlan.axes_id'=>$id],'fields'=>'DISTINCT DetailPlan.line']);
return $number;
}
/*****************************************function save celle***********************/
/*
function saveCelle to save cells  planning action of celle=?? and position=?
*/
public function saveCelle($liste=null)
{
	$liste=explode(',',$liste);
	 $this->loadModel('DetailPlan');
   
    $data=array('id'=>$liste[0],
    	'content'=>$this->getHtml($liste[1]));
				$this->DetailPlan->save($data);

    
}
public function getHtml($content=null)
{
	$find=array('&amp;','&lt;','&gt;','&quot;','&42;','&58;','&44;','&nbsp;','&91;','&93;');
	$filter=array('&','<','>','"','/',':',',',' ','[',']');
	return str_replace($find, $filter, $content);
}
/*****************************************function get type planing***********************/
/*
function getTypePlanning to get type planning action of plan id=?
*/
public function getTypePlanning($id=null)
{
	$this->loadModel('TypePlan');
	return $this->TypePlan->find('all',['conditions'=>['TypePlan.plan_id'=>$id],'order'=>['TypePlan.position'=>'ASC']]);
} 
/*****************************************function add type planing***********************/
/*
function addTypePlanning to add type planning action of plan id=?
*/
public function addTypePlanning($liste=null)
{
	$liste=explode(',',$liste);
$this->loadModel('TypePlan');
$TypePLans=$this->TypePlan->find('all',['conditions'=>['TypePlan.position >='=>$liste[1]]]);
foreach ($TypePLans as $TypePlan) {
	$data=array(
		'id'=>$TypePlan['TypePlan']['id'],
		'description'=>$TypePlan['TypePlan']['description'],
		'position'=>intval($TypePlan['TypePlan']['position'])+1,
		'plan_id'=>$TypePlan['TypePlan']['plan_id']);
	$this->TypePlan->save($data);
}
	$data1=array(
		'description'=>'bilel',
		'position'=>$liste[1],
		'plan_id'=>$liste[0]);
	
	$this->TypePlan->create();
	$this->TypePlan->save($data1);
	return null;
}
/*****************************************function set type planing***********************/
/*
function setTypePlanning to set type planning action of plan id=?
*/
public function setTypePlanning($liste=null)
{
	$liste=explode(',',$liste);
	$this->loadModel('TypePlan');
	$typePlan=$this->TypePlan->find('first',['conditions'=>['TypePlan.id'=>$liste[0]]]);

	$data=array(
		'id'=>$liste[0],
		'description'=>$liste[1],
		'position'=>$typePlan['TypePlan']['position'],
		'plan_id'=>$typePlan['TypePlan']['plan_id']);
	
	$this->TypePlan->save($data);
	return null;
}
/*****************************************function add Historical planing***********************/
/*
function addHistoricalPlanning to add historical planning action of plan id=?
*/
public function addHistoricalPlanning($liste=null)
{
	$id=$this->Session->read('id');
	$liste=explode(',', $liste);
	$this->loadModel('HistoricalPlan');
$data=array('plan_id'=>$liste[0],
	'user_id'=>$id,
	'date'=>date("Y-m-d h:s:i"));
$this->HistoricalPlan->create();
$this->HistoricalPlan->save($data);
return null;
}
/*****************************************function get budget With id***********************/
/*
function getBudget_id to get budget id=?
*/
public function getBudget_id($id=null)
{
	$this->loadModel('Budget');
	$budget=$this->Budget->find('first',['conditions'=>['Budget.id'=>$id]]);
	return $budget;
}

/*****************************************function share***********************/
/*
function share to share planning action of plan id=?
*/
public function share($id=null)
{

	$link=$this->linkWeb($id);
	$users=$this->getUser($id);
	$this->set(compact('link','users'));

}
/*****************************************function get all user***********************/
/*
function getUser =?
*/
public function getUser($id=null)
{
		$this->loadModel('User');
	return $this->User->find('all');
}

/*****************************************function getIdPlanningByHistoricalPlanId***********************/
/*
function getIdPlanningByHistoricalPlanId by  histroical_plan-id =?
*/
public function getIdPlanningByHistoricalPlanId($id)
{
	$this->loadModel('HistoricalPlan');
	$historical_plan_id=$this->HistoricalPlan->findById($id);
	return $historical_plan_id['HistoricalPlan']['plan_id'];
}


/*****************************************function getStylePlaning***********************/
/*
function getStyle for Historicalplnning=?
*/
public function getStyle($id=null)
{
$this->loadModel('Styleplanning');
$style=$this->Styleplanning->findByHistoricalPlanId($id);
return $style;
}
/*****************************************function setStylePlaning***********************/
/*a
function setStyle for Historicalplnning=?
*/
public function setStyle($liste=null)
{
	$this->loadModel('Styleplanning');
	$liste=explode(',',$liste);
	$data=array('id'=>$liste[0],
		$liste[1]=>$liste[2]);
	$this->Styleplanning->save($data);
	die();
}
/*****************************************function addBudget********************/
/*
function addBudget for add budget to detailPlan-id=?
*/
 public function addBudget($id=null)
{
	
}
public function delegateTache($id=null)
{

}
/*****************************************function getpositionType***********************/
/*
function getPositionType to get position type  of the historicLplanning_ID=? and type=?  
*/
 public function getPositionType($liste=null)
{
	$id=explode(',',$liste)[0];

	$typeplanningBudget=explode(',',$liste);
	$typePlannings=$this->getTypePlanning($id);
	// echo "<pre>";
	// print_r($typeplanningBudget);
	// die();
	foreach ($typePlannings as $typePlanning) {
		if(in_array(strtoupper($typePlanning['TypePlan']['description']),$typeplanningBudget)) {
			return $typePlanning['TypePlan']['position'];
		}
	}
	return 0;
}

/***********************************************DELETE**********************************************/
/*****************************************function deleteProject***********************/
/*
function deleteProjectByIdDetailPlan by   delete Project By Id detail plannning=?
*/
public function deleteProjectByIdDetailPlan($id=null)
{
	$this->loadModel('Project','DetailPlan');
	$this->loadModel('ProjectDetailPlanning');
	$ProjectDetailPlannings=$this->ProjectDetailPlanning->findAllByDetailPlanningId($id,'project_id');
	$ProjectId=array();
	foreach ($ProjectDetailPlannings as $ProjectDetailPlanning) {
	$ProjectDetailPlanningsId[]=$ProjectDetailPlanning['ProjectDetailPlanning']['project_id'];
	}
	$this->ProjectDetailPlanning->deleteAll(array('detail_planning_id'=>$id));
	$this->Project->deleteAll(array('Project.id'=>$ProjectId));
return null;
}
/*****************************************function delete axes ***********************/
/*
function deleteAxes to axes  planning action of line=?? 
*/
public function deleteAxes($id=null)
{
$this->loadModel('Axis');
$this->Axis->id=$id;
$this->Axis->delete();
}
/*****************************************function delete line  ***********************/
/*
function deleteLine to delete Line  planning action of Line=?? and position=?
*/
public function deleteLine($liste=null)
{
  $liste=explode(',',$liste);
  $this->loadModel('DetailPlan');
 $this->loadModel('Axis');
    $detailplans1=$this->DetailPlan->findAllByLineAndAxesId('1',$liste[0],'id');
	         
	          foreach ($detailplans1 as $detailplan) {
 	$this->deleteProjectByIdDetailPlan($detailplan['DetailPlan']['id']);
 }
 $line=$this->getNumberLineByAxes($liste[0]);
 $axes = $this->Axis->find('first',
	['conditions'=>['Axis.id'=>$liste[0]]]);
          $detailplans=$this->DetailPlan->find('all',
	     ['conditions'=>['DetailPlan.axes_id'=>$liste[0],'DetailPlan.line >'=>1]]);
          $this->DetailPlan->deleteAll(array('DetailPlan.axes_id'=>$liste[0]));
			foreach ($detailplans as $detailplan) 
			{
				$detailplan['DetailPlan']['line']=intval($detailplan['DetailPlan']['line'])-1;
				$this->DetailPlan->save($detailplan['DetailPlan']);
			}
			if($line==1)
			{
		$this->deleteAxes($liste[0]);
		$line=0;
	        }

}
/*****************************************function delete Row  ***********************/
/*
function deleteRow to delete Row  planning action of row=?? and position=?
*/
public function deleteRow($liste=null)
{
 $liste=explode(',',$liste);
  $this->loadModel('DetailPlan');
 $this->loadModel('Axis');
 $this->loadModel("TypePlan");
 $position=$this->TypePlan->findById($liste[1])['TypePlan']['position'];
 $axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$liste[0]]]);

$tab=array();
	foreach ($axes as $axe) 
		{
			$tab[]=$axe['Axis']['id'];
		}
$this->DetailPlan->deleteAll(array('DetailPlan.row '=>$position,'DetailPlan.axes_id'=>$tab));		
$detailplans=$this->DetailPlan->find('all',
	     ['conditions'=>['DetailPlan.axes_id'=>$tab,'DetailPlan.row >'=>$position]]);
        foreach ($detailplans as $detailplan) 
			{
				$detailplan['DetailPlan']['row']=intval($detailplan['DetailPlan']['row'])-1;
				$this->DetailPlan->save($detailplan['DetailPlan']);
			}
			$plan_id=$this->getIdPlanningByHistoricalPlanId($liste[0]);
			$this->deleteTypePlaningByPositionType($plan_id.','.$position);



}
	/**********************************function newActiviter  ***********************/
/*
function NewActiviter to NewActiviter  planning action of row=?? and position=?
*/    
public function newActiviter()
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
	$this->loadModel('Activite');
	$num=count($this->getActivityByDetailPlanningId($request['id_cell']));
	
	$data=array(
		'num'=>$num+1,
		'description'=>$request['derscription'],
		'cible'=>$request['cible'],
		'detail_planning_id'=>$request['id_cell'],
		'value'=>$request['value']
		);
	$this->Activite->create();
	$this->Activite->save($data);
	
	$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}
}
	/**********************************function SaveActiviter  ***********************/
/*
function saveActiviter to  edit Activiter  planning action of row=?? and position=?
*/    
public function setActiviter($liste=null)
{
	if ($this->request->is('post')||($this->request->is('put')))
	{
		$request=$this->request->query;
	$this->loadModel('Activite');
	$num=count($this->getActivityByDetailPlanningId($request['id_cell']));
	
	$data=array(
		'id'=>$request['id'],
		'num'=>$request['num'],
		'description'=>$request['derscription'],
		'cible'=>$request['cible'],
		'detail_planning_id'=>$request['id_cell'],
		'value'=>$request['value']
		);
	$this->Activite->create();
	$this->Activite->save($data);
	
	$users=$this->getUser($id);
	$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
$this->response->body($reponses);
	return $this->response;
}
}

/**********************************function newResponsableActiviter  ***********************/
/*
*function newResponsableActiviter of activiter_id=?
*/
public function newResponsableActiviter($liste=null)
{
	$liste=explode(',',$liste);
	$this->loadModel('ActivityManager');
	for ($i=1; $i <count($liste) ; $i++) { 
		$data=array(
			'activiteer_id'=>$liste[0],
			'user_id'=>$liste[$i],
			"date"=>new date("Y-m-d")
			);
		$this->ActivityManager->create();
		$this->ActivityManager->save($data);
	}

}
	/**********************************function getIndicators  ***********************/
/*
function getIndicators of activiter_id=?*/    
public function getIndicators($id=null)
{
	$this->loadModel("Indicator");
	return $this->Indicator->findAllByActiviterId($id);
}
/**********************************function listeIndicator of activiterId=?  ***********************/
/*
function ListeIndicator of activiter_id=?*/    
public function listeindicator($id=null)
{

	$listeindicators=$this->getIndicators($id);
	$NumIndicator=count($listeindicators);
	$NumeroActiviter=$this->getActivityById($id)['Activite']['num'];
	$this->set(compact('listeindicators','NumIndicator','id','NumeroActiviter'));
}
/**********************************function getActivityByDetailPlanningId  ***********************/
/*
function getActivityByDetailPlanningId of axes_id=? and line=?
*/ 
public function getActivityByDetailPlanningId($id=null)
{
	$this->loadModel('Activite');
	$listeActiviter=$this->Activite->findAllByDetailPlanningId($id);
	return $listeActiviter;
}
/**********************************function getListeActivityAndIndicatorByDetailPlanningId  ***********************/
/*
function getActivityByDetailPlanningId of axes_id=? and line=?
*/ 
public function getListeActivityAndIndicatorByDetailPlanningId($id=null)
{
	$this->loadModel('Activite');
	$listeActiviters=$this->Activite->findAllByDetailPlanningId($id);
	$tab=array();
	foreach ($listeActiviters as $listeActiviter) {
		$tab[]=array_merge($listeActiviter,array('indicators'=>$this->getIndicators($listeActiviter['Activite']['id'])));
	}
	return $tab;
}
/**********************************function getActivityById  ***********************/
/*
function getActivityById of Id=?*/ 
public function getActivityById($id)
{
	$this->loadModel('Activite');
	$listeActiviter=$this->Activite->findById($id);
	return $listeActiviter;
}

/**********************************function newIndicator  ***********************/
/*
function newIndicators of Activitre=?*/ 

public function newIndicator($liste=null)
{
	$type=array('%','#','$');
	$liste=explode(',',$liste);
	$listeindicators=$this->getIndicators($liste[5]);
	$NumIndicator=count($listeindicators);
	$this->loadModel("Indicator");
	$data=array(
		'num'=>$NumIndicator+1,
		'description'=>$liste[1],
		'type'=>$type[$liste[2]],
		'cible'=>$liste[3],
		'valeur'=>'0',
		'date_fin'=>$liste[4],
		'activiter_id'=>$liste[5]
		);
	$this->Indicator->create();
	$this->Indicator->save($data);
}
/**********************************function setIndicator  ***********************/
/*
function setIndicators of id=?*/ 
public function setIndicator($liste=null)
{
	$liste=explode(',', $liste);
	$this->loadModel("Indicator");
	$data=array(
		'id'=>$liste[0],
		'valeur'=>$liste[1]
		);
	$this->Indicator->save($data);
}

/**********************************function getSourceById  ***********************/
/*
function getSourceById of any model  and by id=?
*/ 
public function getSourceById($liste=null)
{
	$liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->findById($liste[1]);
	//$table=array_values(($table));
	//$out=json_encode($table);
	return $table;
}
/**********************************function getSourceByAttribute  ***********************/
/*
function getSourceByAttribute of any model  and by Attribute=?
*/ 
public function getSourceByAttribute($liste=null)
{
	$liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->find('all',['conditions'=>[$liste[0].'.'.$liste[1]=>$liste[2]]]);
	$table=array_values(($table));
	$out=json_encode($table);
	return $out;
}
/**********************************function getSourceByTopAttribute  ***********************/
/*
function getSourceByTopAttribute of any model  and by top attribute=?
*/ 
public function getSourceByTopAttribute($liste=null)
{
    $liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->find('all',['conditions'=>[$liste[0].'.'.$liste[1].'> '=>$liste[2]]]);
	$table=array_values(($table));
	$out=json_encode($table);
	return $out;
}
/**********************************function getSourceByLowerAttribute  ***********************/
/*
function getSourceByLowerAttribute of any model  and by lower attribute=?
*/ 
public function getSourceByLowerAttribute($liste=null)
{
    $liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->find('all',['conditions'=>[$liste[0].'.'.$liste[1].'< '=>$liste[2]]]);
	$table=array_values(($table));
	$out=json_encode($table);
	return $out;
}
/**********************************function getSourceBetweenTwoAttribute  ***********************/
/*
function getSourceBetweenTwoAttribute of any model  and Between two attributes=?
*/ 
public function getSourceBetweenTwoAttribute($liste=null)
{
    $liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->find('all',['conditions'=>[$liste[0].'.'.$liste[1].'<='=>$liste[2],$liste[0].'.'.$liste[1].'>= '=>$liste[3]]]);
	$table=array_values(($table));
	$out=json_encode($table);
	return $out;
}
/**********************************function getSourceByTwoAttributes  ***********************/
/*
function getSourceByTwoAttributes of any model and by two attributes=?
*/ 
public function getSourceByTwoAttributes($liste=null)
{
	 $liste=explode(",",$liste);
	$this->loadModel($liste[0]);
	$table=$this->$liste[0]->find('all',['conditions'=>[$liste[0].'.'.$liste[1]=>$liste[3],$liste[0].'.'.$liste[2]=>$liste[4]]]);
	$table=array_values(($table));
	$out=json_encode($table);
	return $out;
}
/**********************************function lockedUnlockedPlanById  ***********************/
/*
function lockedUnlockedPlanById of Plan by id=?
*/ 
public function lockedUnlockedPlanById()
{
if ($this->request->is('post')||($this->request->is('put')))
	{
$request=$this->request->query;
$this->loadModel('Plan');
debug($request);
$data=array('id'=>$request['planing_id'],
	'locked'=>$request['locked']);
$this->Plan->save($data);
$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
	$this->response->body($reponses);
	return $this->response;
	
}
}
public function lockedUnlockedCellById()
{
if ($this->request->is('post')||($this->request->is('put')))
	{
$request=$this->request->query;
$this->loadModel('DetailPlan');
$data=array('id'=>$request['id'],
	'locked'=>$request['locked']);
$this->DetailPlan->save($data);
$reponses=$this->getPlanning($request['planing_id'].','.$request['historical_planing_id']);
	$this->response->body($reponses);
	return $this->response;
	}


}

}