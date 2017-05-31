

<script>
  $('.jqte-test').jqte();
  
  // settings of status
  var jqteStatus = true;
  $(".status").click(function()
  { 
    jqteStatus = jqteStatus ? false : true;
    $('.jqte-test').jqte({"status" : jqteStatus})
  });
var color;
 $('.cp2').colorpicker({
  }).on('change.color', function(evt, color){
         colors=$(this).val();
       colors=colors.substring(1);
          $("#example").css('background-color',color);
      var coordonners=ligne+","+colone;
          var liste=Array("0,0",colors,coordonners);
         $.ajax({
         type: "POST",
         url:"sm/plans/colors/"+liste
      })
         $("#refersh").show();
    })
    .on('mouseover.color', function(evt, color){
            if(color){
                $("#example").css('background-color',color);
            }
    });

  $(".open-close").click(function(){
    if($(".HIDE").is(':visible'))
  {
   
    $(".HIDE").hide();
    $(".preview").show(); 
    $("#body").hide()
        $("#vision").hide();
  }else
  {
    $(".HIDE").show();
    $(".preview").hide();
      $("#body").show() 
    $("#vision").show();
        
  }
  })
$(".plusLine").mouseover(function(){
  $(this).find('div').show();
})
$(".plusLine").mouseout(function(){
  $(this).find('div').hide();
})
$(".fa-reply").click(function(){
 var id=$("#selectionPlan").val();
var position=Number($("#position").val())+1;
 var liste= id+","+position;
   $.ajax({
         type: "POST",
         url:"sm/plans/getPlanning/"+liste
      }).done(function(result){
        $("#PlanShow").html(result)
       
         refresh();
      })
})

$(".fa-share").click(function(){
 var id=$("#selectionPlan").val();
var position=Number($("#position").val())-1;
 var liste= id+","+position;
   $.ajax({
         type: "POST",
         url:"sm/plans/getPlanning/"+liste
      }).done(function(result){
        $("#PlanShow").html(result)
       
         refresh();
      })
})


</script>
  
<input type="hidden" value="<?php echo  $id;?>" id="historical_plan_id">
<input type ="hidden" value="<?php echo $his_id ?>" id="position">
<div id="projectTache" class="auth-block" style="position: absolute;margin-left: 241px;width:700px; display:none">
  </div>
<div class="body" id="body">
  <div class="logoPlan">
    <div style="border-style: solid;border-color: #fbf9f9;padding: 6px;">
      <label>
        <img id="output" src="./sm/img/plans/vide.gif" style=" width: 100px;height: 100px;" for="inputupload"/>
         <input type="file" accept="image/*" id="inputupload"onchange="loadFile(event)" style="display:none" >
         </label>
      </div>
  </div>
      <div class="item">
         <textarea>bilel</textarea>
     
      </div>
</div>
<input type="hidden" value="" id="coordonners">
<input type="hidden" value="<?php if($plans) echo $plans['Plan']['id']; ?>" id="id_plans"> 
  <div class=" divPlanTable">
    <div class="outilTable" >
      <div id="outil" style="display:none">
      </div>
  <div id="outiltable">
   <div class="col-md-4">
   </div> 
<div class="col-md-8" style="padding: 0px;margin-top:2px">
   <i class="col-md-2"></i>
  <i class="fa fa-reply col-md-2 btn1212" aria-hidden="true" id="reply" detailPlan=""><?php echo __(" UNDO");?></i>
  <i class="fa fa-share col-md-2 btn1212" aria-hidden="true" id="share" ><?php echo __(" REDO");?></i>
  <i class="fa fa-floppy-o  col-md-2 btn1212" aria-hidden="true" id="share" ><?php echo __(" Save");?></i>
  <i class="fa fa-trash col-md-2 btn1212 " style="background: red;" aria-hidden="true" id="deletePlan" attr="<?php echo $plans['Plan']['id'] ?>" ><?php echo __("  DELETE");?></i>
  <i class="btn1212 col-md-2 fa fa-share-alt share"><?php echo __(" SHARE");?></i>
</div>
  
</div>
  </div>

<div id="table_id">
  <?php include("detail_plan.ctp"); ?>
</div>
</div>
<div style="background: white;float: right;margin-top: 7px;width: 100%;"> 
<button type="button" class="btn-btn" id="addproject"><?php echo __("PROJET (+)");?></button>
<button type="button" class="btn-btn" id="addTask" ><?php echo __("TÂCHE (+)");?></button>
</div>
<div style="background: white;float: right;margin-top: 7px;width: 100%;"> 

 <div class="item" id="vision" >
<?php 
            foreach ($visionplans as $visionplan){
              ?>
 <i class="fa fa-trash deleteoption" attr="option<?php echo $visionplan['VisionPlan']['id']?>" aria-hidden="true" style="float: right;color: #2389c6;font-size: large;margin-top: 15px;"></i>
        <div id="option<?php echo $visionplan['VisionPlan']['id']?>">
      
            <input type="text"  class="inputplan" value="" placeholder="
            <?php echo $visionplan['VisionPlan']['description']?> ">
        </div>
             <?php } ?>  
             <div>
  <input type="text" value=""style="border: none;width: 50%;height: 100%;padding: 11px;text-transform: uppercase;">
<button type="button"  class="btn btn-primary"style="
    margin-top: 5px;"><?php echo __("+");?>
</button>
</div>
<div style="background: white;float: right;margin-top: 7px;width: 100%;"> 
&nbsp;&nbsp;&nbsp;<?php echo __("");?>
<button type="button" class="btn btn-primary recording"style="
    background-color: #286090;"><?php echo __("SAUVEGARDER");?>
</button>
</button>
</div>

</div>
</div>

