<!-- HorizontalLayout.vue -->
<template>
	<VueDraggable
		class="horizontal_layout"
		tag="div"
		:group="{ name: 'shared', pull: true, put: true }"
		ghost-class="holder_class"
		direction="horizontal"
		v-model="list"
		@change="handleListChange('listB')"
		handle="label"
	>
		<component
			v-for="item in list"
			:key="item.id"
			:is="item.is"
			v-bind="item"
		/>
	</VueDraggable>
</template>

<script>
import SingleInput from '@/components/form/SingleInput.vue';
import { VueDraggable } from 'vue-draggable-plus';
import SingleChoice from '@/components/form/SingleChoice.vue';

export default {
	name: 'HorizontalLayout',
	components: {
		SingleInput,
		VueDraggable,
		SingleChoice,
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
		handleListChange(list) {
			console.log(`${list}移动了`);
		},
	},
	mounted() {
		this.list = this.modelValue || [];
	},
};
</script>

<style scoped lang="scss">
.horizontal_layout {
	cursor: move;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid $color-border-blue;
	//margin: 10px;
	padding: 10px;
	min-height: 44px;
	gap: 10px;

	> * {
		flex: 1;
	}
}

.holder_class {
	width: 100%;
	height: 40px;
	border: 1px dashed #eee;
}
</style>
