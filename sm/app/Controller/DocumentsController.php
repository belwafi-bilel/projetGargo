<?php
App::uses('AppController', 'Controller');
/**
 * Documents Controller
 *
 * @property Document $Document
 */
class DocumentsController extends AppController {

/**
 * index method
 *
 * @return void
 */
	public function index() {
		$this->Document->recursive = 0;
		$this->set('documents', $this->paginate());
	}

/**
 * view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function view($id = null) {
		if (!$this->Document->exists($id)) {
			throw new NotFoundException(__('Invalid document'));
		}
		$options = array('conditions' => array('Document.' . $this->Document->primaryKey => $id));
		$this->set('document', $this->Document->find('first', $options));
	}

/**
 * add method
 *
 * @return void
 */
	public function add() {

		if ($this->request->is('post')) {
	
	$this->layout=null;
			$espaceprofile=17;
            $id_users=$this->Session->read("id");
			 $this->loadModel('DocumentCategory');
			 $this->loadModel('DocumentCustomer');
			 $this->loadModel('DocumentLanguage');
			 $this->loadModel('DocumentSector');
			 $this->loadModel('Attachment');
			 $folderVisibility = new Folder();
			 $folderDocument=new Folder();
			  if ($dir=$folderVisibility->create('files' . DS .'Stockage'.DS.$this->request->data['visibility']))
			  	$dirDocument='files' . DS .'Stockage'.DS.$this->request->data['visibility'].DS.$this->request->data['name'];
			  if($folderDocument->create($dirDocument))
			  	$size=0;
			for ($i=0; $i < count($this->request->data['Document']['file']); $i++)
			{
               $size=$size+intval($this->request->data['Document']['file'][$i]['size']);
			}
			$size+=$this->request->data['Document']['upload']['size'];
		    $size/=(1024*1024);
			if($size<$espaceprofile)
			{
				 $filename = $dirDocument.DS.$this->request->data['Document']['upload']['name'];
				 move_uploaded_file($this->request->data['Document']['upload']['tmp_name'],$filename);
				 $document=array('name'=>$this->request->data['name'],
				 	'country'=>$this->request->data['country'],
				 	'them'=>$this->request->data['them'],
				 	'description'=>$this->request->data['description'],
				 	'keyword'=>$this->request->data['keyword'],
				 	'price'=>$this->request->data['Document']['price'],
				 	'creation_date'=>$this->request->data['Document']['creation_date'],
				 	'url'=>$filename,
				 	'profile_id'=>$id_users,
				 	'size'=>$size);
				 $this->Document->create();
				 $this->Document->save($document);
				 $document_id=$this->Document->getLastInsertID();
				 foreach ($this->request->data['s'] as $key => $value) {
				 		$documentSector=array('sector_id'=>$key,
				 			'document_id'=>$document_id);
				 		$this->DocumentSector->create();
				 $this->DocumentSector->save($documentSector);
				 	}
				 	foreach ($this->request->data['l'] as $key => $value) {
				 		$documentLanguage=array('language_id'=>$key,
				 			'document_id'=>$document_id);
				 		$this->DocumentLanguage->create();
				 $this->DocumentLanguage->save($documentLanguage);
				 	}	
				 	foreach ($this->request->data['c'] as $key => $value) {
				 		$DocumentCategory=array('categorie_id'=>$key,
				 			'document_id'=>$document_id);
				 		$this->DocumentCategory->create();
				 $this->DocumentCategory->save($DocumentCategory);
				 	}	
				 	foreach ($this->request->data['u'] as $key => $value) {
				 		$DocumentCustomer=array('customer_id'=>$key,
				 			'document_id'=>$document_id);
				 		$this->DocumentCustomer->create();
				 $this->DocumentCustomer->save($DocumentCustomer);
				 	}	
			for ($i=0; $i < count($this->request->data['Document']['file']); $i++) 
			{ 
			  $extension=strtolower(pathinfo($this->request->data['Document']['file'][$i]['name'],PATHINFO_EXTENSION));
			   $filename = $dirDocument.DS.$this->request->data['Document']['file'][$i]['name'];
	           move_uploaded_file($this->request->data['Document']['file'][$i]['tmp_name'],$filename);
	           $AttachmentArray=array('name'=>$this->request->data['Document']['file'][$i]['name'],
	           	'keyword'=>"",
	           	'url'=>$filename,
	           	'extension'=>$extension,
	           	'document_id'=>$document_id);
	          $this->Attachment->create();
				 $this->Attachment->save($AttachmentArray);
            }

             }else
             {
             	echo "memoir";
             }
			if ($this->Document->save($this->request->data)) {
				$this->Session->setFlash(__('The document has been saved'));
				
				$this->redirect(array('controller'=>'documents','action' => 'index'));
			} else {
				$this->Session->setFlash(__('The document could not be saved. Please, try again.'));
			}
		}else
		{
APP::import('Model','Sector');
$this->Sector = new Sector;
APP::import('Model','Category');
$this->Category = new Category;
APP::import('Model','Customer');
$this->Customer = new Customer;
APP::import('Model','Language');
$this->Language = new Language;
$Sectors = $this->Sector->find('all');
$Categorys = $this->Category->find('all');
$Customers = $this->Customer->find('all');
$Languges = $this->Language->find('all');
$this->set(compact('Sectors', 'Categorys', 'Customers', 'Languges'));
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
		if (!$this->Document->exists($id)) {
			throw new NotFoundException(__('Invalid document'));
		}
		if ($this->request->is('post') || $this->request->is('put')) {
			if ($this->Document->save($this->request->data)) {
				$this->Session->setFlash(__('The document has been saved'));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The document could not be saved. Please, try again.'));
			}
		} else {
			$options = array('conditions' => array('Document.' . $this->Document->primaryKey => $id));
			$this->request->data = $this->Document->find('first', $options);
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
		$this->Document->id = $id;
		if (!$this->Document->exists()) {
			throw new NotFoundException(__('Invalid document'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->Document->delete()) {
			$this->Session->setFlash(__('Document deleted'));
			$this->redirect(array('action' => 'index'));
		}
		$this->Session->setFlash(__('Document was not deleted'));
		$this->redirect(array('action' => 'index'));
	}


	function bytes($a) {
    $unim = array("B","KB","MB","GB","TB","PB");
    $c = 0;
    while ($a>=1024) {
        $c++;
        $a = $a/1024;
    }
    return number_format($a,($c ? 2 : 0),",",".")." ".$unim[$c];
}


}
