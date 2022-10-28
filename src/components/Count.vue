<!-- count组件 -->
<template>
  <div>
    <h3>现在的和为：{{ sum }}</h3>
    <h6>我的学校是：{{ school }}</h6>
    <h6>我的学科是：{{ subject }}</h6>
    <h6>放大十倍的值：{{ bigSum }}</h6>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="jiAdd(n)">遇到奇数相加</button>
    <button @click="waitAdd(n)">等一等再加</button>

    <h3 style="color:red">Person组件的第一个人名是：{{fristPersonName}}</h3>
  </div>
</template>

<script>
// vuex五大核心
// state   状态 存储数据
// actions 逻辑 可以存放异步 不可以直接更改数据 只能调用mutatuions    》 dispatch 分发
// mutatuions 加工器 直接更改state中的数据           》 commit 提交
// getters    相当于 计算属性     return    不可以异步
// modules    模块化 将一个store按需求拆分成多个store  方便管理 解决代码冗余问题 使得项目结构清晰
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex' // 1:引入 映射
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },

  components: {},

  computed: {
    // bigSum() {
    //   return this.$store.state.sum * 10;
    // },
    // sum(){
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    //对象的写法  不常用  
    // ... mapState({
    //   sum:'sum',
    //   school:'school',
    //   subject:'subject'     
    // })
    //数组写法 常用 
    ...mapState('countVuex',['sum','school','subject']),//2 计算属性 属性 都放在computed，用数组写法 的展开方式
    ...mapGetters('countVuex',['bigSum']),
    ...mapGetters('personVuex',['fristPersonName'])
  },

  mounted() {
    // const x = mapState(['sum','school','subject'])
    // console.log(x)
    // let a = 100;
    // let b ={a:a}
    // let c = {a}
    // console.log(b,c)
    // let d  = {a:'a'}
    // console.log(d)

  },

  methods: {
    // JIA(e){
    //  console.log(e)
    // }
    // add() {
    //   this.$store.commit("JIA", this.n); //第一个参数 动作名字  值
    //   // this.sum += this.n;
    // },
    // jiAdd() {
    //   this.$store.dispatch("jiAdd", this.n);
    // },
    // waitAdd() {
    //   this.$store.dispatch("waitAdd", this.n);
    // },
    ...mapActions('countVuex',['jiAdd','waitAdd']),
    ...mapMutations('countVuex',['JIA'])
  },
  watch: {},
  mixins: [],
};
</script>
<style  scoped>
</style>