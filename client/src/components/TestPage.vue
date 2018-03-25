<template>
  <div class="test-page">
    <h1>MEVN</h1>
    <p>Hola desde componente TestPage en Vue.</p>
    <p>{{ test.title }}</p>
    <p>{{ test.description }}</p>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'TestPage',
  data () {
    return {
      test: []
    }
  },
  created () {
    this.fetchTest()
  },
  methods: {
    fetchTest () {
      /* let uri = 'https://jsonplaceholder.typicode.com/users' */
      var uri = 'http://localhost:3000/test'
      axios.get(uri).then((response) => { this.test = response.data }).catch((error) => { console.log(error) })
    }
  }
}
</script>
