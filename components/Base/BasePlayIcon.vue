<template>
	<div
		class="position-relative player-container pop-in-animation"
		@click="clickHandler"
	>
		<div class="play-container position-relative"></div>
		<div class="player-inner-container position-absolute"></div>
		<play class="position-absolute play" />
	</div>
</template>

<script>
import Play from "~/assets/svg/play.svg?inline";
export default {
	components: { Play },
	methods: {
		clickHandler() {
			this.$emit("clickedPlay");
		},
	},
};
</script>

<style lang="scss" scoped>
.player-container {
	cursor: pointer;
}
.play-container {
	width: 202px;
	height: 202px;
	border-radius: 50%;
	background: #ffffff;
	opacity: 0.1;
}
.player-inner-container {
	width: 132px;
	border-radius: 50%;
	height: 132px;
	background: #ffffff;
	opacity: 0.34;
	top: calc(50% - 66px);
	left: calc(50% - 66px);
}

.play {
	top: calc(50% - 22px);
	left: calc(50% - 19px);
}
</style>