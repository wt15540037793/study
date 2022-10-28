<!-- Person 组件 -->
<template>
  <div>
    <h3 style="color:red">Count组件的和是：{{$store.state.countVuex.sum}}</h3>
    <input type="text" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <h5>第一个人名是：{{fristPersonName}}</h5>
    <ul>
      <li v-for="p in $store.state.personVuex.personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "张三",
    };
  },

  components: {},

  computed: {
    fristPersonName(){
      return this.$store.getters['personVuex/fristPersonName']
    }
  },

  mounted() {
    console.log(this)
  },

  methods: {
    addPerson() {
      const obj = { id: nanoid(), name: this.name };
      console.log(obj);
      this.$store.commit('personVuex/ADD_PERSON', obj);
    },
    addWang(){
       const objWang = { id: nanoid(), name: this.name };
       this.$store.dispatch("personVuex/addWang",objWang)
    }
  },
  watch: {},
  mixins: [],
};
</script>
<style  scoped>
</style>