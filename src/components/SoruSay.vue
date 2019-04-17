<template>
   <div class="container"> 
	
	  <h1 class="title">Toplam : {{ toplamSoru }}</h1>  
	  <a id="temizle" v-on:click="clear()" class="button  is-danger is-outlined ">Temizle</a>
	  <div class="columns">
		  <div class="column">
			<a v-on:click="say('mat')" class="button is-large is-primary is-outlined ">Matematik ({{ ders.mat }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('geo')" class="button is-large is-primary is-outlined ">Geometri ({{ ders.geo }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('fiz')" class="button is-large is-primary is-outlined ">Fizik ({{ ders.fiz }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('biy')" class="button is-large is-primary is-outlined ">Biyoloji ({{ ders.biy }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('kim')" class="button is-large is-primary is-outlined ">Kimya ({{ ders.kim }})</a>
		  </div>
		  <div class="column">
			<a v-on:click="say('par')" class="button is-large is-primary is-outlined ">Paragraf ({{ ders.par }})</a>
		  </div>
	  </div>
  </div>   
</template>


<script>
export default {
    "name":"SoruSay",
   data: function () {
	return {
	  ders:{},
	  // toplam:0,
	}
  },
  mounted() {
	if (localStorage.getItem('ders')) {
	  try {
		this.ders = JSON.parse(localStorage.getItem('ders'));
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
			Object.values(this.ders).forEach(function (key) {
				count += key;
			});
			return count;			
		},
	}
  },
  methods: {
	say(name) {
	  
	  if (!this.ders) {
		return;
	  }
	  this.ders[name] +=1; 
	  
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
		this.ders = ders;
		
	},
	saveDers() {
	  const parsed = JSON.stringify(this.ders);
	  localStorage.setItem('ders', parsed);
	}
  }
}