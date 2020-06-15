# allst-vue-sm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## fetch
```text
react -> fetch

Vue官网维护了一个网络请求，vue-resource,后期不维护了，推荐使用axios
vue -> axios:
    Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
    安装: axios npm install axios --save
    引入axios:
        // 使用AXios的第一步:引入Axios
        import Axios from "axios"
        // 使用AXios的第二步:将Axios挂载到Vue的原型上
        Vue.prototype.$axios = Axios
```
    
## 组件
```
定义Vue组件
什么是组件？ 组件的出现就是为了拆分Vue实例的代码量，能够让我们以不同的组件来划分不同的功能模块，
将来我们需要什么样的功能，就可以去调用对应的组件即可

组件化和模块化的不同：
+ 模块化是从代码的逻辑上划分的，方便代码分层开发，保证每个功能模块的职能单一
+ 组件化是UI界面的角度划分的，前端的组件化方便UI组件的重用

```

## 上传项目到github
```text
git init
git add * / 指定文件
git commt -m "提交信息"
git remote add origin https://github.com/ReturnTears/allst-vue-sm.git
git push -u origin master
```