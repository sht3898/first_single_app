<template>
  <v-app>
    <Header></Header>
    
    <v-content>
      <router-view />
    </v-content>

    <Footer></Footer>

  </v-app>
</template>

<script>
  import store from './store'
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    store,
    components: {
      Header,
      Footer
    },
    data() {
      return {
        //
        
      }
    }
  }
</script>
