<template>
	<div id="left-bar">
		<div
			class="left-bar-item"
			v-for="item in form_item"
			:key="item.id"
			draggable="true"
			@dragstart="onDragStart(item, $event)"
		>
			<div class="text">
				<p>{{ item.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useComponentStore } from '@/stores/useComponentsStore.js';

export default {
	mounted() {
		const store = useComponentStore();
		const { form_item } = store;
		this.form_item = form_item;
	},
	data() {
		return {
			form_item: [],
		};
	},
	methods: {
		onDragStart(item, e) {
			console.log(item);
			e.dataTransfer.setData('item', JSON.stringify(item));
			e.dataTransfer.effectAllowed = 'move';
		},
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/left-bar.scss';
</style>
