<template>
  <div class="row">
  <div class="products">

    <div class="well">
    <div class="panel panel-default darkgray">
      <div class="panel-heading darkgray">
        <h3 class="panel-title">{{ maso1.name }}</h3>
      </div>
    </div>
      <div class="panel-body">
        <div class="lg-6">
    <p>{{maso1.desc}}</p>
    <p>{{maso1.status}}</p>
    <p>{{maso1.price}}</p>
        </div>
        <div class="lg-6">
        <button type="button" class="btn btn-success btn-lg">
          <span class="glyphicon glyphicon-plus" aria-hidden="true">
          </span> Objednaj
        </button>
          </div>
        </div>
  </div>

    <div class="well">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">{{ maso2.name }}</h3>
      </div>
    </div>
      <div class="panel-body">
        <div class="lg-6">
    <p>{{maso2.desc}}</p>
    <p>{{maso2.status}}</p>
    <p>{{maso2.price}}</p>
        </div>
        <div class="lg-6">
        <button type="button" class="btn btn-success btn-lg">
          <span class="glyphicon glyphicon-plus" aria-hidden="true">
          </span> Objednaj
        </button>
          </div>
        </div>
  </div>

    <div class="well">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">{{ maso3.name }}</h3>
      </div>
    </div>
      <div class="panel-body">
        <div class="lg-6">
    <p>{{maso3.desc}}</p>
    <p>{{maso3.status}}</p>
    <p>{{maso3.price}}</p>
        </div>
        <div class="lg-6">
        <button type="button" class="btn btn-success btn-lg">
          <span class="glyphicon glyphicon-plus" aria-hidden="true">
          </span> Objednaj
        </button>
          </div>
        </div>
  </div>

    </div>
  </div>
</template>

<script>
  export default {
    products: 'products',
    data () {
      return {
        maso1: {
          name: 'T-bone steak',
          desc: 'Veggies es bonus vobis, proinde' +
          'vos postulo essum magis kohlrabi welsh onion daikon amaranth ' +
          'tatsoi tomatillo melon azuki bean garlic.',
          image: 'http://lorempixel.com/200/100/sports/1/',
          status: 'available',
          price: 15.5
        },
        maso2: {
          name: 'RibEye steak',
          desc: 'Veggies es bonus vobis, proinde' +
          'vos postulo essum magis kohlrabi welsh onion daikon amaranth ' +
          'tatsoi tomatillo melon azuki bean garlic.',
          image: 'http://lorempixel.com/200/100/sports/1/',
          status: 'available',
          price: 5.5
        },
        maso3: {
          name: 'Flank steak',
          desc: 'Veggies es bonus vobis, proinde' +
          'vos postulo essum magis kohlrabi welsh onion daikon amaranth ' +
          'tatsoi tomatillo melon azuki bean garlic.',
          image: 'http://lorempixel.com/200/100/sports/1/',
          status: 'available',
          price: 15.5
        },
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
.panel-body {
  background:darkgray;
}
  .lightgray{
    background:lightgray;
  }
.well {
  background:darkgray;
}
  a {
    color: #42b983;
  }
</style>
