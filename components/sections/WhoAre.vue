<template>
	<div class="base-sub-section">
		<b-container class="flex justify-content-center align-items-center">
			<div class="" style="margin-bottom: 64px">
				<h3
					style="font-size: 51px; line-height: 68px"
					class="text-center text-white"
				>
					Who we are
				</h3>
			</div>
			<div style="margin-bottom: 75px">
				<p class="mb-0 text-center text-white">
					Aliquet feugiat mauris donec aliquam a aenean faucibus. Viverra
					adipiscing montes, etiam faucibus nisi, facilisi pellentesque.
					Facilisis ut aliquam massa in enim tortor cras habitasse. Molestie
					iaculis aliquet risus, augue amet amet amet, nunc, arcu. Eget lorem
					neque, lectus sollicitudin venenatis at nunc. Tristique in iaculis
					pellentesque netus lectus ultrices tellus id malesuada. Risus,
					vulputate eu augue nisl in porttitor. Felis vivamus lorem egestas sed
					orci, at pellentesque pellentesque leo. Ultricies auctor non augue
					curabitur interdum. Habitasse consectetur.
				</p>
			</div>
			<div class="text-center">
				<nuxt-link to="/" class="btn btn--primary mx-auto py-3">
					Become part of our community
				</nuxt-link>
			</div>
		</b-container>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-sub-section {
	background: url(/img/home.jpg);
	background-position: center;
	&,
	> div {
		position: relative;
	}
	&::before {
		background-color: rgba(34, 34, 34, 0.9);
		position: absolute;
		z-index: 0;
		content: "";
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
}
</style>