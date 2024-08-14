<template>
	<div class="right-info">
		<div
			class="item-detail"
			v-for="item in itemInfo"
			:key="item.id"
		>
			<p>{{ item.id }}</p>
			<input
				type="text"
				v-model="item.componentsId"
				disabled="disabled"
			/>
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
		};
	},
	computed: {
		componentsInfo() {
			return useComponentStore().componentsInfo;
		},
	},
	watch: {
		componentsInfo: {
			handler(newInfo) {
				this.itemInfo[0].componentsId = newInfo.id;
				this.itemInfo[1].componentsId = newInfo.components;
				this.itemInfo[2].componentsId = newInfo.name;
				console.log('Updated componentsInfo:', newInfo);
			},
			deep: true,
		},
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/right-info.scss';
</style>
