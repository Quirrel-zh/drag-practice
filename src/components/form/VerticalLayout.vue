<template>
	<div class="vertical-layout"></div>
</template>

<script>
export default {
	name: 'VerticalLayout',
	props: {
		form_item: Object,
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
</style>
