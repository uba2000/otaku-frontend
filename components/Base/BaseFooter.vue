<template>
	<footer>
		<b-container>
			<b-row>
				<b-col cols="12" md="6" class="mb-4 mb-md-0">
					<div class="" style="margin-bottom: 30px">
						<h5>Quick Links</h5>
					</div>
					<div>
						<ul class="d-flex" style="font-size: 14px">
							<li class="pr-1"><a href="#">Home</a></li>
							<li class="px-1"><a href="#">Swap</a></li>
							<li class="px-1"><a href="#">Contact us</a></li>
							<li class="pl-1"><a href="#">About</a></li>
						</ul>
					</div>
				</b-col>
				<b-col cols="12" md="6">
					<div class="" style="margin-bottom: 30px">
						<h5 class="text-uppercase">Follow Us</h5>
					</div>
					<div>
						<ul class="d-flex" style="font-size: 14px">
							<li class="pr-2">
								<a href="#" class="d-flex">
									<span class="mr-3">
										<fa
											:icon="['fab', 'instagram']"
											style="width: 12.33px; height: 13.99px"
										/> </span
									>IG
								</a>
							</li>
							<li class="pr-2">
								<a href="#" class="d-flex">
									<span class="mr-3">
										<fa
											:icon="['fab', 'instagram']"
											style="width: 12.33px; height: 13.99px"
										/> </span
									>TW
								</a>
							</li>
							<li class="pr-2">
								<a href="#" class="d-flex">
									<span class="mr-3">
										<fa
											:icon="['fab', 'instagram']"
											style="width: 12.33px; height: 13.99px"
										/> </span
									>WH
								</a>
							</li>
						</ul>
					</div>
				</b-col>
			</b-row>
			<div style="margin-top: 69px">
				<span>2021 All right Reserved (C) OtakuTV</span>
			</div>
		</b-container>
		<to-top class="totop" @click="scrollToTop" />
	</footer>
</template>

<script>
import ToTop from "~/assets/svg/to-top.svg?inline";
export default {
	components: { ToTop },
	methods: {
		scrollToTop() {
			if (process.browser) {
				window.scrollTo(0, 0);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
footer {
	background-color: #222222;
	padding: 144px 0 84px;
	color: #ffffff;
	font-family: "Poppins";
	position: relative;
	.totop {
		position: absolute;
		top: 99px;
		right: 8%;
		cursor: pointer;
	}
}
</style>