<template>
  <div>
  <logo/>
  <products/>
    <contact/>

  </div>

</template>

<script>
  import Contact from './Contact'
  import Products from './Products'
  import Header from './Header'
  import Logo from './Logo'

  export default {
    components: {
      'headers': Header,
      'products': Products,
      'logo': Logo,
      'contact': Contact,
    },
    data () {
      return {
      title:'Maso od Romana'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
