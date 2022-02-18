<template>
	<div class="base-section">
		<header class="base-section-header" v-if="heading">
			<b-container>
				<h2 class="txt-section-heading--sub mb-3 pb-1">
					<slot name="subtitle"></slot>
				</h2>
				<h1 class="txt-section-heading">
					<slot name="title"></slot>
				</h1>
			</b-container>
		</header>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		heading: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>