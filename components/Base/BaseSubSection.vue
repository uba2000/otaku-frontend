<template>
	<div class="base-sub-section">
		<b-container>
			<b-row>
				<b-col cols="12" md="5" :order-md="oppDir ? 2 : 1" class="my-4 my-md-0">
					<div class="img-content">
						<rect-decor class="position-absolute rect-decor" />
						<img
							:src="require(`~/assets/images/decorations/d${imgNumber}.png`)"
							alt=""
							class="position-relative"
						/>
					</div>
				</b-col>
				<b-col cols="12" md="7" :order-md="oppDir ? 1 : 2" class="my-4 my-md-0">
					<div class="main-content h-100">
						<div class="main-content-inner" :style="contentPadding">
							<header class="mb-3">
								<h3 class="txt-sub-section-heading">
									<slot name="title"></slot>
								</h3>
							</header>
							<div class="content-body">
								<p>
									<slot name="content"></slot>
								</p>
							</div>
							<div class="">
								<nuxt-link :to="link" class="btn btn--primary">
									<slot name="btn"></slot>
								</nuxt-link>
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import RectDecor from "~/assets/svg/rectangle-70.svg?inline";
export default {
	components: { RectDecor },
	props: {
		link: {
			type: String,
			default: "/",
		},
		imgNumber: {
			type: Number,
			default: 1,
		},
		oppDir: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		contentPadding() {
			if (this.oppDir) {
				return {
					"padding-right": "162px",
				};
			}
			return {
				"padding-left": "162px",
			};
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/abstract/mixins";
.img-content,
.main-content {
	@include flex-center;
}

.img-content {
	position: relative;
	overflow: hidden;
	.rect-decor {
		z-index: 2;
	}
	img {
		z-index: 4;
	}
}

.content-body {
	margin-bottom: 32px;
	p {
		font-weight: normal;
		font-size: 16px;
		margin-bottom: 0px;
		line-height: 22px;
		color: var(--textBlack-2);
	}
}

.main-content-inner {
	@media screen and (max-width: 767px) {
		& {
			padding: 0 !important;
		}
	}
}
</style>