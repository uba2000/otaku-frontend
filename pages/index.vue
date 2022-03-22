<template>
	<div id="home">
		<base-landing />

		<base-section :heading="true">
			<template #title>
				We also bring to you variety of other products and services
			</template>
			<template #subtitle> We are not just your regular TV </template>

			<base-sub-section :link="'/'" :imgNumber="1">
				<template #title>Otaku Merch</template>
				<template #content>
					Nibh sed pretium, dictumst arcu varius platea ut diam. Ut tincidunt
					gravida mi feugiat ultrices. Amet pharetra, nullam volutpat ultrices
					pulvinar. Rhoncus iaculis massa eget ut volutpat senectus tincidunt
					faucibus at. Vel maecenas arcu velit metus dignissim risus quis nibh
					duis. Arcu quis non nulla ipsum, nunc aliquam, eget. In ultrices morbi
					vitae libero, sed praesent vel velit aliquet.
				</template>
				<template #btn>Visit our store</template>
			</base-sub-section>

			<base-sub-section class="dark" :oppDir="true" :link="'/'" :imgNumber="4">
				<template #title>Anime Shazam</template>
				<template #content>
					<span class="text-white">
						Nibh sed pretium, dictumst arcu varius platea ut diam. Ut tincidunt
						gravida mi feugiat ultrices. Amet pharetra, nullam volutpat ultrices
						pulvinar. Rhoncus iaculis massa eget ut volutpat senectus tincidunt
						faucibus at. Vel maecenas arcu velit metus dignissim risus quis nibh
						duis. Arcu quis non nulla ipsum, nunc aliquam, eget. In ultrices
						morbi vitae libero, sed praesent vel velit aliquet.
					</span>
				</template>
				<template #btn>Try it out</template>
			</base-sub-section>

			<base-sub-section :link="'/'" :imgNumber="2">
				<template #title>Anime Downloads</template>
				<template #content>
					Nibh sed pretium, dictumst arcu varius platea ut diam. Ut tincidunt
					gravida mi feugiat ultrices. Amet pharetra, nullam volutpat ultrices
					pulvinar. Rhoncus iaculis massa eget ut volutpat senectus tincidunt
					faucibus at. Vel maecenas arcu velit metus dignissim risus quis nibh
					duis. Arcu quis non nulla ipsum, nunc aliquam, eget. In ultrices morbi
					vitae libero, sed praesent vel velit aliquet.
				</template>
				<template #btn>Start downloading</template>
			</base-sub-section>

			<base-sub-section class="cream" :oppDir="true" :link="'/'" :imgNumber="3">
				<template #title>Tickets</template>
				<template #content>
					Nibh sed pretium, dictumst arcu varius platea ut diam. Ut tincidunt
					gravida mi feugiat ultrices. Amet pharetra, nullam volutpat ultrices
					pulvinar. Rhoncus iaculis massa eget ut volutpat senectus tincidunt
					faucibus at. Vel maecenas arcu velit metus dignissim risus quis nibh
					duis. Arcu quis non nulla ipsum, nunc aliquam, eget. In ultrices morbi
					vitae libero, sed praesent vel velit aliquet.
				</template>
				<template #btn>Get your ticket</template>
			</base-sub-section>

			<who-are />

			<div class="base-section" style="padding: 90px 0 0px">
				<header class="base-section-header" style="padding-bottom: 90px">
					<b-container>
						<b-row>
							<b-col cols="12" md="4" class="stats pb-3 pb-md-0">
								<div class="main-text txt-primary">12k</div>
								<div class="sub-text">Otakus</div>
							</b-col>
							<b-col cols="12" md="4" class="stats pb-3 pb-md-0">
								<div class="main-text txt-primary">90</div>
								<div class="sub-text">Merch Variants</div>
							</b-col>
							<b-col cols="12" md="4" class="stats pb-3 pb-md-0">
								<div class="main-text txt-primary">200+</div>
								<div class="sub-text">Anime for downloads</div>
							</b-col>
						</b-row>
					</b-container>
				</header>
				<b-container class="mr-0 pr-0">
					<b-row no-gutters class="mx-0">
						<b-col
							cols="12"
							md="5"
							class="d-flex align-items-center pr-md-3 mb-4 mb-md-0"
						>
							<div class="flex align-items-center">
								<h3 class="txt-sub-section-heading" style="margin-bottom: 12px">
									Feedbacks from members
								</h3>
								<div class="content-body">
									<p class="mb-0">
										From our contents to our services they love what we do and
										here’s what they have to say about OTAKU TV
									</p>
								</div>
							</div>
						</b-col>
						<b-col cols="12" md="7">
							<div class="position-relative" style="min-height: 491px">
								<vue-flickity :options="flickityOptions" ref="flickity">
									<template v-for="(i, index) in [1, 2, 3, 4]">
										<div
											class="slider-main-view"
											style="z-index: 20"
											:key="index"
										>
											<div class="position-relative">
												<div class="avatar-view-container">
													<img
														src="~/assets/images/slides/slide1.png"
														alt=""
														class="avatar-view"
													/>
												</div>
												<div class="avatar-name">Amarachi</div>
												<div class="avatar-desc">
													From our contents to our services they love what we do
													and here’s what they have to say about OTAKU TV.
												</div>
												<div class="d-flex">
													<div class="mr-2">
														<fa :icon="['fab', 'instagram']" />
													</div>
													<div class="">
														<fa :icon="['fab', 'twitter']" />
													</div>
												</div>
											</div>
										</div>
									</template>
								</vue-flickity>
							</div>
							<div class="slider-controller">
								<div class="mr-2" @click="flickityPrev">
									<chev-left />
								</div>
								<div class="ml-2" @click="flickityNext">
									<chev-right />
								</div>
							</div>
						</b-col>
					</b-row>
				</b-container>
			</div>
		</base-section>
	</div>
</template>

<script>
import VueFlickity from "vue-flickity";
import BaseLanding from "~/components/Base/BaseLanding.vue";
import BaseSection from "~/components/Base/BaseSection.vue";
import BaseSubSection from "~/components/Base/BaseSubSection.vue";
import WhoAre from "~/components/sections/WhoAre.vue";
import ChevLeft from "~/assets/svg/chevLeft.svg?inline";
import ChevRight from "~/assets/svg/chevRight.svg?inline";
export default {
	components: {
		BaseSection,
		BaseSubSection,
		BaseLanding,
		WhoAre,
		VueFlickity,
		ChevLeft,
		ChevRight,
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
				autoPlay: true,
				// imagesLoaded: true
				// percentagePosition: false,
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
	},
};
</script>

<style lang="scss" scoped>
.chev-inactive {
	path {
		fill: #fbcdca;
	}
}
</style>
