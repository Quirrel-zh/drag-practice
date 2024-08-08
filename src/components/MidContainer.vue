<template>
	<div class="mid-container">
		<form class="form">
			<div class="vertical_layout">
				<div class="experience">
					<div class="title">项目经验</div>
					<div class="table">
						<table class="experience-table">
							<tr
								v-for="i in 3"
								:key="i"
							>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</table>
					</div>
				</div>
				<a href=""></a>
				<component
					v-for="item in formItem"
					:key="item.id"
					:is="item"
					v-bind="item.props"
				/>

				<component
					v-for="item in formSingeChoice"
					:key="item.id"
					:is="item.is"
					v-bind="item.props"
				/>
				<component
					v-for="item in formMultiChoice"
					:key="item.id"
					:is="item.is"
					v-bind="item.props"
				/>
				<component
					v-for="item in formDropDown"
					:key="item.id"
					:is="item.is"
					v-bind="item.props"
				/>
				<component
					v-for="item in formMultiLineInput"
					:key="item.id"
					:is="item.is"
					v-bind="item.props"
				/>
			</div>
		</form>
		<div class="btn">提交123123</div>
	</div>
</template>

<script>
import SingleInput from '@/components/form/SingleInput.vue';
import VerticalLayout from '@/components/form/VerticalLayout.vue';
import SingleChoice from '@/components/form/SingleChoice.vue';
import MultiChoice from '@/components/form/MultiChoice.vue';
import DropDown from '@/components/form/DropDown.vue';
import MultiLineInput from '@/components/form/MultiLineInput.vue'; // import { VueDraggable } from 'vue-draggable-plus';
// import { VueDraggable } from 'vue-draggable-plus';

export default {
	name: 'MidContainer',
	components: {
		SingleInput,
		SingleChoice,
		MultiChoice,
		DropDown,
		VerticalLayout,
		MultiLineInput,
	},
	data() {
		return {
			formItem: [
				{
					id: '001',
					is: 'SingleInput',
					props: {
						title: '用户名',
						value: '',
						place: '',
					},
				},
				{
					id: '002',
					is: 'SingleInput',
					props: {
						title: '密码',
						value: '',
						place: '',
					},
				},
				{
					id: '003',
					is: 'SingleChoice',
					props: {
						title: '性别-单选',
						value: 'gender',
						choice: ['男', '女'],
					},
				},
				{
					id: '004',
					is: 'MultiChoice',
					props: {
						title: '爱好-多选',
						value: 'hobby',
						choice: ['篮球', '足球'],
					},
				},
				{
					id: '005',
					is: 'DropDown',
					props: {
						title: '城市-下拉',
						value: 'city',
						choice: ['北京', '上海', '广州', '深圳'],
					},
				},
				{
					id: '006',
					is: 'MultiLineInput',
					props: {
						title: '个人简介',
						value: 'introduction',
					},
				},
				{},
			],
			// formOneLineInput: [
			// 	{
			// 		id: '001',
			// 		is: 'SingleInput',
			// 		props: {
			// 			title: '用户名',
			// 			value: '',
			// 			place: '',
			// 		},
			// 	},
			// 	{
			// 		id: '002',
			// 		is: 'SingleInput',
			// 		props: {
			// 			title: '密码',
			// 			value: '',
			// 			place: '',
			// 		},
			// 	},
			// ],
			// formSingeChoice: [
			// 	{
			// 		id: '003',
			// 		is: 'SingleChoice',
			// 		props: {
			// 			title: '性别-单选',
			// 			value: 'gender',
			// 			choice: ['男', '女'],
			// 		},
			// 	},
			// ],
			// formMultiChoice: [
			// 	{
			// 		id: '004',
			// 		is: 'MultiChoice',
			// 		props: {
			// 			title: '爱好-多选',
			// 			value: 'hobby',
			// 			choice: ['篮球', '足球'],
			// 		},
			// 	},
			// ],
			// formDropDown: [
			// 	{
			// 		id: '005',
			// 		is: 'DropDown',
			// 		props: {
			// 			title: '城市-下拉',
			// 			value: 'city',
			// 			choice: ['北京', '上海', '广州', '深圳'],
			// 		},
			// 	},
			// ],
			// formMultiLineInput: [
			// 	{
			// 		id: '006',
			// 		is: 'MultiLineInput',
			// 		props: {
			// 			title: '个人简介',
			// 			value: 'introduction',
			// 		},
			// 	},
			// ],
			// formVerticalLayout: [],
		};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';
</style>
