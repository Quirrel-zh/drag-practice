<template>
	<div class="experience">
		<div class="title">项目经验</div>
		<div class="table">
			<table class="experience-table">
				<tr
					v-for="col in column"
					:key="col"
				>
					<td
						v-for="row in rows"
						:key="row"
					></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExTable',
	props: {
		column: {
			type: Number,
			default: 3,
		},
		rows: {
			type: Number,
			default: 4,
		},
	},
};
</script>

<style scoped lang="scss">
.experience {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: $color-bg-light;
	border: 1px solid $color-border;
	margin: 10px 0;

	.title {
		border-bottom: 1px solid $color-border;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		cursor: move;
	}

	.table {
		display: flex;
		flex-direction: column;
		flex: auto;

		.experience-table {
			background-color: #fff;
			margin: 10px;
			//padding: 10px;
			//border: 1px collapse $color-border;
			border-collapse: collapse;
			border-width: 1px;
			border-spacing: 0;

			tr {
				height: 40px;

				td {
					width: 20%;
					border: 1px solid $color-border;
				}
			}
		}
	}
}
</style>
