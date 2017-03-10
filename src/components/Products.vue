<template>
  <div id="product">
    <ul>
      <li v-for="prod in products">

        <div class="accountBox">
          <br>
          <h1 class="accountHeader">{{prod.name}}</h1>
          <br>
          <div class="col-sm-12" >
            <div class="animate-panel">
              <div class="panel-body">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h4>{{prod.desc}}</h4>
                    </div>
                  </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <img v-bind:src=prod.image>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="stats-title">
                    <h4>{{prod.price}}</h4>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </li>
      </ul>
  </div>
</template>


<script>
  export default {
    prod: "#product",
    data () {

      return {
        products: {
          maso1: {
            name: 'T-bone steak',
            desc: '2 steaky v jednom. Ten väčší kúsok je nízka roštenka. Menší kúsok sviečkovica. Priemerná porcia má od 500 do 800g.',
            image: 'http://lorempixel.com/100/50/sports/1/',
            status: 'available',
            price: 15.5 + "€"
          },
          maso2: {
            name: 'RibEye steak',
            desc: 'Je rez z vysokej roštenky. Je o čosi tuhší ako sviečkovica, ale vďaka mramorovaniu a tuku dostáva hovädziu chuť. Priemerná porcia má od 300-400g.',
            image: 'http://lorempixel.com/100/50/sports/2/',
            price: 13 + "€"
          },
          maso3: {
            name: 'Flank steak',
            desc: 'Steak z pupku. Čistá svalovina, ktorá sa krája kolmo na vlákno steaku. Vyniká čistou mäsitou chuťou a je ideálny aj do sendvičou. Steak je plochý a váži od 350g.',
            image: 'http://lorempixel.com/100/50/sports/3/',
            price: 12 + "€"
          },
        }
      }
    },
    computed: {
      aDoub: function (){
        return this.maso1.name + " " + this.maso1.desc + " " + this.maso2.price
      },
      bDoub: function (){
        return this.maso2.name + " " + this.maso2.decs
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
