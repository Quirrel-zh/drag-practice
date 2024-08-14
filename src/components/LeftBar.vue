<template>
	<VueDraggable
		id="left-bar"
		:group="{ name: 'shared', pull: 'clone', put: false }"
		v-model="form_item"
		:sort="false"
		ghost-class=".holder_class"
	>
		<div
			class="left-bar-item"
			v-for="item in form_item"
			:key="item.id"
			:data-id="item.id"
			:data-components="item.components"
			:data-title="item.title"
		>
			<div class="text">
				<p>{{ item.name }}</p>
			</div>
		</div>
	</VueDraggable>
</template>

<script>
import { useComponentStore } from '@/stores/useComponentsStore.js';
import { VueDraggable } from 'vue-draggable-plus';

export default {
	components: { VueDraggable },
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
	methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/left-bar.scss';

.holder_class {
	width: 100%;
	height: min-content;
	border: 1px dashed #eee;
	opacity: 0.5;
	background: $color-border-blue;
}
</style>
