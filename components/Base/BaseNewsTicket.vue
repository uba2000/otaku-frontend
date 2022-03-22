<template>
	<div class="news-ticket-container" id="news-ticket">
		<div class="news-feed-breaking">
			<span>Breaking News</span>
		</div>
		<div class="marquee">
			<span class="marquee-content"
				>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, hic id
				alias delectus dicta aperiam ipsa vero fuga repellendus, praesentium
				exercitationem quibusdam natus adipisci dolore architecto excepturi
				totam dignissimos ullam?</span
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/abstract/mixins";
.news-ticket-container {
	position: fixed;
	top: 100px;
	left: 0;
	right: 0;
	width: 100%;
	border-top: 2px solid var(--primaryColor);
	border-bottom: 2px solid var(--primaryColor);
	display: flex;
	z-index: 99999;
	background-color: #ffffff;

	@include customBreakpoint(767px) {
		& {
			position: absolute;
		}
	}

	.news-feed-breaking {
		background-color: var(--primaryColor);
		color: #ffffff;
		padding: 10px 14px;
		white-space: nowrap;
	}
	.marquee {
		align-items: center;
		display: flex;
		width: 100%;
		overflow: hidden;
		height: 44px;
		position: relative;
		.marquee-content {
			display: block;
			width: 10000%;
			height: 30px;
			position: absolute;
			overflow: hidden;
			animation: marquee 70s linear infinite;
		}
	}
}
</style>