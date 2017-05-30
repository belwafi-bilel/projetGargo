<div class="axes form">
<?php echo $this->Form->create('Axis'); ?>
	<fieldset>
		<legend><?php echo __('Add Axis'); ?></legend>
	<?php
		echo $this->Form->input('titre');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Axes'), array('action' => 'index')); ?></li>
	</ul>
</div>
