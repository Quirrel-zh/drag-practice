<template>
	<div class="vertical_layout">
		<div class="experience">
			<div class="title">项目经验</div>
			<div class="table">
				<table class="experience-table">
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
		</div>
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
		<div class="single_choice">
			<label>性别-单选</label>
			<div class="radio">
				<input
					type="radio"
					name="gender"
				/>男
				<input
					type="radio"
					name="gender"
				/>女
			</div>
		</div>
		<div class="multi_choice">
			<label>爱好-多选</label>
			<div class="checkbox">
				<input
					type="checkbox"
					name="篮球"
				/>篮球
				<input
					type="checkbox"
					name="足球"
				/>足球
			</div>
		</div>
		<div class="dropdown">
			<label>城市-下拉</label>
			<select>
				<option value="北京">北京</option>
				<option value="上海">上海</option>
				<option value="广州">广州</option>
				<option value="深圳">深圳</option>
			</select>
		</div>
		<div class="vertical_layout">
			<div class="multi_line_input">
				<label>个人简介</label>
				<textarea></textarea>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
@import '@/assets/css/mid-container.scss';
</style>
