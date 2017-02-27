<template>
    <div class="col-md-12">
      <div class="well well-sm gray">
        <form class="form-horizontal" method="post">
          <fieldset>
            <legend class="text-center header">Kontaktuj nás</legend>

            <div class="form-group">
              <span class="col-md-1 col-md-offset-2 text-center">Meno</span>
              <div class="col-md-8">
                <input id="fname" name="name" type="text" placeholder="Meno" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <span class="col-md-1 col-md-offset-2 text-center">Priezvisko</span>
              <div class="col-md-8">
                <input id="lname" name="name" type="text" placeholder="Priezvisko" class="form-control">
              </div>
            </div>

            <div class="form-group">
              <span class="col-md-1 col-md-offset-2 text-center">Email</span>
              <div class="col-md-8">
                <input id="email" name="email" type="text" placeholder="Emailová adresa" class="form-control">
              </div>
            </div>

            <div class="form-group">
              <span class="col-md-1 col-md-offset-2 text-center">Telefón</span>
              <div class="col-md-8">
                <input id="phone" name="phone" type="text" placeholder="Telefón" class="form-control">
              </div>
            </div>

            <div class="form-group">
              <span class="col-md-1 col-md-offset-2 text-center">Správa</span>
              <div class="col-md-8">
                <textarea class="form-control" id="message" name="message" placeholder="Odpovieme Vám behom dvoch pracovných dní." rows="7"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg">Pošli správu</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    contact: 'contact',
    data () {
      return {

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
.gray {
  background:#D6D6D6;
}
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
