<template>
  <section class="player-section" @click="$emit('fullpageClose')">
    <div class="player-box" >
      <img :src="imgUrl" alt="이미지" ref="targetImg"  />
    </div>
  </section>
</template>

<script>
export default {
  name: "PlayList",
  props: {
    playerData: Array,
  },
  data() {
    return {
      imgUrl: '',
    }
  },
  mounted() {
    // 초기값
    this.$refs.targetImg.src = this.playerData[0].url;
    
    const maxLength = this.playerData.length;
    let num = 1;

    const interval = setInterval(()=>{
      if (num >= maxLength) {
        clearInterval(interval);
      } else {
        this.imgUrl = this.playerData[num].url;
        num++;
      }
    },2000)
  },
};
</script>

<style scoped>
.player-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 50;
}
.player-box {
  width: 100%;
  height: 100vh;
}
.player-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
