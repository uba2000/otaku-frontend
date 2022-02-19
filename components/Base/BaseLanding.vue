<template>
	<section class="landing-section">
		<div class="main-section landing-clear-padding position-relative">
			<base-logo-icon />
			<div class="video-container">
				<video autoplay ref="videoBg" loop muted>
					<source src="~/assets/film/Untitled (4).mp4" type="video/mp4" />
					<source src="~/assets/film/Untitled (3).mp4" type="video/mp4" />
					<source src="~/assets/film/Untitled (2).mp4" type="video/mp4" />
					<source src="~/assets/film/Untitled (1).mp4" type="video/mp4" />
				</video>
			</div>
			<div class="overlay"></div>
			<base-play-icon @click="playVideo" />
		</div>
		<div class="carousel-selection position-relative">
			<div class="otaku-gallery-slider forward-slide" @click="flickityNext">
				<forward-arr />
			</div>
			<div class="otaku-gallery-slider backward-slide" @click="flickityPrev">
				<backward-arr />
			</div>
			<div class="">
				<vue-flickity :options="flickityOptions" ref="flickity">
					<div
						v-for="i in [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]"
						class="c-item"
						:key="i"
					>
						<img :src="require(`~/assets/images/slides/slider${i}.png`)" />
					</div>
				</vue-flickity>
			</div>
		</div>
	</section>
</template>

<script>
import VueFlickity from "vue-flickity";
import BasePlayIcon from "~/components/Base/BasePlayIcon.vue";
import BaseLogoIcon from "~/components/Base/BaseLogoIcon.vue";
import ForwardArr from "~/assets/svg/forward-arr.svg?inline";
import BackwardArr from "~/assets/svg/backward-arr.svg?inline";
export default {
	components: {
		BasePlayIcon,
		BaseLogoIcon,
		VueFlickity,
		ForwardArr,
		BackwardArr,
	},
	data() {
		return {
			flickityOptions: {
				// cellAlign: "center",
				resize: true,
				// contain: true,
				wrapAround: true,
				// groupCells: true,
				pageDots: false,
				// initialIndex: 11,
				prevNextButtons: false,
				// autoPlay: false,
				// imagesLoaded: true,
				// adaptiveHeight: true,
			},
		};
	},
	methods: {
		flickityNext() {
			this.$refs.flickity.next();
		},
		flickityPrev() {
			this.$refs.flickity.previous();
		},
		playVideo() {
			// console.log(this.$refs.video);
			// this.$refs.videoBg.play();
		},
	},
	mounted() {
		// this.$refs.videoBg.play();
	},
	// beforeRouteLeave(from, to, next) {
	// 	const slider = this.$refs.flickity.$el;
	// 	slider.style.transition = "opacity .25 ease";
	// 	slider.style.opacity = 0;
	// 	setTimeout(() => {
	// 		next();
	// 	}, 250);
	// },
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/abstract/mixins";
.landing-section {
	.main-section {
		max-height: 607px;
		height: calc(100vh - 191px);
		// background: linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(.jpg);
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54));
		@include flex-center;
	}
	.carousel-selection {
		height: 191px;
		.c-item {
			width: 274px;
			height: 191px;
		}
	}
	.c-item {
		background-color: #c4c4c4;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
	.otaku-gallery-slider {
		position: absolute;
		height: 67px;
		width: 67px;
		top: calc(50% - 33.5px);
		background: #222222;
		opacity: 0.4;
		border-radius: 50%;
		cursor: pointer;
		z-index: 99999;
		@include flex-center;
		&.forward-slide {
			right: 50px;
		}
		&.backward-slide {
			left: 50px;
		}
	}
}

.video-container {
	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.8;
	}
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.54);
	mix-blend-mode: overlay;
}
</style>