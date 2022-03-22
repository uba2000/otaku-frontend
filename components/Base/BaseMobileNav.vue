<template>
	<div class="mobile-nav" id="base-mobile-nav">
		<div class="logo-container mb-4">
			<div class="otaku-brand">
				<a href="" class="pl-3 d-flex align-items-center"
					><img src="~/assets/images/logo.png" alt="Otaku TV logo"
				/></a>
			</div>
		</div>
		<div>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobile-nav {
	min-height: 100vh;
	position: fixed;
	top: 0;
	width: 60%;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 10px 0;
	ul li {
		a {
			padding: 10px 16px;
			display: block;
			font-weight: 500;
			font-size: 14px;
			line-height: 21px;
			color: var(--textBlack-2);
		}
	}
}
</style>