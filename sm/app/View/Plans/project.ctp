  <?php echo $this->Html->css('jquery-te-1.4.0');?>
<?php echo $this->Html->script('jquery-te-1.4.0');?>
<script type="text/javascript">
$('.fa-times').click(function(){
 $(this).parent().hide();
  $("#refersh").show();
  $("#outiltable").show();
});
$("#save").click(function(){
  $(this).hide();
  $("#message").find('.jqte_editor').text($("#message").find('.jqte_editor').text()+$(".link").text())
})
$(".glyphicon-remove").click(function(){
  $(".link").hide();
  $("#save").show()
  $(this).hide();
})
$("#send").click(function(){
$("#refersh").show();
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
   $(".jqte_editor").focus(function(){  
$(this).parent().find(".jqte_toolbar").show();
});
   $(".jqte_editor").focusout(function(){ 
$(this).parent().find(".jqte_toolbar").hide();
});
</script>
<div class="auth-block2" >
  <i class="fa fa-times" aria-hidden="true"></i>
<div class="table-responsive" style="background: rgba(255, 255, 255, 0.8);">

  
  <?php foreach ($projects as $project) {
    
  ?>
  <div class="col-md-12">
    <b><?php echo $project['Project']['title'];?></b>
    :
     <?php echo $project['Project']['description'];?>
    </div>
      <table class="table">
<thead>
<tr>
<th>
  TITLE
</th>
  <th>
    DESCRIPTION
</th>
<th>
  DATE DEBUT
</th>
<th>
  DATE ÈCHEANCE
</th>
<th>
  HEUR ESTIMER
</th>
<th>
  ACCOMPLI
</th>
</tr></thead>
      <?php foreach ($project['taches'] as $taches) {
        ?>
<tbody>
<tr>
<td><?php echo $taches['Tach']['title'] ?></td>
<td><?php echo $taches['Tach']['description'] ?></td>
<td><?php echo $taches['Tach']['date_debut'] ?></td>
<td><?php echo $taches['Tach']['date_fin'] ?></td>
<td><?php echo $taches['Tach']['heurs_estimee'] ?></td>
<td><?php echo $taches['Tach']['accompli'] ?>%</td>
</tr>
</tbody>


        <?php 
      }?>
      </table>
  <?php } ?>
</div>
<button class="btn1212"style="float: right;width: 200px;" id="send">OK</button>
</div>
