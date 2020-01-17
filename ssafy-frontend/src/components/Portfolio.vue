<template>
  <v-card>
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline limitporttitle">{{title}}</div>
        <span class="grey--text limitportbody">{{body}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
	name: 'Portfolio',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
	},
	data() {
		return {
			//
		}
	}
}
</script>

<style>
  .limitporttitle {
    font-family: sans-serif;
    font-size: 24px;
    line-height: 1.2;
    max-height: 1.2em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .limitportbody{
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.2;
    max-height: 4.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>