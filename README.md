# vueh5_init_cli

> 自己工作用的脚手架 , 封装了用vue写H5的环境

## 基本用法
``` bash
$ npm install -g vue-cli
$ vue init ivanlee93/vueh5-cli vueh5simple
$ cd vueh5simple
$ npm install
$ npm run dev
```

## 说明

使用了vux2的模板，开发微信相关功能的H5非常方便

具体文档可以看 https://doc.vux.li/zh-CN/

封装了自动注册router和store , Api使用flyio并封装

在单独的页面store.js中增加了namespaced:true。需要根据文件名来区分state及commit，这样子不同的store中的方法重名也不需要担心出错了。具体使用可以加actions，使用vuex的mapState、mapActions辅助函数方便使用。
``` js
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('enroll', ['test', 'count'])
  },
  methods: {
    ...mapActions('enroll', ['increment',
      'decrement', 'getProvince'])
  },
}
```
具体用法请看 https://github.com/spencer1994/vue-chunkRoutesStore

适配方案使用 postcss-px-to-viewport-lagou 
``` js
"postcss-px-to-viewport-lagou": {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
      propertyBlacklist: ['border'], // 指定不转换为视窗单位的属性，可以自定义，可以无限添加,建议定义一至两个通用的类名
      // selectorBlackList: ['.ignore', 'weui'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['weui'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      LibraryUI: ['vux'], // 使用的第三方ui库
      libraryRoot: 'node_modules', // 使用的第三方ui库，目录
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
   }
```
  自动转换vm或者rem单位可忽略第三方ui，比如vux
  
  注意：
  
  使用前请先在config.js中配置与后台规定的表示响应成功的变量，否则会导致接口返回异常。

