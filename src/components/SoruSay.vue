<template>
   <div class="container"> 
	
	  <h1 class="title">Toplam : {{ toplamSoru }}</h1>  
	  <a id="temizle" v-on:click="clear()" class="button  is-danger is-outlined ">Temizle</a>
	  <div class="columns">
		  <div class="column">
			<a v-on:click="say('mat')" class="button is-large is-primary is-outlined ">Matematik ({{  $store.getters.dersler.mat }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('geo')" class="button is-large is-primary is-outlined ">Geometri ({{  $store.getters.dersler.geo }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('fiz')" class="button is-large is-primary is-outlined ">Fizik ({{  $store.getters.dersler.fiz }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('biy')" class="button is-large is-primary is-outlined ">Biyoloji ({{  $store.getters.dersler.biy }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('kim')" class="button is-large is-primary is-outlined ">Kimya ({{  $store.getters.dersler.kim }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('par')" class="button is-large is-primary is-outlined ">Paragraf ({{  $store.getters.dersler.par }})</a>
		  </div>
	  </div>
  </div>   
</template>


<script>
export default {
  "name":"SoruSay",
  mounted() {
      console.log('sa');
	if (localStorage.getItem('ders')) {
	  try {
		this.$store.commit('change',  JSON.parse(localStorage.getItem('ders')));
	  } catch(e) {
			localStorage.removeItem('ders');
			console.log(e);
	  }
	}else{
		this.sifir();
	}
  },
  computed:{
	toplamSoru : {
		get: function () {
			let count = 0;
			this.$store.getters.dersler.map((ders) => {
              count = count + ders;
              console.log('ders');
            })
			return count;			
		},
	}
  },
  methods: {
	say(name) {
	  
	  if (!this.ders) {
		return;
	  }
	  //this.ders[name] +=1; 
	  this.$store.commit('dersArti', name );
	  this.saveDers();
	},
	clear(){
	  localStorage.removeItem('ders');
	  this.sifir();   
	},
	sifir(){
	  let ders  = {
		  mat:0,
		  geo:0,
		  fiz:0,
		  biy:0,
		  kim:0,
		  par:0,
		};
		const parsed = JSON.stringify(ders);
		//set local storage
		localStorage.setItem('ders', parsed);
		//Add local veriable
        //this.ders = ders;
        this.$store.commit('change',  ders);
		
	},
	saveDers() {
	  const parsed = JSON.stringify($store.getters.dersler);
	  localStorage.setItem('ders', parsed);
	}
  }
}