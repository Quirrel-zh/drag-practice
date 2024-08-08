<template>
	<div class="dropdown">
		<label>{{ title }}</label>
		<select>
			<option
				:value="value"
				v-for="(option, index) in choice"
				:key="index"
			>
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'DropDown',
	props: {
		title: {
			type: String,
			default: '城市-下拉',
		},
		value: {
			type: String,
			default: 'city',
		},
		choice: {
			type: Array,
			default: () => ['北京', '上海', '广州', '深圳'],
		},
	},
};
</script>

<style scoped lang="scss">
.dropdown {
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

	select {
		margin-left: 10px;
		width: 20%;
	}
}
</style>
