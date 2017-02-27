<template>
  <div class="hello2">
   <h2>Hello from contact</h2>
    <h3>{{ msgTwo }} </h3>
    <h3>{{ msgThree }} </h3>
  </div>
</template>

<script>
  export default {
    name: 'hello2',
    data () {
      return {
        msgTwo: 'Prosim konaktujte ma',
        msgThree: 'Dalsia sprava',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
