<template>
	<a @click="$emit('click')" class="button is-large is-primary is-outlined"
		><slot></slot> ({{ $store.getters.dersler[ders] }})</a
	>
</template>
<script>
export default {
	name: "Button",
	props: ["ders"]
};
</script>
