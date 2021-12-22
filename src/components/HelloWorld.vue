<template>
  <div class="bawrowcenter">
      <br><br><h1>{{ msg }}</h1>
      <h5>Enjoy your self:)</h5>
      <br><br>
      <h1>6 Dobbies</h1>
      <ul>
        <li><a href="https://github.com/ptkeb" target="_blank" rel="noopener">🐻 권대안</a></li>
        <li><a href="https://github.com/mggr27" target="_blank" rel="noopener">🐉 김아라</a></li>
        <li><a href="https://github.com/aNnaHmiK" target="_blank" rel="noopener">💩 김한나</a></li>
        <li><a href="https://github.com/YoojinMa" target="_blank" rel="noopener">🦥 마유진</a></li>
        <li><a href="https://github.com/minstitia" target="_blank" rel="noopener">🧎🏼‍♂️ 이상민</a></li>
        <li><a href="https://github.com/chaeljin" target="_blank" rel="noopener">🦮 정은진</a></li>
      </ul>
      <br><br>
      <h1>About</h1>
      <ul>
        <li><a href="https://github.com/6-Dobbies" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://bit.ly/3pK8ehP" target="_blank" rel="noopener">Notion</a></li>
        <!-- <li><a href="" target="_blank" rel="noopener">Contact Us</a></li> -->
        <router-link to="/contactuspage"><li>Contact Us</li></router-link>
      </ul>
      <br><br>
      <h1>뭘 더 넣지...??</h1>
      <ul>
        <li><a href="" target="_blank" rel="noopener">●●●</a></li>
        <li><a href="" target="_blank" rel="noopener">■■■</a></li>
        <li><a href="" target="_blank" rel="noopener">▲▲▲</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
