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
      	var liste=null;
      	$('td').click(function(){
		liste=$(this).attr('liste');
      	});

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
      });
 
 $("tbody> tr").click(function(){
$("tbody").find('tr').css('border','none');
$('td>div>i').hide();
        $(this).css("border","1px solid #337ab7");
       var id= $(this).attr('id');
      $("#dessous"+id).show();
      $("#dessus"+id).show();
      $("#delete"+id).show();
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
                <td bgcolor=" "> 
                  <!-- <i class="fa fa-plus-circle fa-plus-circle-left " aria-hidden="true"></i>  -->
   <input list="query" style="background-color:none; color:#ffffff;" placeholder='ITEM' class="form-control2 input2" id=""  value=""/>
              </td>
               <!-- <i class="fa fa-plus-circle fa-plus-circle-right" aria-hidden="true"></i> -->
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