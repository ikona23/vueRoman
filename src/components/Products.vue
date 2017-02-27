<template>
  <div class="row">

  <div class="products">

<div class="container">


    <div class="well">
      <div class="panel-body">

        <div class="lg-2 col-2 col-md-2">
          <h3>{{maso1.name}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <img v-bind:src=maso1.image>
        </div>

        <div class="lg-5 col-6 col-md-5">
           <h3>{{maso1.desc}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <h3>{{"€" + " " + maso1.price}}</h3>
        </div>
      </div>
    </div>


    <div class="well">
      <div class="panel-body">

        <div class="lg-2 col-2 col-md-2">
          <h3>{{maso2.name}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <img v-bind:src=maso2.image>
        </div>

        <div class="lg-5 col-6 col-md-5">
           <h3>{{maso2.desc}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <h3>{{"€" + " " + maso2.price}}</h3>
        </div>

      </div>
    </div>

    <div class="well">
      <div class="panel-body">

        <div class="lg-2 col-2 col-md-2">
          <h3>{{maso3.name}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <img v-bind:src=maso3.image>
        </div>

        <div class="lg-5 col-6 col-md-5">
           <h3>{{maso3.desc}}</h3>
        </div>

        <div class="lg-2 col-2 col-md-2">
          <h3>{{"€" + " " + maso3.price}}</h3>
        </div>

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
          desc: '2 steaky v jednom. Ten väčší kúsok je nízka roštenka. Menší kúsok sviečkovica. Priemerná porcia má od 500 do 800g.',
          image: 'http://lorempixel.com/100/50/sports/1/',
          status: 'available',
          price: 15.5
        },
        maso2: {
          name: 'RibEye steak',
          desc: 'Je rez z vysokej roštenky. Je o čosi tuhší ako sviečkovica, ale vďaka mramorovaniu a tuku dostáva hovädziu chuť. Priemerná porcia má od 300-400g.',
          image: 'http://lorempixel.com/100/50/sports/2/',
          price: 13
        },
        maso3: {
          name: 'Flank steak',
          desc: 'Steak z pupku. Čistá svalovina, ktorá sa krája kolmo na vlákno steaku. Vyniká čistou mäsitou chuťou a je ideálny aj do sendvičou. Steak je plochý a váži od 350g.',
          image: 'http://lorempixel.com/100/50/sports/3/',
          price: 12
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
  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }


  li {
    display: inline-block;
    margin: 0 10px;
  }
.panel-body {
  background:#D6D6D6;

}

.well {
  background:#D6D6D6;
  animation-duration: 1s;
  animation-name: bounceIn;

}
  a {
    color: #42b983;
  }
</style>
