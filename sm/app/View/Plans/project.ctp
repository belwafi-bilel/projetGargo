
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript">

$(document).ready(function() {
$("#delegated").click(function(){
var x=$("#projectID").val();
alert(x)
});
$('.fa-times, .cancel').click(function(){
	$("#popup").parent().hide();
  $("#outiltable").show();
});
$(".save").click(function(){
    var ref="";
$("input[name='rr[]']:checked").each(function() {
           ref+=$(this).val()+"!!";
          });      
var liste=Array($("#Project_Title").val(),
  $("#Project_Description").val(),ref,
  $("#Task_Notify").val(),
  $( "#accompli" ).text());
 $.ajax({
         type: "POST",
         url:"sm/plans/project/"+liste
          }).done(function(result){
            $("#projectID").val(result.split(' ')[0])
          	//$( "#projectTache" ).delay( 1000 ).hide( 400 );
            //$("#projectTache").html(result);   
            $("#delegated").prop('disabled', false); 
            $(".save").prop('disabled', true);
          })
          // $("#outiltable").show();
});
$( "#slider" ).slider({
      range: "max",
      min: 0,
      max: 100,
      value: 10,
      slide: function( event, ui ) {
        $( "#accompli" ).text( ui.value );
      }
    });
$("#delegated").click(function(){
  if($("#user_Group_Id").is(":visible"))
  $("#user_Group_Id").hide();
else
  $("#user_Group_Id").show();

})
$("#delegetedSave").click(function(){
  $("#user_Group_Id").hide();
})
});</script>
 <script>
  $("#headerDelegate").click(function() {
    $( "#user_Group_Id" ).draggable();
       
  });
  </script>
<style type="text/css">



input[type="radio"] {
    background-color: #2b3a41;
   color:#f2f2f2;
    font-family:Arial, sans-serif;
    display:inline-block;
    width:14px;
    height:14px;
    margin:-2px 10px 0 0;
    vertical-align:middle;
    background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -38px top no-repeat;
    cursor:pointer;
}

input[type="radio"]:checked + label span {
    background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -57px top no-repeat;
}


</style>
<input type="hidden" id="projectID" value="<?php echo $IDproject; ?>">
<i class="fa fa-times" aria-hidden="true" style="margin-top: 1px;margin-right: 1px;font-size: large;color: white;"></i>
<div id="popup">
	<div id="dialog-CreateForms"  style="width: auto;min-height: 0px;height: 494.2px;background: #2b3a41;color: white;"scrolltop="0" scrollleft="0">
		<div class="outilTable" style=" margin-top: -8px;margin-right: -8px;margin-left: -8px;">
			<?php echo __("Créer un projet");?></div>
			<input type="hidden" name="frmAction" value="CreateProject">
			<fieldset style="min-width: 0;padding: 4px; border: 0;margin-top: 14px;">
				<div>
					<input type="text" id="Project_Title" value="" class="form-control2" placeholder=<?php echo __("Titre");?>>
				</div>
				<div>
					<textarea id="Project_Description" class="form-control2 input-lg"
           placeholder="<?php echo __('Description');?>"></textarea>
				</div>
			
			  <tbody style="background: white;color: black;">
          </fieldset>
          <legend style="color:white;"><?php echo __("references cell"); ?>:</legend>
          <table style="width:100%" class="table-hover" >
<?php for ($i=2; $i <$coordonners[0]+1 ; $i++) { ?>
<tr>
  <?php for ($j=1; $j <$coordonners[1]+1 ; $j++) {
   $index=($coordonners[1]+1)*$i+$j;?>
  <td>
   <input type="checkbox"  name="rr[]"  value="<?php echo $i.'--'.$j ?>"/>
    <label><?php echo $i.'.'.$j ?></label>
</td>
 <?php }?>
    </tr>
  <?php } ?>

</table>
</fieldset>
        </tbody> 
				<div>
					<label for="Task_Notify"><?php echo __("Aviser les utiliateurs par courriel");?></label>
					<div class="divRightBox">
						<input type="checkbox" id="Task_Notify" id="Task_Notify" value="1" class="text ui-widget-content ui-corner-all">
					</div>
					
				</div>
				<div style="width: 400px;height: 46px;" id="slider1" >
  <em style="color:black"><?php echo __("Accompli:")?><span id="accompli" >10</span> %</em>
<div id="slider" ></div>
</div>
<div>
<button type="button" disabled class="btn btn-primary" id="delegated" style="background-color: #286090;">
          <?php echo __("Delegated to");?>
</button> 
</div>


<div id="user_Group_Id" class="auth-block" 
style="position: absolute;margin-left: 19px;width: 620px;margin-top: -198px; display:none">
<div id="headerDelegate"class="outilTable" style=" margin-top: -8px;margin-right: -8px;margin-left: -8px;">
      <?php echo __("Delegated to");?> </div>
      <div>
<table class="table"style="margin: 0px;padding: 0px;width: 100%;">
<thead>
<tr><th colspan="2"><?php echo __("By"); ?></th><th><?php echo __("View") ?></th><th><?php echo __("Participate") ?></th></tr></thead>
<tbody><tr><td><?php echo __("Users");?></td>
  <td> 
    <select id="user" >
    <?php foreach ($users as $user) { ?>
<option value="<?php echo $user['User']['id']; ?>">
  <?php echo explode('_',$user['User']['username'])[0].' '.explode('_',$user['User']['username'])[1]; ?>
</option>
    <?php }?>
  </select>
</td><td><input type="checkbox" name="R1" value="View"></td>
<td><input type="checkbox" name="R1" value="Participate"></td>
</tr>
<tr>
<td><?php echo __("Group"); ?></td>

<td>
 <select id="groupe" >
    <?php foreach ($Groups as $Group) { ?>
<option value="<?php echo $Group['Group']['id']; ?>">
  <?php echo $Group['Group']['name']; ?>
</option>
    <?php }?>
  </select>
</td>
</td><td><input type="checkbox" name="R1" value="View"></td>
<td><input type="checkbox" name="R1" value="Participate"></td>
</tr>

</tbody>

</table>
    
  </div>
<div>
  
  </div>
<button type="button" class="btn btn-primary" id="delegetedSave" style="background-color: #286090;">
          <?php echo __("Ok");?>
            </button> 
</div>
</td>
 
</div>
<div><div>
				 <button type="button" class="btn btn-primary save" style="background-color: #286090;">
          <?php echo __("SAVE");?>
            </button> 
            <button type="button" class="btn btn-primary cancel"  style="background-color: #286090;"><?php echo __("CANCEL");?>
            </button>
				</fieldset>
		
		</div>
	</div>
