  
   <?php
echo $this->Html->script('RowSorter');
 echo $this->Html->script('colResizable-1.6');
     ?>


<style>
table {width: 400px; font-size: 14px; font-family: tahoma, arial, sans-serif;}
table thead th {background-color: #ccc; padding: 5px 8px;}
table td {background-color: #ddd; padding: 5px 8px;}

table.sorting-table {cursor: move;}
table tr.sorting-row td {background-color: #8b8;}
table td.sorter {background-color: #f80; width: 10px; cursor: move;}
</style>

<table attr-sample="thetable" id="exemple">
 
    <tbody>
        <tr>
            <td></td>
            <td>Row 1</td>
            <td>Sample Content 1</td>
            <td>Sample Content 1</td>
        </tr>
        <tr>
            <td class="sorter"></td>
            <td>Row 2</td>
            <td>Sample Content 2</td>
            <td>Sample Content 2</td>
        </tr>
        <tr>
            <td class="sorter"></td>
            <td>Row 3</td>
            <td>Sample Content 3</td>
            <td>Sample Content 3</td>
        </tr>
        <tr>
            <td class="sorter"></td>
            <td>Row 4</td>
            <td>Sample Content 4</td>
            <td>Sample Content 4</td>
        </tr>
        <tr>
            <td class="sorter"></td>
            <td>Row 5</td>
            <td>Sample Content 5</td>
            <td>Sample Content 5</td>
        </tr>
    </tbody>
</table>
<script type="text/javascript">
 $("#exemple").colResizable({
      liveDrag:true, 
      gripInnerHtml:"<div class='grip'></div>", 
      draggingClass:"dragging", 
            resizeMode:'fit'
        });
RowSorter('table[attr-sample=thetable]', {
    handler: 'td.sorter',
    stickFirstRow : true,
    stickLastRow  : false,
    onDragStart: function(tbody, row, index)
    {
       
    },
    onDrop: function(tbody, row, new_index, old_index)
    {
      
    }
});
</script>

