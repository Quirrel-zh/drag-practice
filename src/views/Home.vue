<template>
	<div class="home">
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
	name: 'Home',
	components: {
		LeftBar,
		MidContainer,
		RightInfo,
	},
};
</script>

<style scoped lang="scss">
.home {
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	background-color: $color-bg-dark;
}
</style>
