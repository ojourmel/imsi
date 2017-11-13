<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <ul>
      <li><button v-on:click="sayMessage()">Hello</button></li>
    </ul>
  </div>
</template>

<script>
import { http } from "@/services/http.service";

export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.message = "loading...";
    http.get("/creators").then((value) => {
      this.message = value.data.message;
    });
  },
  methods: {
    sayMessage: function() {
      console.log(this.message);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
