<template>
	<footer>
		<b-container>
			<b-row>
				<b-col cols="12" md="6">
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
								<a href="#">
									<span class="mr-3"> <fa :icon="['fab', 'instagram']" /> </span
									>IG
								</a>
							</li>
							<li class="pr-2">
								<a href="#">
									<span class="mr-3"> <fa :icon="['fab', 'instagram']" /> </span
									>TW
								</a>
							</li>
							<li class="pr-2">
								<a href="#">
									<span class="mr-3"> <fa :icon="['fab', 'instagram']" /> </span
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
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
	background-color: #222222;
	padding: 144px 0 84px;
	color: #ffffff;
	font-family: "Poppins";
}
</style>