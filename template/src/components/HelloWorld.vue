<template>
  <div class="hello">
    <img src="../assets/logo.png"
         alt="">
    <h1>{{ count }}</h1>
    <h2 @click="increment">Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org"
           target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org"
           target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
           target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
           target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2 @click="decrement">Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/"
           target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
           target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
           target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
           target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState('demo', ['test', 'count'])
  },
  methods: {
    ...mapActions('demo', ['increment',
      'decrement', 'getProvince'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    try {
      this.getProvince({
        token: '1b35d1d2cfcd57d6c5d984432ea5b488',
        pid: 912,
        id: 26 }).then(res => {
          console.log('页面中接口回调后的提示：' + res.shop_name)
          console.log(res)
        })
      // this.getProvince({
      //   appid: 'bb876d15cbe0320032e6150ad36b45ce',
      // }).then(res => {
      //   console.log('页面中接口回调后的提示：' + res.data.city)
      // })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个 -->
<style lang="stylus" scoped>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1, h2 {
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
}
</style>
