<template>
  <div id="imsi">
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
model.get('creation').then((response) => {
  console.log(response.json.greeting);
});

var xmlhttp;
// compatible with IE7+, Firefox, Chrome, Opera, Safari
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open("GET", '/api/creation/', true);
xmlhttp.send();

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open("GET", '/api/test/', true);
xmlhttp.send();

export default {
  name: 'imsi'
};
</script>

<style>
#imsi {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
