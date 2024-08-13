<!-- VerticalLayout.vue -->
<template>
	<VueDraggable
		class="vertical-layout"
		tag="div"
		:group="{ name: 'shared', pull: true, put: true }"
		ghostClass="holder_class"
		v-model="list"
		@change="handleListChange('listA')"
	>
		<template
			v-for="item in list"
			:key="item.id"
		>
			<component
				v-if="item.type === 'container'"
				:is="item.is"
				:key="item.id"
				v-model="item.list"
			/>

			<component
				v-else
				:is="item.is"
				v-model="item.props"
			/>
		</template>
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
				this.$emit('update:modelValue', val);
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
	height: 40px;
	border: 1px dashed #eee;
}
</style>
