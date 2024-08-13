<template>
	<div class="single_choice">
		<label>{{ title }}</label>
		<div class="radio">
			<input
				type="radio"
				:name="value"
			/>{{ choice[0] }}
			<input
				type="radio"
				:name="value"
			/>{{ choice[1] }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'SingleChoice',
	props: {
		title: {
			type: String,
			default: '性别-单选',
		},
		value: {
			type: String,
			default: 'gender',
		},
		choice: {
			type: Array,
			default: () => ['男', '女'],
		},
	},
};
</script>

<style scoped lang="scss">
.single_choice {
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
