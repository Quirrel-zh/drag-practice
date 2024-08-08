<template>
	<div class="multi_choice">
		<label>{{ title }}</label>
		<div class="checkbox">
			<input
				type="checkbox"
				:name="value"
			/>{{ choice[0] }}
			<input
				type="checkbox"
				:name="value"
			/>{{ choice[1] }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'MultiChoice',
	props: {
		title: {
			type: String,
			default: '爱好-多选',
		},
		value: {
			type: String,
			default: 'hobby',
		},
		choice: {
			type: Array,
			default: () => ['篮球', '足球'],
		},
	},
};
</script>

<style scoped lang="scss">
.multi_choice {
	cursor: move;
	display: flex;
	justify-items: center;
	align-items: center;
	border: 1px solid $color-border;
	border-radius: 5px;
	padding: 10px;
	height: 44px;
	//flex: 1;
	margin: 10px 0;

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
		margin-left: 10px;
		margin-right: 5px;
	}
}
</style>
