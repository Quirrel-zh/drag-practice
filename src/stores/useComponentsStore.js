import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useComponentStore = defineStore('components', {
	state() {
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
			testData: {
				id: nanoid(15),
				is: 'VerticalLayout',
				type: 'container',
				children: [
					{
						id: nanoid(15),
						is: 'ExTable',
						column: 3,
						rows: 4,
						title: '项目经验',
					},
					{
						id: nanoid(15),
						is: 'HorizontalLayout',
						type: 'container',
						title: '水平布局',
						children: [
							{
								id: nanoid(15),
								is: 'SingleInput',
								title: '用户名',
								value: '',
								place: '',
							},
							{
								id: nanoid(15),
								is: 'SingleInput',
								title: '密码',
								value: '',
								place: '',
							},
						],
					},
					{
						id: nanoid(15),
						is: 'SingleChoice',

						title: '性别-单选',
						value: 'gender',
						choice: ['男', '女'],
					},
					{
						id: nanoid(15),
						is: 'MultiChoice',

						title: '爱好-多选',
						value: 'hobby',
						choice: ['篮球', '足球'],
					},
					{
						id: nanoid(15),
						is: 'DropDown',

						title: '城市-下拉',
						value: 'city',
						choice: ['北京', '上海', '广州', '深圳'],
					},
					{
						id: nanoid(15),
						is: 'VerticalLayout',
						type: 'container',
						title: '垂直布局',
						children: [
							{
								id: nanoid(15),
								is: 'MultiLineInput',
								title: '个人简介',
							},
						],
					},
				],
			},
			componentsInfo: {
				id: '',
				components: '',
				name: '',
			},
		};
	},
	actions: {
		getValueClick(id, components, name) {
			console.log('点击了', id, components, name); // 获取 id 属性
			// 你可以根据需要获取其他属性
			this.componentsInfo.id = id;
			this.componentsInfo.components = components;
			this.componentsInfo.name = name;
		},
	},
});
