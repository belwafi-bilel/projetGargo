<div class="permissionAccesses index">
	<h2><?php echo __('Permission Accesses'); ?></h2>
	<table cellpadding="0" cellspacing="0">
	<tr>
			<th><?php echo $this->Paginator->sort('id'); ?></th>
			<th><?php echo $this->Paginator->sort('personal_offers_id'); ?></th>
			<th><?php echo $this->Paginator->sort('task_id'); ?></th>
			<th><?php echo $this->Paginator->sort('permission'); ?></th>
			<th><?php echo $this->Paginator->sort('groupe_id'); ?></th>
			<th><?php echo $this->Paginator->sort('date_debut'); ?></th>
			<th><?php echo $this->Paginator->sort('date_fin'); ?></th>
			<th class="actions"><?php echo __('Actions'); ?></th>
	</tr>
	<?php foreach ($permissionAccesses as $permissionAccess): ?>
	<tr>
		<td><?php echo h($permissionAccess['PermissionAccess']['id']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['personal_offers_id']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['task_id']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['permission']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['groupe_id']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['date_debut']); ?>&nbsp;</td>
		<td><?php echo h($permissionAccess['PermissionAccess']['date_fin']); ?>&nbsp;</td>
		<td class="actions">
			<?php echo $this->Html->link(__('View'), array('action' => 'view', $permissionAccess['PermissionAccess']['id'])); ?>
			<?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $permissionAccess['PermissionAccess']['id'])); ?>
			<?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $permissionAccess['PermissionAccess']['id']), null, __('Are you sure you want to delete # %s?', $permissionAccess['PermissionAccess']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
	</table>
	<p>
	<?php
	echo $this->Paginator->counter(array(
	'format' => __('Page {:page} of {:pages}, showing {:current} records out of {:count} total, starting on record {:start}, ending on {:end}')
	));
	?>	</p>
	<div class="paging">
	<?php
		echo $this->Paginator->prev('< ' . __('previous'), array(), null, array('class' => 'prev disabled'));
		echo $this->Paginator->numbers(array('separator' => ''));
		echo $this->Paginator->next(__('next') . ' >', array(), null, array('class' => 'next disabled'));
	?>
	</div>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('New Permission Access'), array('action' => 'add')); ?></li>
	</ul>
</div>
