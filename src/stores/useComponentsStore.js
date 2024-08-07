import { defineStore } from 'pinia';

export const useComponentStore = defineStore('components', {
	state() {
		return {
			form_item: [
				{
					id: '001',
					components: 'horizontal_layout',
					name: '水平布局',
					class: 'horizontal_layout',
					value: '',
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
});
