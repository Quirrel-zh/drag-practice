<template>
	<div class="horizontal_layout">
		<div class="single_line_input">
			<label>{{ title }}</label>
			<input
				type="text"
				:value="value"
				@input="$emit('input', $event.target.value)"
				:placeholder="place"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SingleInput',
	props: {
		title: {
			type: String,
			default: '用户名',
		},
		value: {
			type: String,
			default: '',
		},
		place: {
			type: String,
			default: '请输入用户名',
		},
	},
};
</script>

<style scoped lang="scss">
.single_line_input {
	cursor: move;
	display: flex;
	justify-items: center;
	align-items: center;
	border: 1px solid $color-border;
	border-radius: 5px;
	padding: 10px;
	height: 44px;
	flex: 1;
	margin-right: 10px;

	label {
		cursor: move;
		width: 100px;
		min-height: 44px;
		//padding-right: 10px;
		border-right: 1px solid $color-border;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		height: 24px;
		width: 100%;
		margin-left: 10px;
		border: 1px solid $color-border;
		border-radius: 2px;
		outline: none;
		//border-color: $color-border;
	}
}
</style>
