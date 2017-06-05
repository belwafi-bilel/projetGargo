<?php
App::uses('AppController', 'Controller');
/**
 * Plans Controller
 *
 * @property Plan $Plan
 */

class PlansController extends AppController {

public function composant($liste=null)
{	$this->loadModel("Composant");
$coordonner=explode(',',$liste);
$type=explode(',',$coordonner[2]);
$composants=$this->Composant->find('all');
$TableTails=$this->Session->read("TableTail");
	$this->exemple($coordonner[0].','.$coordonner[1]);
	$this->set(compact('composants','TableTails','coordonner'));
}
public function colone($numLigne=null)
{
	$this->loadModel('TypeComponent');
	$types=$this->TypeComponent->find('all');
$tab=explode(',',$numLigne); 
	$this->set(compact('tab','types'));
}
public function divligne($numLigne=null)
{
	$tab=explode(',',$numLigne); 

	$this->set(compact('tab'));
}
public function editcoponent($liste=null)
{

}
// public function budget($liste=null)
// {
// 	$index=explode(',', $liste);
// 	if(count($index)!=3)
// 	{
// 		$index=explode(',-,',$liste);
//        for ($i=1; $i <count($index)-1 ; $i++) { 
//      	$listeindex=explode(',',$index[$i]);
//      	$budget=array(
//      		'plan_id'=>'1',
//      		'reference'=>explode(',', $index[0])[0].'-'.explode(',', $index[0])[1],
//      	     'total'=>explode(',', $index[count($index)-1]));
//      	for ($j=0; $j <count($listeindex); $j++) { 
//      	$data=array(
//      		'item'=>$listeindex[0],
//      		'amount'=>$listeindex[1],
//      		'In-kind'=>$listeindex[2],
//      		'source'=>$listeindex[3],
//      		'status'=>$listeindex[4],
//      		'budget_id'=>'1');	
//      	}
//      }
//      die();
// 	}else
// 	{
// $this->set(compact('liste'));
// }

// }
public function jobs()
{

}
public function resources()
{

}
public function textarea($liste=null)
{
	$this->set(compact('liste'));
}
public function exemple($liste=null)
{
	$index=explode('-,',$liste);

	if(count($index)==3){
	$TableTails=$this->Session->read("TableTail");
	//$i=count($TableTails[$index[0]][$index[1]]['data']);
     $this->Session->write('TableTail.'.$index[0].'.'.$index[1].'.data',htmlspecialchars($index[2]));
       }
$TableTails=$this->Session->read("TableTail");
$this->set(compact('index','TableTails'));
}
public function recording($id=null)
{
$detailsession=$this->Session->read("TableTail");
	$content="";
for ($i=0; $i <count($detailsession) ; $i++) { 
	
for ($j=0; $j <count($detailsession[$i]) ; $j++) { 
		$content.=$i."<>".$j."=.=".$detailsession[$i][$j]['type']."?!?".$detailsession[$i][$j]['color']."?!?".$detailsession[$i][$j]['display']."?!?".$detailsession[$i][$j]['data']."?!?".$detailsession[$i][$j]['duplicate']."!!-!!";
	}

	
	
}
$ettiquette=$this->Session->read('ettiquette');
	$ettiquettes="";
	foreach ($ettiquette as  $value) {
		$ettiquettes.="%3%".$value['id']."%3%".$value['description']."!##!";
	}
$content.="%55%".$ettiquettes;
$id_profile=$this->Session->read('id');
$data=array('id_plan'=>$id,
			'id_profile'=>$id_profile,
			'date_modification'=>date("Y-m-d h:s:i"),
			'content'=>$content
	);
$this->loadModel('DetailPlan');
$this->DetailPlan->create();
$this->DetailPlan->save($data);
}
public function newPlan($liste=null)
{
	$id=$this->Session->read('id');
	$liste=explode('!!', $liste);
	$date=array(
		'titre'=>$liste[0],
		'date_creation'=>date("Y-m-d h:s:i"),
		'logo'=>'',
		'profile_id'=>$id,
		'adress'=>$liste[1],
		'option'=>$liste[2]);
	$this->Plan->create();
	$this->Plan->save($date);
}
public function plan($liste=null)
{
	$total=$this->Session->read("total");
	$detail=0;
	$tab=explode(',', $liste);
	SessionComponent::delete('TableTail');
	SessionComponent::delete('ettiquette');
	$id_profile=$this->Session->read('id');
    $plans=$this->Plan->find('first',array('conditions'=>array('Plan.id'=>$tab[0])));  
            if($tab[1]==1)
            {
	        $detail=intval($this->Session->read("detail"));
	       if($detail<$total)
	       	{
	       		$detail+=1;
	       	}
           }else
            {
            $detail=intval($this->Session->read("detail"));
            if($detail>0)
       	     $detail-=1;
        	}
$result=$this->detailplans($tab[0],$detail);
$this->Session->write("TableTail",$result[0]);
$this->Session->write("ettiquette",$result[1]);
$this->Session->write('id_plan',$tab[0]);
$this->tableau();
$listes=array("user1","user2","user3","user4");
$this->set(compact('types','listes','plans','total'));
}








public function index()
{
	    $plans="";
	    $types="";
        $this->layout=null;
		SessionComponent::delete('TableTail');
		$this->loadModel('TypeComponent');
		$types=$this->TypeComponent->find('all');
		$this->loadModel('PersonalOffer');
	    $this->loadModel('PermissionAccess');
        $id=$this->Session->read('id');
	    $this->loadModel('Historical');
	    $this->loadModel('TypeComponent');
	//$this->loadModel('Plan');
	$plans=$this->Plan->find('all',array('conditions'=>array('Plan.user_id'=>$id)));
	if($plans)
	{
			$histrical=$this->Historical->find('first',array('conditions'=>['Historical.user_id'=>$id]));
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
				
				$types=$this->TypeComponent->find('all');
		       }else
				{
				 $access=array('access'=>false);
			     $this->set((compact('access','')));
				}
			}
	}
$this->set(compact('types','listes','plans'));  
}



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
	echo "127.0.0.1/sou_project/sm/plans/link/".$linkweb['Linkweb']['lien'];
	die();
}else
{
	$reference= $this->random('32');
    $link="127.0.0.1/sou_project/sm/plans/link/".$reference;
    echo $link;
    $date=array('lien'=>$reference,'plan_id'=>$id);
    $this->Linkweb->create();
    $this->Linkweb->save($date);
	die();
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
public function view($liste=null)
{
	echo $liste;
die();
}
 public function delete($liste=null)
 {
$index=explode(',',$liste);
 	$this->Session->delete('TableTail.'.$index[0].'.'.$index[1].'.data.'.$index[2]);
 	return null;
 }

public function editExemple($liste=null)
{
	$index=explode(',',$liste);
	$this->Session->write('TableTail.'.$index[0].'.'.$index[1].'.data.'.$index[2],$index[3]);
return null;
}
public function listeusergroups($liste=null)
{
	if($liste=="groups")
	{
$listes=array("groupe1","groupe2","groupe3","groupe4");
	}else
	{
		$listes=array("user1","user2","user3","user4");
	}
	$this->set(compact('listes'));
}
public function edit($liste=null)
{
	$detailsession=$this->Session->read("TableTail");
	echo "<pre>";
	print_r($detailsession);
echo "</pre>";
	die();
}

public function getdeblock($i,$j)
{
// if($this->Session->read('TableTail.0.0.duplicate')=="block")
// return $this->Session->read('TableTail.'.$i.'.'.$j.'.duplicate');
// else if($this->Session->read('TableTail.0.0.duplicate')=="none")
return $this->Session->read('TableTail.0.0.duplicate');
	
}
public function getData($i,$j)
{
	return $this->Session->read('TableTail.'.$i.'.'.$j.'.data')?
	$this->Session->read('TableTail.'.$i.'.'.$j.'.data'):"";
}
public function getcolor($i,$j)
{
	if($this->Session->read('TableTail.'.$i.'.'.$j.'.color'))
		$color= $this->Session->read('TableTail.'.$i.'.'.$j.'.color');
		else if($this->Session->read('TableTail.'.$i.'.0'.'.color'))
         $color= $this->Session->read('TableTail.'.$i.'.0'.'.color');
		 else if($this->Session->read('TableTail.0.'.$j.'.color'))
	    $color= $this->Session->read('TableTail.0.'.$j.'.color');
	else $color= $this->Session->read('TableTail.0.0.color');;
return $color;

}
public function gettypes($j=null)
{
return ($this->Session->read('TableTail.1.'.$j.'.type'))?
$this->Session->read('TableTail.1.'.$j.'.type'):"";
}
public function getdisplay($j=null)
{
return ($this->Session->read('TableTail.0.'.$j.'.display'))?
$this->Session->read('TableTail.0.'.$j.'.display'):"";
}
public function colors($liste=null)
{

$indexcolor=explode(',',$liste);

$this->Session->delete('TableTail.'.$indexcolor[0].'.'.$indexcolor[1].'.color');
$this->Session->write('TableTail.'.$indexcolor[0].'.'.$indexcolor[1].'.color',$indexcolor[2]);
$this->tableau($indexcolor[3].",".$indexcolor[4]);
exit;	
}
public function typeCom($liste=null)
{
$indexcolor=explode(',',$liste);
$this->Session->delete('TableTail.1.'.$indexcolor[0].'.type');
$this->Session->write('TableTail.1.'.$indexcolor[0].'.type',$indexcolor[1]);
exit;	
}
public function displaycol($liste=null)
{
$indexcolor=explode('.',$liste);
$display=explode(',',$indexcolor[1]);
$this->Session->delete('TableTail.0.'.$indexcolor[0].'.display');
$this->Session->write('TableTail.0.'.$indexcolor[0].'.display',$display[0]);
$this->tableau($display[1].",".$display[2]);
exit;	
}
public function blockage($type=null)
{
	$this->Session->write('TableTail.0.0.duplicate',$type);
}

public function boite()
{

}
public function deleteligne($liste=null)
{
	$TableTails=$this->Session->read("TableTail");
	 	$this->Session->delete('TableTail.'.$liste);
	 	$tab=array_values($this->Session->read("TableTail"));	
	$this->Session->write("TableTail",$tab);
	$ettiquette=$this->Session->read('ettiquette');

	for ($i=0; $i <count($ettiquette) ; $i++) { 
		if($ettiquette[$i]['id']==$liste)
			{$this->Session->delete('ettiquette.'.$i);break;}
	}
$ettiquette=$this->Session->read('ettiquette');
print_r(array_values($ettiquette));
$this->Session->write('ettiquette',array_values($ettiquette));
$this->tableau();
	exit;

}
public function deletecolone($liste=null)
{
	$index=explode(',', $liste);
	print_r($index);
	$TableTails=$this->Session->read("TableTail");
	 for ($i=0; $i <$index[0]; $i++) { 
	 	$this->Session->delete('TableTail.'.$i.'.'.$index[2]);
	 	$tab=array_values($this->Session->read("TableTail.".$i));
	$this->Session->write('TableTail.'.$i,$tab);
	}
	$TableTails2=$this->Session->read("TableTail");
	$this->Session->write("TableTail",$TableTails2);
$this->tableau();
	exit;
}
public function blockagecellule($liste=null)
{$index=explode(',', $liste);
$this->Session->write('TableTail.'.$index[0].'.'.$index[1].".",$index[2]);
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

public function project($liste=null)
{
	$TableTail=$this->Session->read("TableTail");
	$coordonners=array(count($TableTail),count($TableTail[0]));
	$this->loadModel('User');
		$this->loadModel('Group');
		$this->loadModel('GroupeUser');
		$this->loadModel('Project');
	$users=$this->User->find('all');
		$Groups=$this->Group->find('all');
		$IDproject=$this->Project->getLastInsertID();
		$GroupeUsers=$this->GroupeUser->find('all');
	if($liste==null){
		;
}else
{
$liste=explode(',', $liste);
$id_plan=$this->Session->read('id_plan');	

	$data=array('plan_id'=>$id_plan,
		'ref_cell'=>$liste[2],
		'titre'=>$liste[0],
		'description'=>$liste[1],
		'percentage'=>$liste[4],
		'aviser_utiliateurs_courriel'=>$liste[3]);
		$this->Project->create();
		$this->Project->save($data);
$IDproject=$this->Project->getLastInsertID();
echo $IDproject;
}
$this->set(compact('coordonners','TableTail','users','Groups','GroupeUsers','IDproject'));
}
public function task($liste=null)
{
	if($liste==null)
	{
	$id_plan=$this->Session->read('id_plan');
	$this->loadModel('Project');
    $projects=$this->Project->find('all',['conditions'=>['Project.plan_id'=>$id_plan]]);
    $this->set(compact('projects'));
    }else{
    $liste=explode(',', $liste);
    $data=array('project_id'=>intval($liste[2]),
    			'titre'=>$liste[0],
    			'description'=>$liste[1],
    			'date_debut'=>$liste[3],
    			'date_fin'=>$liste[4],
    			'heurs_estimee'=>$liste[5],
    			'taux_estimee'=>$liste[6],
    			'budget'=>$liste[7],
    			'urgent'=>$liste[8],
    			'aviser_utilisateurs_couriel'=>$liste[9]);
   $this->loadModel('Tach');
   $this->Tach->create();
   $this->Tach->save($data);
   echo __("Task bien sauvgarder");
   die();
    }
}
public function ettiquette($liste=null)
{
	$tab=$this->Session->read("ettiquette");
	$tab[]=array('id'=>$liste,
		'description'=>'Objectif:');
 $this->Session->write("ettiquette",$tab);
$tab=$this->Session->read('ettiquette');
//$this->tableau();
die();
}
public function EditEtiquette($liste=null)
{
	$liste=explode(',',$liste);

$ettiquette=$this->Session->read('ettiquette');
foreach ($ettiquette as $key => $value) {
	if($value==$liste[0])
		{$X=$key;
	break;}

}
$this->Session->delete('ettiquette.'.$X);
$tab=array('id'=>$liste[0],
	'description'=>$liste[1]);
$this->Session->write('TableTail.'.$X.'.'.$tab);
}

public function deletePlan($id=null)
{
$this->Plan->id = $id;
$this->Plan->delete();
$this->loadModel('DetailPlan');
$this->DetailPlan->deleteAll(array('DetailPlan.id_plan'=>$id));
}
public function ettitquet()
{
$ettiquette=$this->Session->read('ettiquette');
echo "<pre>";
print_r($ettiquette);
die();
}

public function sendMessage()
{
$headers  = 'MIME-Version: 1.0' . "\r\n";
     $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
     $headers .= 'From: Financement multiple <bilel.belwafi.iit@gmail.com>' . "\r\n";
     $headers .= 'Cc: bilel.belwafi.iit@gmail.com' . "\r\n";
$sujet = '';
$message = "";
mail("belwafi22173693@gmail.com", $sujet, $message,$headers);

}
/**************************function planning********************************/
/*
function planning to return all data for action planning id=?
*/
     public function getPlanning($liste=null)
{
	$row=3;
	$line=0;
	$id=explode(',',$liste)[0];
	$his_id=explode(',',$liste)[1];
	$plans =array();
	$axes=array();
	
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
  	if($axes)
  	{
  		$row=$this->getNUmbreRowPlanningTable($axes[0]['Axis']['id']);
	  	foreach ($axes2 as $axe)
	  		$axesId[]=$axe['Axis']['id'];
  		$line=$this->getNUmbreLinePlanningTable($axesId);
		$line+=count($axesId);
  	}
 }

   $this->set(compact('plans','optionplans','visionplans','historical_plans','id','axes','line','row','his_id'));       
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
$this->loadModel('Axis');
$axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$id],'order'=>['Axis.position'=>'ASC']]);
$axes1=array();
foreach ($axes as $axe) {
	$row=$this->getNUmbreRowPlanningTable($axe['Axis']['id']);
	$line=$this->getNUmbreLinePlanningTable($axe['Axis']['id']);
	$coordonners=array('row'=>$row,'line'=>($line==0)?0:($line/(($row!=0)?$row:1)));
	$axefinal=array_merge($axe['Axis'],$coordonners);
 	$axes1[]=array_merge(array('Axis'=>$axefinal,'detail_planning'=>$this->getDetail_planning($axe['Axis']['id'])));
 }

	return $axes1;	
}
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
*function detail planing return Table detail link with axes id=??
*/
function getDetail_planning($id=null)
{
	$this->loadModel('DetailPlan');
$detailplans=$this->DetailPlan->find('all',
	['conditions'=>['DetailPlan.axes_id'=>$id]]);
$detailplans1=null;
foreach ($detailplans as $detailplan) 
	{
		$detailplans1[]=array('DetailPlan'=>array_merge($detailplan['DetailPlan'],
	 		array('budgets'=>$this->getBudget($detailplan['DetailPlan']['id'],'detail')),
	 		array('projects'=>$this->getProject($detailplan['DetailPlan']['id'])),
	 		array('jobs'=>$this->getJobs($detailplan['DetailPlan']['id'])),
	 		array('MaterielSources'=>$this->getMaterielSource($detailplan['DetailPlan']['id'])),
	 		array('HumanSources'=>$this->gethumanSource($detailplan['DetailPlan']['id']))));
	}
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
	$MaxRow[0]['max']=0;
	$this->loadModel('DetailPlan');
    $MaxRow=$this->DetailPlan->find('first',
	['fields'=>['MAX(DetailPlan.row) as max'],'conditions'=>['DetailPlan.axes_id'=>$id]]);
   return ($MaxRow[0]['max']!=0)?$MaxRow[0]['max']:0;
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
/*****************************************function set axes ***********************/
/*
function setAxess to add new axes in dada base
*/
public function setAxes($data=null)
{

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
	$axes2=$axes = $this->getAxes($id);
	if($axes)
  $row=$this->getNUmbreRowPlanningTable($axes[0]['Axis']['id']);
  foreach ($axes2 as $axe) {
  	$axesId[]=$axe['Axis']['id'];
  }
  if($axesId)
  $line=$this->getNUmbreLinePlanningTable($axesId);
$line+=count($axesId);
 $this->set(compact('axes','line','row'));
}
/*****************************************function add line  ***********************/
/*
function addLine to add new line planning action of axes_id=?? and position=?
*/
public function addLine($liste=null)
{
	$liste=explode(',',$liste);
	$row=$this->getNUmbreRowPlanningTable($liste[0]);

	if($row==0)
		$row=3;

	$this->loadModel('DetailPlan');
$detailplans=$this->DetailPlan->find('all',
	['conditions'=>['DetailPlan.axes_id'=>$liste[0],'DetailPlan.line >='=>$liste[1]]]);
	foreach ($detailplans as $detailplan) 
		{
			$detailplan['DetailPlan']['line']=intval($detailplan['DetailPlan']['line'])+1;
			$this->DetailPlan->save($detailplan['DetailPlan']);
		}
 $id=$this->Session->read('id');
	for($i=0;$i<$row;$i++)
	{
		$data=array(
			'line'=>$liste[1],
			'row'=>$i+1,
			'content'=>'null',
			'id_user'=>$id,
			'axes_id'=>$liste[0]);
$this->DetailPlan->create();
$this->DetailPlan->save($data);
	}
}
/*****************************************function add Row  ***********************/
/*
function addRow to add new Row planning action of axes_id=?? and position=?
*/
public function addRow($liste=null)
{
	$id=$this->Session->read('id');
 $liste=explode(',',$liste);
// print_r($liste);
 $this->loadModel('DetailPlan');
 $this->loadModel('Axis');
$axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$liste[1]],'order'=>['Axis.position'=>'ASC']]);
	foreach ($axes as $axe) 
		{
		$detailplans=$this->DetailPlan->find('all',
	     ['conditions'=>['DetailPlan.axes_id'=>$axe['Axis']['id'],'DetailPlan.row >='=>$liste[0]]]);
			foreach ($detailplans as $detailplan) 
			{
				$detailplan['DetailPlan']['row']=intval($detailplan['DetailPlan']['row'])+1;
				$this->DetailPlan->save($detailplan['DetailPlan']);
				
				$line[]=$detailplan['DetailPlan']['line'];
			}
            
				}
				 $line=array_values((array_unique($line)));
            
             
				for($i=0;$i<count($line);$i++)
				{
					$data=array(
							'line'=>$line[$i],
							'row'=>$liste[0],
							'content'=>null,
							'id_user'=>$id,
							'axes_id'=>$axe['Axis']['id']);
			$this->DetailPlan->create();
			$this->DetailPlan->save($data);
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
 $axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$liste[0]]]);
	foreach ($axes as $axe) 
		{
          $detailplans=$this->DetailPlan->find('all',
	     ['conditions'=>['DetailPlan.axes_id'=>$axe['Axis']['id'],'DetailPlan.row >'=>$liste[1]]]);
          $this->DetailPlan->deleteAll(array('DetailPlan.row '=>$liste[1],'DetailPlan.axes_id'=>$axe['Axis']['id']));
			foreach ($detailplans as $detailplan) 
			{
				$detailplan['DetailPlan']['row']=intval($detailplan['DetailPlan']['row'])-1;
				$this->DetailPlan->save($detailplan['DetailPlan']);
			}

		}

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
 $axes = $this->Axis->find('all',
	['conditions'=>['Axis.historical_plan_id'=>$liste[0]]]);
	foreach ($axes as $axe) 
		{
          $detailplans=$this->DetailPlan->find('all',
	     ['conditions'=>['DetailPlan.axes_id'=>$axe['Axis']['id'],'DetailPlan.line >'=>$liste[1]]]);
          $this->DetailPlan->deleteAll(array('DetailPlan.line '=>$liste[1],'DetailPlan.axes_id'=>$axe['Axis']['id']));
			foreach ($detailplans as $detailplan) 
			{
				$detailplan['DetailPlan']['line']=intval($detailplan['DetailPlan']['line'])-1;
				$this->DetailPlan->save($detailplan['DetailPlan']);
			}

		}
}

/*****************************************function Merge cells ***********************/
/*
function mergeCelle to Merge cells  planning action of line=?? and position=?
*/
public function mergeCelle($liste=null)
{
;
}

/*****************************************function save celle***********************/
/*
function saveCelle to save cells  planning action of celle=?? and position=?
*/
public function saveCelle($liste=null)
{
	$liste=explode(',',$liste);
	 $this->loadModel('DetailPlan');
    if(($liste[0]!=0)&&($liste[1]!=0)&&($liste[2]!=0))
    {
     $detailplans=$this->DetailPlan->find('first',
	     ['conditions'=>
	     ['DetailPlan.axes_id'=>$liste[0],
	     'DetailPlan.row'=>$liste[2],
	     'DetailPlan.line'=>$liste[1]
	     ]]);
 
                $detailplans['DetailPlan']['content']=$this->getHtml($liste[3]);
				$this->DetailPlan->save($detailplans['DetailPlan']);

    }
}
public function getHtml($content=null)
{
	$find=array('&amp;','&lt;','&gt;','&quot;','&47;','&58;','&44;','&nbsp;','&91;','&93;');
	$filter=array('&','<','>','"','/',':',',',' ','[',']');
	return str_replace($find, $filter, $content);
	
}
}
