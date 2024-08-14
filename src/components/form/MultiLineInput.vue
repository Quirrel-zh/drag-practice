<template>
	<div class="multi_line_input">
		<label>个人简介</label>
		<textarea :name="value"></textarea>
	</div>
</template>

<script>
export default {
	name: 'MultiLineInput',
	props: {
		title: {
			type: String,
		},
		value: {
			type: String,
			default: 'introduction',
		},
	},
};
</script>

<style scoped lang="scss">
.multi_line_input {
	cursor: move;
	display: flex;
	justify-items: center;
	align-items: center;
	border: 1px solid $color-border;
	border-radius: 5px;
	//height: 44px;
	height: 84px;
	padding: 10px;
	//flex: 1;
	margin: 10px 0;

	label {
		cursor: move;
		width: 100px;
		height: 84px;
		//min-height: 44px;
		padding-right: 10px;
		border-right: 1px solid $color-border;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	textarea {
		//margin-top: 10px;
		margin-left: 10px;
		height: 64px;
		width: 100%;
		outline: none;
		border: 1px solid $color-border;
		border-radius: 4px;
	}
}
</style>
