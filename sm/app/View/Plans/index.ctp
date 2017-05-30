 <?php 
    echo $this->Html->css('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

    echo $this->Html->css('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');
    echo $this->Html->css('main');
    ?>
    <?php echo $this->Html->css('jquery-te-1.4.0');?>
<?php echo $this->Html->script('jquery-te-1.4.0');?>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js" type="text/javascript"></script>
      <?php echo $this->Html->css('jquery.contextmenu');?>
<?php echo $this->Html->script('jquery.contextmenu');?>
  <?php 
      echo $this->Html->css('evol-colorpicker');
      echo $this->Html->script('evol-colorpicker'); 
  ?>
   <?php
echo $this->Html->script('RowSorter');

     ?>
 <?php 
 echo $this->Html->script('colResizable-1.6');
 ?>
<script type="text/javascript">
function printDiv(maydiv) {
     var printContents = document.getElementById(maydiv).innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
  
     document.body.innerHTML = originalContents;
window.close();
}
$(document).ready(function() {
  setInterval(function(){refresh()}, 500);
function refresh(){
   if($("#refersh").is(':visible'))
  { if($("#historical_plan_id"))
    var id_historcal=$("#historical_plan_id").val()
    alert(id_historcal)
 $.ajax({
  type: "POST",
  url:"sm/plans/detail_plan/"+id_historcal
}).done(function(result) {
     $("#table_id").html(result);
 });
 $("#refersh").hide();
}
}
 var id=$("#selectionPlan").val()
 if(id)
 {var liste=Array(id,0)
   $.ajax({
         type: "POST",
         url:"sm/plans/getPlanning/"+liste
      }).done(function(result){
        $("#PlanShow").html(result)
         refresh();
      })
    }
$("#selectionPlan").on('change',function(){
 var id=$(this).val()
 var liste= id+","+0;
   $.ajax({
         type: "POST",
         url:"sm/plans/getPlanning/"+liste
      }).done(function(result){
        $("#PlanShow").html(result)
       
         refresh();
      })
})
$("#addplan").click(function(){
  $("#newPlan").show();
  $(this).hide();
  $("#PlanShow").hide();
  $("#selectionPlan").hide();
   $("#savePLan").show();
    $("#cancelNewPlan").show();
});
$("#cancelNewPlan").click(function(){
  $(this).hide();
  $("#PlanShow").show();
  $("#addplan").show();
  $("#savePLan").hide();
  $("#selectionPlan").show();
  $("#newPlan").hide();
});
$("#savePLan").click(function(){
  $(this).hide();
  $("#PlanShow").show();
  $("#addplan").show();
  $("#cancelNewPlan").hide();
  $("#selectionPlan").show();
  $("#newPlan").hide();
  var titre=$("#Titre").val();
  var Adresse=$("#Adresse").val();
  var logo=$("#userImage").val();

  var attrOption=titre+"!!"+Adresse+"!!";
  $("#planAtrribute").find('.planAtrribute').each(function(il,el){
attrOption+=","+$(this).val();
$(this).parent().remove();
$(this).remove();
  });
  $.ajax({
         type: "POST",
         url:"sm/plans/newPlan/"+attrOption
      }) 
})
$("#plusAttributePlan").click(function(){
$("#planAtrribute").append("<div><input type='text' class='inputplan planAtrribute'></div>")
})
});
 refresh();
</script>
<style type="text/css">
.header{
  width: 100%;
  height: 40px;
  background-color:white;
  
}
.body{
margin-top: 2px;
}
.logoPlan
{
    padding: 10px;
    width: 142px;
    float: left;
     background-color: rgba(255,255,255,1);
     height: 155px;
}
.item{
  height: 130px;
  
}
.item>div
{
    margin-left: 142px;
    padding: 0px;
    background-color:white;
    height: 49px;
    margin-top: 4px;
   
  
}.item>div>input
{    width: 98%;
    height: 100%;
    padding: 11px;
    text-transform: uppercase;
    border: 3px solid;
    border-color: #f2f2f2;
    border-top: none;
    border-left: none;
    border-right: none;
    
}
.contact{
  padding-bottom: 20px;

}

</style>
  


<div style="display:nones "class="refreshdiv"  id="refersh">
  <div>
    <?php echo $this->Html->image("LoaderIcon.gif");?>
</div>
</div>
<div style="display:none "class="notificationdiv"  id="notification">
  <div>
</div>
</div>
<div class="header">

<div style="margin-top: -44px;padding: 3px;"> 
<button type="button" id="addplan"class="btn btn-primary"style="float:left;">
  <?php echo __("Plans (+)");?></button>
<select id="selectionPlan"style="float: right; color:white;height: 34px;background: #286090;min-width: 200px;">
  
<?php foreach ($plans as $plan) { ?>
<option value="<?php echo $plan['Plan']['id'] ?>">
<?php echo  $plan['Plan']['title'];?>
</option>
  <?php }?>
</select>
</div>
   <i class="glyphicon glyphicon-eye-close open-close col-md-1 btn1212" aria-hidden="true" ></i>
</div>
<div class="body" id="newPlan" style="display:none;">
  <button type="button" class="btn btn-primary"style="background-color: #286090;margin-right: 717px;margin-top: -40px;" id="savePLan">
    <?php echo __("Save");?>
</button>
 <button type="button" class="btn btn-primary"style="background-color: #286090;margin-right: 617px;margin-top: -40px;" id="cancelNewPlan">
    <?php echo __("Cancel");?>
</button>
  <div class="logoPlan">
    <div style="border-style: solid;border-color: #fbf9f9;padding: 6px;">
<label class=""style=" width: 90px;height: 90px;">
  <img src="./sm/img/plans/vide.gif"style=" width: 100px;height: 100px;" id="Logo">
  <input type="file" style="display:none" id="userImage">
</label> 
       
      </div>
       </div>
      <div class="item" id="planAtrribute">
         <div >
             <input type="text" class="inputplan" id="Titre" value="" placeholder="Titre" >
         </div>
          <div>
            <input type="text" class="inputplan" value="" id="Adresse" placeholder="Addresse">
         </div>
          
      </div>
  <button type="button" id="plusAttributePlan"class="btn btn-primary"style="float: left;margin-left: -39px;margin-top: 27px;
"><?php echo __("+");?>
  </button>  
</div>        
<div id="PlanShow">

</div>
 <datalist id="query">
  <?php foreach ($types as $type) {
	?>
<option value="<?php echo $type['TypeComponent']['description'] ?>-<?php echo ''.$type['TypeComponent']['id']; ?>">
	</option>
<?php
} ?>
   </datalist>
   <div id="listegroupe"></div>
  



  





   