<template>
  <div class="products">
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>{{ maso1.name }} </h3><br>
        <p>{{maso1.desc}}</p>
        <p>{{maso1.status}}</p>
        <p>{{maso1.price}}</p>
        <button type="button" class="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
        </button>

      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>{{ maso2.name }} </h3><br>
        <p>{{maso2.desc}}</p>
        <p>{{maso2.status}}</p>
        <p>{{maso2.price}}</p>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>{{ maso3.name }} </h3><br>
        <p>{{maso3.desc}}</p>
        <p>{{maso3.status}}</p>
        <p>{{maso3.price}}</p>
      </div>
    </div>
    <div>
      <contact></contact>
    </div>
  </div>
</template>

<script>
  import Contact from './Contact'
  export default {
    components: {
      'contact': Contact,
    },
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

a {
  color: #42b983;
}
</style>
