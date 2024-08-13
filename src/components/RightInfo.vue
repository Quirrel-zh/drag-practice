<template>
	<div class="right-info">
		<div
			class="item-detail"
			v-for="item in itemInfo"
			:key="item.id"
		>
			<p>{{ item.id }}</p>
			<input type="text" />
		</div>
	</div>
</template>

<script>
import { useComponentStore } from '@/stores/useComponentsStore.js';

export default {
	name: 'RightInfo',
	data() {
		return {
			itemInfo: [
				{
					id: 'ID',
					componentsId: '',
				},
				{
					id: '组件',
					componentsId: '',
				},
				{
					id: '名称',
					componentsId: '',
				},
			],
			suggest: [],
		};
	},
	mounted() {
		const store = useComponentStore();
		const { testData } = store;
		this.suggest = testData.children;
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/right-info.scss';
</style>
