<template>
	<div class="container">
		<h1 class="title">Toplam : {{ $store.getters.topla }}</h1>
		<a
			id="temizle"
			v-on:click="clear()"
			class="button is-danger is-outlined"
			>Temizle</a
		>
		<div class="soru-say-container">
			<v-button ders="mat" v-on:click="say('mat')">Matematik</v-button>
			<v-button ders="geo" v-on:click="say('geo')">Geometri</v-button>
			<v-button ders="fiz" v-on:click="say('fiz')">Fizik</v-button>
			<v-button ders="biy" v-on:click="say('biy')">Biyoloji</v-button>
			<v-button ders="kim" v-on:click="say('kim')">Kimya</v-button>
			<v-button ders="par" v-on:click="say('par')">Paragraf</v-button>
		</div>
	</div>
</template>

<script>
import Button from "./Button.vue";

export default {
	name: "SoruSay",

	components: {
		"v-button": Button
	},
	mounted() {
		if (localStorage.getItem("ders")) {
			try {
				this.$store.commit(
					"change",
					JSON.parse(localStorage.getItem("ders"))
				);
			} catch (e) {
				localStorage.removeItem("ders");
			}
		} else {
			this.sifir();
		}
	},

	methods: {
		say(name) {
			if (!this.$store.getters.dersler) {
				return;
			}
			//this.ders[name] +=1;
			this.$store.commit("dersArti", name);
			this.saveDers();
		},
		clear() {
			localStorage.removeItem("ders");
			this.sifir();
		},
		sifir() {
			let ders = {
				mat: 0,
				geo: 0,
				fiz: 0,
				biy: 0,
				kim: 0,
				par: 0
			};
			const parsed = JSON.stringify(ders);
			//set local storage
			localStorage.setItem("ders", parsed);
			//Add local veriable
			//this.ders = ders;
			this.$store.commit("change", ders);
		},
		saveDers() {
			const parsed = JSON.stringify(this.$store.getters.dersler);
			localStorage.setItem("ders", parsed);
		}
	}
};
</script>
<style scoped lang="scss">
.soru-say-container {
	display: flex;
	margin-top: 30px;
	flex-direction: column;
	justify-content: space-around;

	a {
		margin-top: 15px;
	}

	@media (min-width: 992px) {
		flex-direction: row;
		a {
			margin-top: 0;
		}
	}
}
</style>
