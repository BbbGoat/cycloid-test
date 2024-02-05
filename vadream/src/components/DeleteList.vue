<template>
  <div class="modal">
    <div class="wrap">
        <article class="contents">
            <div class="close" @click="$emit('modalClose')">
                <font-awesome-icon :icon="['fas', 'xmark']" size="5x" />
            </div>
            <div v-if="deleteData.length === 0" class="null-msg">
                <div class="text">
                    <i>
                        <font-awesome-icon :icon="['fas', 'circle-exclamation']" size="xl" />
                    </i>
                    <div>
                        리스트가 비어있습니다.
                    </div>
                </div>
            </div>
            <div class="player" v-if="deleteData.length > 0">
                <div class="list" v-for="(item, idx) in deleteData" :key="idx">
                    <div class="inner">
                        <div class="img-area">
                            <img :src="item.url" alt="상품 이미지">
                        </div>
                        <div class="info">
                            <h3>{{ item.title }}</h3>
                            <div class="line">
                            <span>TYPE</span>
                            <span>{{ item.type }}</span>
                            </div>
                            <div class="line">
                            <span>SIZE</span>
                            <span>{{ item.size }}</span>
                            </div>
                            <div class="line">
                            <span>TIME</span>
                            <span>{{ item.time }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DeleteList',
    props: {
        deleteData: Array
    },
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
.wrap {
    display: grid;
    place-items: center;
    width: 600px;
    height: 100vh;
    margin: 0 auto;
}
.contents {
    position: relative;
    width: 100%;
    height: 650px;
    background: #fff;
    border-radius: 10px;
    overflow-y: scroll;
}
.close {
    position: fixed;
    margin: 1rem;
    cursor: pointer;
    transform: translateX(525px);
}

.null-msg {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.7rem;
    text-align: center;
    margin: 0 auto;
}
.null-msg .text {
    position: relative;
    padding: 7rem;
}
.null-msg .text i {
    display: block;
    margin-bottom: 1rem;
}
.null-msg .text::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #000;
}
.null-msg .text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #000;
}

.list {
  width: 170px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
}
/* 이미지영역 */
.img-area {
  position: relative;
  height: 120px;
  background-color: #ddd;
}
.img-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 정보영역 */
.info {
  font-size: 1.6rem;
  padding: 1rem;
}
.line {
  font-size: 1.2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  color: #505050;
}
.line span:nth-of-type(2) {
  width: 60%;
}
.line span:nth-of-type(2)::before {
  content: '·';
  margin-right: 10px;
}

/* 버튼영역 */
.btn-area {
  padding: 1rem;
}

.player {
  margin: 3rem;
}
.player .wrap {
  margin-bottom: 3rem;
}
.player .title {
  line-height: 2.5;
  margin-bottom: 0;
}
.player .play-btn {
  padding: 1.5rem 5rem;
  font-size: 1.4rem;
  border: 0;
  color: #fff;
  background: rgb(24 201 97);
  border-radius: 5px;
  cursor: pointer;
}
.player .list {
  width: 100%;
  margin-bottom: 10px;
}
.player .inner {
  display: flex;
  justify-content: space-between;
}
.player .img-area {
  width: 45%;
  height: 130px;
}
.player .info {
  width: 45%;
}
.player .btn-area {
  width: auto;
  height: 100%;
  cursor: pointer;
}
</style>