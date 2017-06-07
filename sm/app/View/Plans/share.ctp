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
	<button class="btn1212 col-md-4" >DOWNLOAD</button>
<button class="btn1212  col-md-4" style="background:#0000ff;" >SHARE</button>
<button class="btn1212 col-md-4" >EMBED</button>
<form action="." method="POST">
<div class="col-md-10 contact" >
<input  name="email" class="form-control" placeholder="<?php echo ('Email');?>">
</div>
<div class="col-md-10 contact" >
<input  name="name" class="form-control " placeholder="<?php echo ('name');?>">
</div>
<div class="composantVertical col-md-10" id="message" style="resize: both;background: white;">
<div class=" jqte-test">

 <?php echo __("Message...");?>
</div>
</div>
</form>	
<div class="col-md-12 link qte-test"  style="display:none; color:#0000ff">
	<div class="col-md-3">SHARED WITH</div>
	<div class="col-md-7"><?php echo $link; ?></div>
	<div class="col-md-2"><i class="glyphicon glyphicon-remove"></i></div>
</div>
<button class="btn1212"style="width: 200px;" id="save">CREATE LINK</button>
</div>
<button class="btn1212"style="float: right;width: 200px;" id="send">SEND</button>
</div>