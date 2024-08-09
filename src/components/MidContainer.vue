<template>
	<div class="mid-container">
		<form class="form">
			<VerticalLayout />
		</form>
		<div class="btn">提交</div>
	</div>
</template>

<script>
import { VueDraggable } from 'vue-draggable-plus';
import VerticalLayout from '@/components/form/VerticalLayout.vue';

export default {
	name: 'MidContainer',
	components: { VueDraggable, VerticalLayout },
	data() {
		return {
			list: [{}, {}, {}, {}, {}],
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
