<template>
    <div class='dialog' @click='hideMask' ref='content'>
        <slot></slot>
    </div>
</template>    
 
<script>
export default {
  data(){
    return{
 
    }
  },
  methods:{
    hideMask(event){
      let event_1 = event.currentTarget
      let event_2 = event.target
      if( event_1== event_2){
        this.$emit("hideMask")
      }
    },
  }
}
</script>
 
<style lang="scss" scope>
    .dialog{
      position: fixed;
      z-index: 30;
      height: 100vh;
      width: 100vh;
      display: flex;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      background-color: rgba(44, 52, 60,.7);
       
    }
    
</style>