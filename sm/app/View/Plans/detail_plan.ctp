 <script>
  $('.jqte-test').jqte();
  
  // settings of status
  var jqteStatus = true;
  $(".status").click(function()
  { 
    jqteStatus = jqteStatus ? false : true;
    $('.jqte-test').jqte({"status" : jqteStatus})
  });
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\//g,'a9a').replace(/\:/g,'..');
}

</script>

<script>
 setInterval(function(){refresh()}, 500);
function refresh(){
   if($("#refersh").is(':visible'))
  { if($("#historical_plan_id"))
    var id_historcal=$("#historical_plan_id").val()
     $.ajax({
  type: "POST",
  url:"sm/plans/detail_plan/"+id_historcal
}).done(function(result) {
     $("#table_id").html(result);
 });
 $("#refersh").hide();
}
}
      $(function() {
        $('td').contextPopup({
          items: [
            {label:'Insérer des lignes au-dessus',     icon:'sm/img/icon/top.png', action:function() {
                $.ajax({
                 type: "POST",
                url:"sm/plans/addLine/"+liste
                })
                $("#refersh").show();
             } },
            {label:'Insérer des ligne en dessous', icon:'sm/img/icon/bottom.png',action:function() {  
            	var tab=liste.split(',');
            	liste= Array(tab[0],Number(tab[1])+1,tab[2]);
            	
            	 $.ajax({
                 type: "POST",
                url:"sm/plans/addLine/"+liste
                })
                $("#refersh").show();
               } },
            {label:'Insérer des colonnes a gauche',     icon:'sm/img/icon/right.png', action:function() {
            	var tab=liste.split(',');
            	liste= Array(tab[0],Number(tab[1])+1,tab[2],$("#historical_plan_id").val());
            
            	 $.ajax({
                 type: "POST",
                url:"sm/plans/addRow/"+liste
                })
                $("#refersh").show();
             
                } }, 
            {label:'Insérer des colonnes a droite',     icon:'sm/img/icon/left.png', action:function() { 

                  var tab=liste.split(',');
              liste= Array(tab[0],Number(tab[1]),Number(tab[2])+1,$("#historical_plan_id").val());
              

               $.ajax({
                 type: "POST",
                url:"sm/plans/addRow/"+liste
                })
                $("#refersh").show();

             } },
            null,
             {label:'Fusionner les cellules',     icon:'sm/img/icon/fusionner.png', action:function() {  } },
              {label:'Fractionner les cellules',     icon:'sm/img/icon/fractionner.png', action:function() { 
              	 } },
              null,
               {label:'Supprimer les lignes',     icon:'sm/img/icon/deleteline.png', action:function() {
               	var tab=liste.split(',');
            	liste= Array($("#historical_plan_id").val(),tab[2]);
         
                	$.ajax({
                 type: "POST",
                url:"sm/plans/deleteLine/"+liste
                })
                $("#refersh").show();	


               } },
                {label:'Supprimer les colonnes',     icon:'sm/img/icon/deleterow.png', action:function() {
                	var tab=liste.split(',');
            	liste= Array($("#historical_plan_id").val(),tab[2]);
            	
                	$.ajax({
                 type: "POST",
                url:"sm/plans/deleteRow/"+liste
                })
                $("#refersh").show();	

                } }
             ]
        });
  $(".jqte_editor").focus(function(){	
$(this).parent().find(".jqte_toolbar").show();
$("tbody,thead").find('tr,td').css('border','none');
$('td').find('i').hide();
})
$(".jqte_editor").focusout(function(){
var content=($(this).html()).trim();
	$(this).parent().find(".jqte_toolbar").hide();  
listes=liste+','+htmlEntities(content);
		      $.ajax({
                 type: "POST",
                url:"sm/plans/saveCelle/"+listes
                })
                $("#refersh").show();	 
})
      
 var liste=null;
 var select=null;
 $("tbody> tr>td").click(function(){
    liste=$(this).attr('liste');
    select="ok"
$("tbody,thead").find('tr,td').css('border','none');
$('td').find('i').hide();
if($(".jqte_toolbar").is(":hidden")){
        $(this).parent().css("border","1px solid #337ab7");
       var id= $(this).parent().attr('id');
      $("#dessous"+id).show();
      $("#dessus"+id).show();
      $("#delete"+id).show();}
   $("table").on('mouseleave', function() {
     $("#dessous"+id).delay(100).fadeOut();
      $("#dessus"+id).delay(100).fadeOut();
      $("#delete"+id).delay(100).fadeOut();
      $("tbody").find('tr,td').css('border', 'none');
      
   });
    });
$("tbody>tr").on('mouseenter',function(){
  if(select==null)
  {
  $("tbody,thead").find('tr,td').css('border','none');
  $('td').find('i').hide();
  }
  $(this).css('border','1px dashed #337ab7');
  $('td').removeClass('CellSelect');
  select=null
})

var selectRow=null;
$('.typecomposante').click(function(e){
  selectRow='ok';
  $('td').find('i').hide();
 $("tbody,thead").find('tr,td').css('border','none');
  
  $(this).find('i').show();
  var indice = Number($(this).attr('attr'))+1;
var styles = {
      borderLeft : "1px solid #337ab7",
      borderRight: "1px solid #337ab7"
    };
$("tbody,thead").find('td:nth-child('+indice+')').css(styles);
  });

$('.typecomposante').on('mouseenter',function(e){
  if(selectRow==null)
  {
    $("tbody,thead").find('tr,td').css('border','none');
  $('td').find('i').hide();
  };
   var indice = Number($(this).attr('attr'))+1;
var styles = {
      borderLeft : "1px dashed #337ab7",
      borderRight: "1px dashed #337ab7"
    };
$("tbody,thead").find('td:nth-child('+indice+')').css(styles);
selectRow=null;
});


 $("tbody>tr>td").dblclick(function(){
  $("tbody,thead").find('tr,td').css('border','none');
  $('td').find('i').hide();
$('td').removeClass('CellSelect');
 $(this).addClass('CellSelect');


});
//})  $("tbody,thead").find('td').css('border','none');
// var indice = Number($(this).attr('attr'))+1;
// $("tbody,thead").find('td:nth-child('+indice+')').css(style);
// })
// $('.typecomposante').on('mouseleave', function() {
//   $("tbody").find('td').css('border','none');
// });





 /*******************************************************/
      $(".fa-times-circle").click(function(){
          var tab=liste.split(',');
                    liste= Array($("#historical_plan_id").val(),tab[2]);
               
                        $.ajax({
                       type: "POST",
                      url:"sm/plans/deleteLine/"+liste
                      })
                      $("#refersh").show(); 
      })
      $(".fa-plus-circle2").click(function(){
          $.ajax({
                 type: "POST",
                url:"sm/plans/addLine/"+liste
                })
                $("#refersh").show();
      })
      $(".fa-plus-circle1").click(function(){
        var tab=liste.split(',');
              liste= Array(tab[0],Number(tab[1])+1,tab[2]);
              
               $.ajax({
                 type: "POST",
                url:"sm/plans/addLine/"+liste
                })
                $("#refersh").show();
      })
/****************************************************/
$(".typecomposante").dblclick(function(){
  $(".input2").prop('disabled',true);
  $(this).find('input').prop('disabled',false);
});

$(".fa-plus-circle-right").click(function(){
              liste= Array($(this).parent('td').attr('attr'),$("#historical_plan_id").val());
               $.ajax({
                 type: "POST",
                url:"sm/plans/addRow/"+liste
                })
                $("#refersh").show();
             
})
$(".fa-plus-circle-left").click(function(){
              liste= Array(Number($(this).parent('td').attr('attr')-1),$("#historical_plan_id").val());
               $.ajax({
                 type: "POST",
                url:"sm/plans/addRow/"+liste
                })
                $("#refersh").show();
             
})

});
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\//g,'&47;').replace(/\:/g,'&58;').replace(/,/g,'&44;').replace(/\[/g,'&91;').replace(/\]/g,'&93;');
}
    </script>
<div style="display:none"class="refreshdiv"  id="refersh">
  <div>
    <?php echo $this->Html->image("LoaderIcon.gif");?>
</div>
</div>
<table id="example" class="table-border" style="width:100%;color: white;">
         
         <thead>
            
            <tr id="typecomposante">
              
             <?php for ($i=0; $i <$row ; $i++) { 
               ?>
                <td bgcolor=" " class="typecomposante" attr='<?php echo $i;?>'> 
                    <i class="fa fa-plus-circle fa-plus-circle-left " aria-hidden="true"></i>
   <input list="query"  placeholder='ITEM' class="form-control2 input2" id=""  value="" disabled="disabled"/>
                    <i class="fa fa-plus-circle fa-plus-circle-right" aria-hidden="true"></i> 
              </td>
           
               <?php }?>   
            </tr>
        </thead>
        <tbody>
        	<?php foreach ($axes as $axe) 
        	{ ?>
              <tr class="plusLines">
                  <td colspan="<?php echo $row; ?>" >
                     <div><i class="fa fa-plus-circle fa-plus-circle2" id="dessus<?php echo $axe['Axis']['id'];?>A"   aria-hidden="true"></i>
                  <i class="fa fa fa-times-circle fa-times-circle " id="delete<?php echo $axe['Axis']['id'];?>A" aria-hidden="true"></i>
                </div>
                 </td>
               </tr>
                	        	<tr class="plusLines" id="<?php echo $axe['Axis']['id'];?>A">
                    				<td colspan="<?php echo $row; ?>" liste="<?php echo $axe['Axis']['id'].',1,1'; ?>">
                    					<div class="jqte-test">
                    						<?php echo $axe['Axis']['title'];  ?>
                    				    </div>
                    				 </td>
                    				</tr>
                <tr class="plusLines">
                  <td colspan="<?php echo $row; ?>" >
                   <div> <i class="fa fa-plus-circle fa-plus-circle1" id="dessous<?php echo $axe['Axis']['id'];?>A"aria-hidden="true"></i></div>
                   </td>
                 </tr>
         
				<?php for($i=1;$i<=$axe['Axis']['line'];$i++)
					{ ?>
            <tr class="plusLines">
            <td colspan="<?php echo $row; ?>" >
            <div>
            <i class="fa fa-plus-circle fa-plus-circle2" id="dessus<?php echo $axe['Axis']['id'].'-'.$i;?>L" aria-hidden="true"></i>
            <i class="fa fa fa-times-circle fa-times-circle " id="delete<?php echo $axe['Axis']['id'].'-'.$i;?>L" aria-hidden="true"></i>
           <div>
           </td>
         </tr>
					<tr id="<?php echo $axe['Axis']['id'].'-'.$i;?>L">

						<?php for($j=1;$j<=$axe['Axis']['row'];$j++)
							{ 
							foreach ($axe['detail_planning'] as $detail_planning) 
								{ 
									if(($detail_planning['DetailPlan']['line']==$i)&&
										($detail_planning['DetailPlan']['row']==$j)
									   ){
										?>
										<td class="context-menu-one" 
										liste="<?php echo $axe['Axis']['id'].','.$i.','.$j ?>">
                         
                       
                    <div class="composantVertical" style="resize: both;">

											<div class="jqte-test" >
										    <?php
										    $y= html_entity_decode($detail_planning['DetailPlan']['content'], ENT_COMPAT | ENT_HTML5,'utf-8');
										     echo htmlspecialchars_decode($y); 
										     if($detail_planning['DetailPlan']['budgets']['total'])	
												{ ?>
												<button class="btnlien">BUDGET [<?php echo $detail_planning['DetailPlan']['budgets']['total'];?>]</button>
												<?php }
												if(count($detail_planning['DetailPlan']['projects']))
													for($c=0;$c<count($detail_planning['DetailPlan']['projects']);$c++)
														{ ?>
															<button class="btnlien">Project [<?php echo $detail_planning['DetailPlan']['projects'][$c]['Project']['description'];?>]</button>
														<?php }
													?>
											</div>
                    </div>
                    
									    </td>

										<?php
									    }
								?>
							<?php } ?>			
					  <?php }?>
					</tr>
				  <tr class="plusLines"><td colspan="<?php echo $row; ?>" >
            <div style="display:nones">
            <i class="fa fa-plus-circle fa-plus-circle1" id="dessous<?php echo $axe['Axis']['id'].'-'.$i;?>L" aria-hidden="true"></i>
           
           <div></td></tr>
			  <?php } ?>
      <?php } ?>
        </tbody>
</table>