<template>
	<div class="mid-container">
		<form class="form">
			<div class="vertical_layout">
				<div class="experience"></div>
				<div class="horizontal_layout">
					<div class="single_line_input">
						<label>用户名</label>
						<input type="text" />
					</div>
					<div class="single_line_input">
						<label>密码</label>
						<input type="password" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'MidContainer',
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';
</style>
