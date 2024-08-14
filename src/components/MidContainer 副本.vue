<template>
	<div class="mid-container">
		<form class="form">
			<VerticalLayout />
		</form>
		<div class="btn">提交</div>
	</div>
</template>

<script>
import VerticalLayout from '@/components/form/VerticalLayout.vue';
import { VueDraggable } from 'vue-draggable-plus';

export default {
	name: 'MidContainer',
	components: {
		VerticalLayout,
		VueDraggable,
	},
	data() {
		return {
			list: [
				{
					id: '1-1',
					is: 'ExTable',
					props: {
						column: 3,
						rows: 4,
					},
				},
				{
					id: '1-2',
					is: 'HorizontalLayout',
					props: {
						formItem: [
							{
								id: '1-2-1',
								is: 'SingleInput',
								props: {
									title: '用户名',
									value: '',
									place: '',
								},
							},
							{
								id: '1-2-2',
								is: 'SingleInput',
								props: {
									title: '密码',
									value: '',
									place: '',
								},
							},
						],
					},
				},
				{
					id: '1-3',
					is: 'SingleChoice',
					props: {
						title: '性别-单选',
						value: 'gender',
						choice: ['男', '女'],
					},
				},
				{
					id: '1-4',
					is: 'MultiChoice',
					props: {
						title: '爱好-多选',
						value: 'hobby',
						choice: ['篮球', '足球'],
					},
				},
				{
					id: '1-5',
					is: 'DropDown',
					props: {
						title: '城市-下拉',
						value: 'city',
						choice: ['北京', '上海', '广州', '深圳'],
					},
				},
				{
					id: '1-6',
					is: 'VerticalLayout',
					props: {
						formItem: [
							{
								id: '1-6-1',
								is: 'MultiLineInput',
								props: {
									title: '个人简介',
									value: '',
									place: '',
								},
							},
						],
					},
				},
			],
		};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';
</style>
