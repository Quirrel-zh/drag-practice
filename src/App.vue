<template>
	<div class="drag">
		<left-bar />
		<mid-container />
		<right-info />
	</div>
</template>

<script>
import LeftBar from '@/components/LeftBar.vue';
import MidContainer from '@/components/MidContainer.vue';
import RightInfo from '@/components/RightInfo.vue';

export default {
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
	components: {
		RightInfo,
		MidContainer,
		LeftBar,
	},
};
</script>

<style scoped>
@import '@/assets/css/drag.scss';
</style>
