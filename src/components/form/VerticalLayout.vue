<!-- VerticalLayout.vue -->
<template>
	<VueDraggable
		class="vertical-layout"
		tag="div"
		:group="{ name: 'shared', pull: true, put: true }"
		direction="vertical"
		ghostClass="holder_class"
		v-model="list"
		@change="handleListChange('listA')"
		handle="label"
	>
		<component
			v-for="item in list"
			:key="item.id"
			:is="item.is"
			v-model="item.children"
			:title="item.title"
			@click="getValueClick"
		/>
		<!--				<template-->
		<!--					v-for="item in list"-->
		<!--					:key="item.id"-->
		<!--				>-->
		<!--					<component-->
		<!--						v-if="item.type === 'container'"-->
		<!--						:is="item.is"-->
		<!--						v-model="item.children"-->
		<!--					/>-->

		<!--					<component-->
		<!--						v-else-->
		<!--						:is="item.is"-->
		<!--						v-bind="item"-->
		<!--					/>-->
		<!--				</template>-->
	</VueDraggable>
</template>

<script>
import SingleInput from '@/components/form/SingleInput.vue';
import SingleChoice from '@/components/form/SingleChoice.vue';
import MultiChoice from '@/components/form/MultiChoice.vue';
import DropDown from '@/components/form/DropDown.vue';
import MultiLineInput from '@/components/form/MultiLineInput.vue';
import ExTable from '@/components/form/ExTable.vue';
import HorizontalLayout from '@/components/form/HorizontalLayout.vue';
import { VueDraggable } from 'vue-draggable-plus';

export default {
	name: 'VerticalLayout',
	components: {
		SingleInput,
		SingleChoice,
		MultiChoice,
		DropDown,
		MultiLineInput,
		ExTable,
		HorizontalLayout,
		VueDraggable,
	},
	props: ['modelValue'],
	data() {
		return { list: [] };
	},
	watch: {
		list: {
			handler(val) {
				this.$emit('update:model-value', val);
			},
			deep: true,
		},
	},
	methods: {
		handleListChange(listName) {
			console.log(`${listName} 移动了`, this.list);
			this.$emit('update:model-value', this.list);
		},
		getValueClick(event) {
			const targetElement = event.target;

			console.log(targetElement.getAttribute('is')); // 获取 id 属性
			// 你可以根据需要获取其他属性
		},
	},
	mounted() {
		this.list = this.modelValue;
	},
};
</script>

<style scoped lang="scss">
.vertical-layout {
	margin: 10px 0;
	cursor: default;
	padding: 10px;
	min-height: 24px;
	width: 100%;
	background-color: $color-bg-light;
	border: 0.5px solid $color-border-blue;
}

.holder_class {
	width: 100%;
	height: min-content;
	border: 1px dashed #eee;
	opacity: 0.5;
	background: $color-border-blue;
}
</style>
