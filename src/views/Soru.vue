<template>
	<div class="soru">
		<SoruSay />
	</div>
</template>

<script>
// @ is an alias to /src
import SoruSay from "@/components/SoruSay.vue";

export default {
	name: "soru",
	components: {
		SoruSay
	}
};
</script>
