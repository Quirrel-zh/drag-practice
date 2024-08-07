<template>
	<div id="left-bar">
		<div
			class="left-bar-item"
			v-for="item in form_item"
			:key="item.id"
		>
			<div class="text">
				<p>{{ item.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form_item: [
				{
					id: '001',
					components: 'horizontal_layout',
					name: '水平布局',
				},
				{
					id: '002',
					components: 'vertical_layout',
					name: '垂直布局',
				},
				{
					id: '003',
					components: 'single_line_input',
					name: '单行输入',
				},
				{
					id: '004',
					components: 'multi_line_input',
					name: '多行输入',
				},
				{
					id: '005',
					components: 'single_choice',
					name: '单选',
				},
				{
					id: '006',
					components: 'multi_choice',
					name: '多选',
				},
				{
					id: '007',
					components: 'dropdown',
					name: '下拉',
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/left-bar.scss';
</style>
