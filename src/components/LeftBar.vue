<template>
	<div id="left-bar">
		<div class="left-bar-item">
			<div class="text">
				<p>水平布局</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>垂直布局</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>单行输入</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>多行输入</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>单选</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>多选</p>
			</div>
		</div>
		<div class="left-bar-item">
			<div class="text">
				<p>下拉</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'left-bar',
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/css/left-bar.scss';
</style>
