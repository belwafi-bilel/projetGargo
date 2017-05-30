
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript">

$(document).ready(function() {

$('.fa-times, .cancel').click(function(){
	$("#popup").parent().hide();
	$("#outiltable").show();
});
$("#save").click(function(){
var liste=Array(
	$("#Task_Title").val(),
	$("#Task_Description").val(),
	$("#Task_Project").val(),
	$("#Task_Start").val(),
	$( "#Task_End" ).val(),
	$( "#heurEstimer" ).val(),
	$( "#TauxEstimee" ).val(),
	$( "#Budget" ).val(),
	$( "#Task_Urgent" ).is(":checked"),
	$("#Task_Notify").is(":checked")
	 );
 $.ajax({
         type: "POST",
         url:"sm/plans/task/"+liste
          }).done(function(result){

          	$( "#projectTache" ).delay( 2200 ).hide( 400 );
            $("#projectTache").html(result);
            
          })
           $("#outiltable").show();
});

$( "#slider" ).slider({
      range: "max",
      min: 0,
      max: 100,
      value: 0,
      slide: function( event, ui ) {
        $( "#accompli" ).text( ui.value );
      }
    });
});</script>
<i class="fa fa-times" aria-hidden="true" style="margin-top: 1px;margin-right: 1px;font-size: large;color: white;"></i>
<div id="popup">
	<div id="dialog-CreateForms"  style="width: auto;min-height: 0px;background: #2b3a41;color: white;"scrolltop="0" scrollleft="0">
		<div class="outilTable" style=" margin-top: -8px;margin-right: -8px;margin-left: -8px;">
			<?php echo __("Créer un Task");?></div>
		
			<fieldset style="min-width: 0;padding: 4px; border: 0;margin-top: 14px;">
				<div>
					<input type="text" name="Task_Title" id="Task_Title" value="" class="form-control with-success-addon" style="width:500px;" placeholder="Titre">
				</div>
				<div>
					<textarea rows="5" cols="20" name="Task_Description" id="Task_Description" class="form-control with-success-addon" style="height:100px; width:500px;" placeholder="Description"></textarea>
				</div>
				<div>
					
					<div class="divRightBox">
						<select name="Task_Project" id="Task_Project" style="padding: 0.4em 1em; margin-bottom:10px;" class="form-control with-success-addon">
							<?php foreach ($projects as $project) { ?>
							<option value="<?php echo $project['Project']['id']?>">
								<?php echo $project['Project']['titre']?></option>
					<?php
 					}?>
							
						</select>
					</div>
				</div>
				<div>
					
					<input type="date" name="Task_Start" id="Task_Start" value="" class="form-control with-success-addon" placeholder="Début" >
				</div>
				<div>
					<input type="date" name="Task_End" id="Task_End" value="" class="form-control with-success-addon" placeholder="Échéance" >
				</div>
				<div class="input-group ng-scope" style="margin-top: 4px;width: 140px;">
					<input type="number" class="form-control with-success-addon" id="heurEstimer" placeholder="<?php echo __("Heur(s) Esstimee(s)") ?>"> 
					</div>
				<div class="input-group ng-scope" style="margin-top: 4px;width: 140px;"><span class="input-group-addon addon-left input-group-addon-success">$</span><input type="number" class="form-control with-success-addon" id="TauxEstimee" placeholder="<?php echo __("Taux Esstimé") ?>"> <span class="input-group-addon addon-right input-group-addon-success">.00</span></div>
				
               <div class="input-group ng-scope" style="margin-top: 4px;width: 140px;"><span class="input-group-addon addon-left input-group-addon-success">$</span><input type="number" class="form-control with-success-addon" id="Budget" placeholder="<?php echo __("Budget") ?>"> <span class="input-group-addon addon-right input-group-addon-success">.00</span></div>
			
					<div class="divRightBox"><?php echo __("Urgent:") ?>
						<input  type="checkbox" name="Task_Urgent" id="Task_Urgent" value="1" class="text ui-widget-content ui-corner-all" placeholder="Urgent">
					</div>
				<div>
				
					<div class="divRightBox"><?php echo  __("Aviser les utiliateurs par courriel:");?>
						<input type="checkbox" name="Task_Notify" id="Task_Notify" value="1" class="text ui-widget-content ui-corner-all">
					</div>
				</div>
			 <button type="button" class="btn btn-primary" id="save" style="background-color: #286090;"><?php echo __("SAVE");?>
            </button> 
            <button type="button" class="btn btn-primary cancel"  style="background-color: #286090;"><?php echo __("CANCEL");?>
            </button>
				</fieldset>
		
		</div>
	</div>

