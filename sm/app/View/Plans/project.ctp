  <?php echo $this->Html->css('jquery-te-1.4.0');?>
<?php echo $this->Html->script('jquery-te-1.4.0');?>
<script type="text/javascript">
$('.fa-times,#cancel').click(function(){
 $(this).parent().hide();
  $("#refersh").show();
  $("#outiltable").show();
});
// $("#save").click(function(){
//   $(this).hide();
//   $("#message").find('.jqte_edit_Inputor').text($("#message").find('.jqte_edit_Inputor').text()+$(".link").text())
// })
$(".glyphicon-remove").click(function(){
  $(".link").hide();
  $("#save").show()
  $(this).hide();
})
$("#send").click(function(){
 $(".table-responsive").html($("#InterfaceTache").html())
  $(this).parent().hide();
  $("#outiltable").show();
})
$('.jqte-test').jqte();
  
  // settings of status
  var jqteStatus = true;
  $(".status").click(function()
  { 
    jqteStatus = jqteStatus ? false : true;
    $('.jqte-test').jqte({"status" : jqteStatus})
  });
   $(".jqte_edit_Inputor").focus(function(){  
$(this).parent().find(".jqte_toolbar").show();
});
   $(".jqte_edit_Inputor").focusout(function(){ 
$(this).parent().find(".jqte_toolbar").hide();
});
 
 
  
$("#cancelnew").click(function(){
  $("#trnew").hide()
})
$('.inputCell').dblclick(function(){
  $('input').removeClass('CellSelect');
    $(this).find('input').prop('disabled',false);
  $(this).find('input').addClass('CellSelect');
  $(this).find('input').select();
})
$('.edit_Input').on("change",function(){
  $('input').removeClass('CellSelect');
  $attr=$(this).attr('attr');
  $id=$(this).attr('id');
   $value=$(this).val();
  if($attr=="urgent"  || $attr=="notify_user")
   {
$id=$id.substring(1)
$value=$(this).is(":checked");
   }
 
  $liste=Array($id,$attr,$value);
$.ajax({
         type: "POST",
         url:"sm/plans/setTask/"+$liste
      })
if($attr!='accompli' && $attr!="urgent"  && $attr!="notify_user")
{
$(this).prop('disabled',true);
$(this).removeClass('CellSelect');
}
})

$("input[type=range]").on('input',function(){
 $(this).parent().parent().find('label').text($(this).val());
})

// $(".check").click(function(){
//   if($(this).find("input[type='checkbox']").is(":checked"))
//   {
//    $(this).find('.fa-check-square').show();
//    $(this).find('.fa-square').hide();
//   }else
//   {
//     $(this).find('.fa-check-square').hide();
//    $(this).find('.fa-square').show();
//   }
// })
   
    $("#addNew").click(function(){
   $id=$("#id_project").val();
   $.ajax({
         type: "POST",
         url:"sm/plans/task/"+$id
      }).done(function(result){
        $.ajax({
                type: "POST",
                 url:"sm/plans/project/"+$id
              }).done(function(result){
                $("#example").find('div').css('pointer-events','none');
                $('td').find('i').hide();
                $("#projectTache").show();
                $("#projectTache").html(result);
                $("#outiltable").hide();
              })
          });
    });
    $(".fa-trash").click(function(){
      $id=$(this).attr('id');
      alert($id)
       $.ajax({
         type: "POST",
         url:"sm/plans/deleteTask/"+$id
      });
       $.ajax({
                type: "POST",
                 url:"sm/plans/project/"+$id
              }).done(function(result){
                $("#example").find('div').css('pointer-events','none');
                $('td').find('i').hide();
                $("#projectTache").show();
                $("#projectTache").html(result);
                $("#outiltable").hide();
              })
          });

</script>
<div id="InterfaceTache" class="" style="margin-left:141px;margin-top:53px;width: 700px;display:none;position:fixed;">

  </div>
<div class="auth-block2" >
  <i class="fa fa-times" aria-hidden="true"></i>
<div class="table-responsive" style="background: rgba(255, 255, 255, 0.8);">
<input type="hidden" value="<?php echo $projects[0]['Project']['id']; ?>" id="id_project">
  
  <?php foreach ($projects as $project) {
    
  ?>
  <div class="col-md-12">
  <?php echo $project['Project']['title'];?></b>
  <?php echo $project['Project']['description'];?>
    </div>
    <table class="table table-bordered table-hover table-condensed">
<thead>
<tr>
<th>
 <?php echo __("TITLE");?>
</th>
  <th>
     <?php echo __("DESCRIPTION");?>
</th>
<th>
   <?php echo __("DATE DEBUT");?>
</th>
<th>
   <?php echo __("DATE ÈCHEANCE");?>
</th>
<th>
   <?php echo __("HEUR ESTIMER");?>
</th>
<th>
  <?php echo __("TAUX ESSTIMÉ") ?>
</th>
<th><?php echo __("Urgent");?></th>
<th><?php echo __("PAR Courriel");?></th>
<th>
   <?php echo __("ACCOMPLI (%)");?>
</th>
<th> <?php echo __("Action");?></th>
</tr></thead>
      <?php foreach ($project['taches'] as $taches) {
        ?>
<tbody>
<tr>
<td class="inputCell">
  <input disabled='disabled' value="<?php echo $taches['Tach']['title'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="title">
</td>
<td class="inputCell">
  <input disabled='disabled' value="<?php echo $taches['Tach']['description'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="description">
</td>
<td class="inputCell">
  <input type="date"  disabled='disabled' value="<?php echo $taches['Tach']['date_debut'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="date_debut">
</td>
<td class="inputCell">
  <input type="date"  disabled='disabled' value="<?php echo $taches['Tach']['date_fin'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="date_fin" >
</td>
<td class="inputCell">
  <input disabled='disabled' value="<?php echo $taches['Tach']['heurs_estimee'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="heurs_estimee">
</td>
<td class="inputCell">
  <input type="number" disabled='disabled' value="<?php echo $taches['Tach']['tauxe_estimee'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="tauxe_estimee">
</td>
<td>
      <input type="checkbox" value="" id="U<?php echo $taches['Tach']['id'] ?>"  checked class="form-control2-2 edit_Input" attr="urgent"  style="display:block"/>
     
</td>
<td>

      <input type="checkbox" value="" id="N<?php echo $taches['Tach']['id'] ?>"  checked class="form-control2-2 edit_Input" attr="notify_user" style="display:block"/>
</td>
<td>
  <div class="col-md-10"style="padding: 0px;">
  <input type="range"  value="<?php echo $taches['Tach']['accompli'] ?>" class="form-control2-2 edit_Input" id="<?php echo $taches['Tach']['id'] ?>" attr="accompli">
  </div>
  <label class="col-md-2" style="padding: 0px;">
    <?php echo $taches['Tach']['accompli'] ?>
</label>
</td>
<td>
  <i class="fa fa-trash" aria-hidden="true" id="<?php echo $taches['Tach']['id'] ?>"></i>
  <i class="fa fa-users" aria-hidden="true"></i>
  
</td>
</tr>
</tbody>
 <?php } ?>
</table>
  <?php } ?>
  <div class="add-row-edit_Inputable-table">
    <button class="btn-btn12 addnew"  style="margin-left: -176px;" id="addNew"><?php echo __("TÂCHE (+)")?></button></div>
</div>

<button class="btn1212"style="float: right;width: 200px;" id="cancel">OK</button>
</div>
