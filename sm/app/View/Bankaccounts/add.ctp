<div class="bankaccounts form">
<?php echo $this->Form->create('Bankaccount'); ?>
	<fieldset>
		<legend><?php echo __('Add Bankaccount'); ?></legend>
	<?php
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Bankaccounts'), array('action' => 'index')); ?></li>
	</ul>
</div>
