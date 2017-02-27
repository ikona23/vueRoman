<template>
    <div class="jumbotron">
      <h1>Maso od Romana</h1>
      <p> Najlepsie v Blave
      </p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    </div>
</template>

<script>
  export default {
    headers: 'header',
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
