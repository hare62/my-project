<template>
    <div id="app">
        <event :name="name" @change="handleEventChange"></event>
        <h2>我是从页面获取的 {{this.$store.state.count}}</h2>
        <h2>我是从Getters页面获取的计算后的 {{this.$store.getters.getStateCount}}</h2>
        <div>conunt 的值 {{this.$store.state.count}}</div>
        <button @click="addFun">+</button>
        <button @click="reductionFun">-</button>
        <h1>{{count1}}</h1>
    </div>
</template>
<script>
import Event from "../../component/child/child.vue"
import {mapState,mapActions,mapGetters} from "vuex"
export default{
    components:{
        Event,
    },
    data:()=>{
        return {
            name:"",
        }
    },
    computed:{
       ...mapState({
         count1:state => state.count
       })
    },
    methods:{
        handleEventChange(val){
            this.name = val;
        },
        addFun(){
          // this.$store.commit("add");
          this.$store.dispatch("addFun")

        },
        reductionFun(){
          // this.$store.commit('reduction');
           this.$store.dispatch("reduction")
        }
    }
}
</script>
