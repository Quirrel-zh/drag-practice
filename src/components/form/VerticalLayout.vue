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
		@add="handleAdd"
		handle="label"
	>
		<component
			v-for="item in list"
			:key="item.id"
			:is="item.is"
			v-model="item.children"
			:title="item.title"
			:id="item.id"
			:choice="item.choice"
			@click="getValueClick(item.id, item.is, item.title)"
		/>
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
import { useComponentStore } from '@/stores/useComponentsStore.js';
import { mapActions } from 'pinia';
import { nanoid } from 'nanoid';

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
		return {
			list: [],
		};
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
		...mapActions(useComponentStore, { getValueClick: 'getValueClick' }),
		handleAdd(evt) {
			const newItem = {
				id: nanoid(15),
				is: evt.item.dataset.components,
				title: evt.item.dataset.title,
			};
			this.list.splice(evt.newIndex, 0, newItem);
			console.log('添加了');
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
