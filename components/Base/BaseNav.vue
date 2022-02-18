<template>
	<div id="otaku-nav" ref="header">
		<b-container>
			<div class="d-flex justify-content-between">
				<div class="otaku-brand">
					<a href=""
						><img src="~/assets/images/logo.png" alt="Otaku TV logo"
					/></a>
				</div>

				<div class="otaku-nav-menu">
					<ul class="navbar-nav">
						<li>
							<a href="">Merch</a>
						</li>
						<li>
							<a href="">Anime-Downloads</a>
						</li>
						<li>
							<a href="">Tickets</a>
						</li>
						<li>
							<a href="">Anime-shazam</a>
						</li>
						<li>
							<a href="">Contact us</a>
						</li>
					</ul>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
export default {
	mounted() {
		let _this = this;
		if (process.browser) {
			window.addEventListener("scroll", () => {
				let header = _this.$refs.header;
				let windowPosition = window.scrollY > 0;
				header.classList.toggle("header-scroll", windowPosition);
			});
		}
	},
};
</script>

<style lang="scss" scoped>
#otaku-nav {
	padding: 18px 0 20px;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
	.otaku-nav-menu {
		display: flex;
		align-items: center;
	}
	ul.navbar-nav {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		li {
			a {
				padding: 10px 16px;
				font-weight: 500;
				font-size: 14px;
				line-height: 21px;
				color: var(--white);
			}
		}
	}
	&.header-scroll {
		background-color: #ffffff;
		box-shadow: 0px 2px 24px -3px rgba(0, 0, 0, 0.1);
		transition: background-color 0.4s ease;
		ul.navbar-nav {
			a {
				color: #000000;
			}
		}
	}
}
</style>