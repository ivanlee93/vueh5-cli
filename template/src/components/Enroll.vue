<template>
  <div class="enroll">
    {{msg}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Enroll',
  computed: {
    ...mapState('enroll', ['test', 'count'])
  },
  methods: {
    ...mapActions('enroll', ['increment',
      'decrement', 'getProvince'])
  },
  data () {
    return {
      msg: '我是Enroll组件'
    }
  },
  mounted () {
    try {
      this.getProvince({
        token: '1b35d1d2cfcd57d6c5d984432ea5b488',
        pid: 912,
        id: 26      }).then(res => {
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
<style lang="stylus" scoped>
</style>
