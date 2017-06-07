

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
$(".lock").click(function(){
        if($(".fa-lock").is(":visible")){
          $(".fa-lock").hide()
          $(".fa-unlock-alt").show();
          $(".btnTachProject").hide()
         
        }else{
          $(".fa-lock").show()
          $(".fa-unlock-alt").hide();
          $(".btnTachProject").show();
        
        }
      })

</script>
  
<input type="text" value="<?php echo  $id;?>" id="plan_id">
<input type ="text" value="<?php echo $id_hisorical ?>" id="historical_plan_id">
<input type ="text" value="<?php echo $his_id ?>" id="position">
<div id="projectTache" class="auth-block" style="position: absolute;margin-left: 241px;width:700px; display:none">
  </div>
<div class="body margin-top-2" id="body">
  <div class="logoPlan">
    <div style="border-style: solid;border-color: #fbf9f9;padding: 6px;">
      <label>
        <img id="output" src="./sm/img/plans/vide.gif" style=" width: 100px;height: 100px;" for="inputupload"/>
         
         </label>
      </div>
  </div>
      <div class="item">
         <div class="composantVertical" style="resize: both;max-height: 150px">
                      <div class="jqte-test"  >
                        TITLE
                      </div>
                    </div>
     
      </div>
</div>
<input type="hidden" value="" id="coordonners">
<input type="hidden" value="<?php if($plans) echo $plans['Plan']['id']; ?>" id="id_plans"> 
  <div class=" divPlanTable">
    <div class="outilTable" >
      <div id="outil" style="display:none">
      </div>
  <div id="outiltable">
   <div class="col-md-3" style="padding: 0px;margin-top:2px;">
          <i class="col-md-5 btn1212   left">
             <span><?php echo __("NORMAL  ");?></span>
          <i class="glyphicon glyphicon-triangle-bottom margin-top-2" aria-hidden="true" >
          </i>
          </i>
    <div class="col-md-5" style="padding: 0px;">
       <i class="glyphicon glyphicon-text-size col-md-6 btn1212 ">
      <i class="glyphicon glyphicon-triangle-bottom margin-top-2 margin-left--10" aria-hidden="true" >
        </i>
      </i>
        <i class="glyphicon glyphicon-text-color col-md-6 btn1212 ">
      <i class="glyphicon glyphicon-triangle-bottom margin-top-2 margin-left--12" aria-hidden="true">
        </i>
      </i>
 </div>
    <i class="col-md-2 glyphicon glyphicon-bold btn1212 " aria-hidden="true"></i>
   </div> 

<div class="col-md-9" style="padding: 0px;margin-top:2px">
   <i class="col-md-1 glyphicon glyphicon-italic btn1212  " aria-hidden="true"></i>
  <i class="col-md-1 fa fa-underline btn1212 " aria-hidden="true"></i>
  <i class="fa fa-reply col-md-2 btn1212 " aria-hidden="true" id="reply" detailPlan=""><?php echo __(" UNDO");?></i>
  <i class="fa fa-share col-md-2 btn1212 " aria-hidden="true" id="share" ><?php echo __(" REDO");?></i>
  <i class="fa fa-floppy-o  col-md-2 btn1212" aria-hidden="true" id="share" ><?php echo __(" SAVE");?></i>
  <i class="btn1212 col-md-2 fa fa-share-alt share"><?php echo __(" SHARE");?></i>

  <i class="fa fa-lock col-md-1 btn1212 lock " style="display:none" aria-hidden="true" id="deletePlan" attr="<?php echo $plans['Plan']['id'] ?>" ></i>
<i class="fa fa-unlock-alt col-md-1 btn1212 lock "  aria-hidden="true" id="deletePlan" attr="<?php echo $plans['Plan']['id'] ?>" ></i>
  <i class="fa fa-trash col-md-1 btn1212 " style="background: red;" aria-hidden="true" id="deletePlan" attr="<?php echo $plans['Plan']['id'] ?>" ></i>
   
</div>
  
</div>
  </div>

<div id="table_id">
  <?php include("detail_plan.ctp"); ?>
</div>
</div>
<div class="barre_Tache_projet btnTachProject" style="display:none;"> 
<button type="button" class="btn-btn" id="addproject"><?php echo __("PROJET (+)");?></button>
<button type="button" class="btn-btn" id="addTask" ><?php echo __("TÂCHE (+)");?></button>
</div>
<div class="barre_Tache_projet"> 

 <div class="row">
  <div class="col-xs-12 col-md-80 white height-33 padding-top-5">
 <sapn> <?php echo __("Ajouter une ligne de texte"); ?>
</div>
</div>
</div>

