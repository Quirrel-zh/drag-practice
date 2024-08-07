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
};
</script>

<style scoped lang="scss">
@import '@/assets/css/right-info.scss';
</style>
