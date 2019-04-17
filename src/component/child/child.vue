<template>
  <div>
    name: {{ name || "--" }}
    <br />
    <input :value="name" @change="handleChange" />
    <br />
    <br />
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>&nbsp;&nbsp;&nbsp;
      <button @click.stop="handleClick">重置失败</button>
    </div>
    <!--  -->
    <button v-on:click="$emit('welcome')">
      Click me to be welcomed
    </button>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: String,
    welcome:Function,
  },
  methods: {
    handleChange(e) {
      console.log(e)//input的change事件返回的对象里面可以直接拿到value值
      this.$emit("change", e.target.value);//触发当前实例上的事件。附加参数都会传给监听器回调。vm.$emit( eventName, […args] )
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    handleClick(e) {
      // 都会失败
      //e.stopPropagation();
    }
  }
};
</script>
