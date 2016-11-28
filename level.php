<?php
	//exec("gpio read 1", $status);
	$status = rand(1,100);
?>

<div class="form-group">
	<label for="level_prgrs" class="control-label">Percent:</label>

        <div id="level_prgrs" class="progress">
        	<div class="progress-bar progress-bar-success progress-bar-striped" 
			role="progressbar" aria-valuenow="<?php print_r($status); ?>" aria-valuemin="0" $
                	style="width: <?php print_r($status); ?>%;">
                        <span class="sr-only"><?php print_r($status); ?>%</span>
                </div>
        </div>
</div>
