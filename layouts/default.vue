<template>
	<div class="base-layout">
		<div
			class="base-layout-main"
			:class="{ 'open-mobile-nav': $store.getters['layout/getIsMobileNav'] }"
		>
			<base-news-ticket />
			<base-nav />
			<main class="layout-main">
				<Nuxt />
			</main>
			<base-footer />
		</div>
		<div
			class="overlay"
			v-if="$store.getters['layout/getIsMobileNav']"
			@click="$store.dispatch('layout/toggleMobileNav')"
		></div>
		<base-mobile-nav
			class="base-mobile-nav"
			:class="{ 'open-mobile-nav': $store.getters['layout/getIsMobileNav'] }"
		>
		</base-mobile-nav>
	</div>
</template>

<style lang="scss">
@import "~/assets/sass/abstract/mixins";
.base-layout {
	max-width: 100%;
	overflow-x: hidden;

	.base-mobile-nav,
	.base-layout-main {
		position: relative;
	}

	.base-layout-main {
		transform: translateX(0);
		z-index: 99999999;
		transition: all 0.2s ease;

		&.open-mobile-nav {
			@include customBreakpoint(768px) {
				& {
					transform: translateX(-60%);
				}
			}
		}
	}

	.base-mobile-nav {
		transform: translateX(3000%);
		z-index: 999999999999;
		transition: all 0.4s ease;

		&.open-mobile-nav {
			@include customBreakpoint(768px) {
				& {
					transform: translateX(67%);
				}
			}
		}
	}
}

.overlay {
	position: fixed;
	height: 100vh;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 9999999999999;
	background-color: rgba(0, 0, 0, 0.44);
	transition: all 0.2s ease;

	@include customBreakpointMin(768px) {
		& {
			display: none;
		}
	}
}

.layout-main {
	z-index: 9999;
}
</style>
