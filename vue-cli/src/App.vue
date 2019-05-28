<template>
  <div id="app">
    <app-header></app-header>


    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, harum ullam. Aperiam quae repudiandae quas, corporis illo labore accusantium inventore sint eveniet incidunt possimus totam ex laboriosam eius asperiores sapiente.</p>
      </div>
    </div>


<router-view></router-view>
<router-link to="/">Home</router-link>
<router-link to="/image">Other</router-link>
<router-link to="/grid">Next</router-link>


    <app-footer></app-footer>


  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        show: true,
      }
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
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
    color: #666666;
  }

</style>
