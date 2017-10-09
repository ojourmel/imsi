<template>
  <div id="imsi">
    <md-toolbar>
      <md-button class="md-icon-button" @click="onToggleNav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">{{title}}</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="nav" @open="open('nav')" @close="close('nav')">
      <md-toolbar>
        <h3 class="md-title">imsi</h3>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>dashboard</md-icon>
          <span>Dashboard</span>
        </md-list-item>
        <md-list-item>
          <md-icon>settings</md-icon>
          <span>Settings</span>
        </md-list-item>
        <md-list-item>
          <md-icon>exit_to_app</md-icon>
          <span>Logout</span>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
#imsi {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
/*
import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

var model = new falcor.Model({ source: new HttpDataSource('/api/imsi.json') });
model.get('greeting').then((response) => {
  console.log(response.json.greeting);
});
model.get('creation').then((response) => {
  console.log(response.json.greeting);
});

var xmlhttp;
// compatible with IE7+, Firefox, Chrome, Opera, Safari
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open("GET", '/api/creation/', true);
xmlhttp.send();

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open("GET", '/api/test/', true);
xmlhttp.send();
*/


const onToggleNav = () => {
  this.$refs.nav.toggle();
}
const open = (ref) => {
  console.log(`Opened ${ref}`)
}
const close = (ref) => {
  console.log(`Closed ${ref}`)
}

export default {
  name: 'imsi',
  data() {
    return {
      title: "Hello world"
    }
  },
  methods: {
    onToggleNav,
    open,
    close,
  }
};
</script>