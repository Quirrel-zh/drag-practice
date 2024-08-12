<template>
	<div class="mid-container">
		<form class="form">
			<VerticalLayout v-model="list" />
		</form>
		<div class="btn">提交</div>
	</div>
</template>

<script>
import { VueDraggable } from 'vue-draggable-plus';
import VerticalLayout from '@/components/form/VerticalLayout.vue';

export default {
	name: 'MidContainer',
	components: { VueDraggable, VerticalLayout },
	data() {
		return {
			list: [
				{
					// 表格
					id: '001',
					name: 'experience',
				},
				{
					// 水平布局
					id: '002',
					name: 'horizontal_layout',
				},
				{
					// 单选
					id: '003',
					name: 'single_choice',
				},
				{
					id: '004',
					name: 'multi_choice',
				},
				{
					id: '005',
					name: 'vertical_layout',
					children: [],
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
