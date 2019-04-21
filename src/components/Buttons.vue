<template>
	<a v-on:click="say('par')" class="button is-large is-primary is-outlined"
		>Paragraf ({{ $store.getters.dersler.par }})</a
	>
</template>
