<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

var model = new falcor.Model({source: new HttpDataSource('/api/imsi.json')});
model.get('greeting').then((response) => {
  console.log(response.json.greeting);
});

export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
