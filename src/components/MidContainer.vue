<!-- MidContainer.vue -->
<template>
	<div class="mid-container">
		<form class="form">
			<component
				:is="testData.is"
				v-model="testData.children"
			/>
		</form>
		<div class="btn">提交</div>
	</div>
</template>

<script>
import VerticalLayout from '@/components/form/VerticalLayout.vue';
import { useComponentStore } from '@/stores/useComponentsStore.js';

export default {
	name: 'MidContainer',
	components: {
		VerticalLayout,
	},
	data() {
		return {
			testData: {},
		};
	},
	methods: {},
	mounted() {
		const store = useComponentStore();
		const { testData } = store;
		this.testData = testData;
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';
</style>
