<template>
  <main>
    <div class="wrap">
      <article class="left-side">
        <div class="top">
          <div class="menu">
            <div class="del-list" @click="modalOpen = true">
              <i>
                <font-awesome-icon :icon="['far', 'folder-open']" />
              </i>
              <span>삭제 리스트</span>
            </div>
            <div class="upload-btn">
              <button-comp :type="button" title="이미지, 영상 업로드"></button-comp>
            </div>
          </div>
        </div>
        <!-- 리스트1 -->
        <section class="mid">
          <h2 class="title">최근 재생 된 컨텐츠 (Carousel)</h2>
          <div class="slide">
            <!-- 스와이퍼 -->
            <swiper
              :modules="modules"
              :slides-per-view="'auto'"
              :space-between="15"
              :freeMode="true"
            >
              <!-- map -->
              <swiper-slide v-for="(item,idx) in prdData" :key="idx" style="width: auto;">
                <div class="list">
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
                    <div class="btn-area">
                      <!-- isAdd Boolean v-if 적용해서 토글버튼 -->
                      <button class="add-btn" type="button" v-if="item.isAdded === false" @click="handleAdd(item)">추가하기</button>
                      <button class="added-btn" type="button" v-if="item.isAdded === true">추가됨</button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            
          </div>
        </section>
        <!-- 리스트2 -->
        <section class="bot">
          <h2 class="title">전체 컨텐츠</h2>
          <div class="contents">
            <!-- map -->
            <div class="list" v-for="(item, idx) in prdData" :key="idx">
              <div class="inner">
                <div class="img-area">
                  <div class="icon" role="button" tabindex="1" @click="handleDelete(item)">
                    <font-awesome-icon :icon="['fas', 'trash-can']" size="xl" />
                  </div>
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
                <div class="btn-area">
                  <button class="add-btn" type="button" v-if="item.isAdded === false" @click="handleAdd(item)">추가하기</button>
                  <button class="added-btn" type="button" v-if="item.isAdded === true">추가됨</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <aside class="right-side">
        <div class="player">
          <div class="wrap">
            <h2 class="title">플레이 리스트</h2>
            <button class="play-btn" type="button" @click="fullPageChange">재생</button>
          </div>
          <!-- map -->
          <div class="list" v-for="(item, idx) in playerData" :key="idx">
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
              <div class="btn-area" @click="handleClean(item)">
                <font-awesome-icon :icon="['fas', 'xmark']" size="xl" class="del-btn" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <play-list v-if="fullPage === true"></play-list>
    <delete-list :deleteData="deleteData" v-if="modalOpen" @modalClose="modalClose"></delete-list>
  </main>
</template>

<script>
import ButtonComp from './ButtonComp.vue';
import prdData from '@/data/prdData.js';
import DeleteList from './DeleteList.vue';
import PlayList from './PlayList.vue';

// 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

export default {
  name: 'MainComp',
  data() {
    return {
      prdData: prdData,
      playerData: [],
      deleteData: [],
      modalOpen: false,
      fullPage: false,
    }
  },
  methods: {
    handleAdd(item) {
      item.isAdded = true;
      this.playerData.push(item);
    },
    handleClean(item) {
      item.isAdded = false;
      this.playerData = this.playerData.filter((pdata) => pdata.title != item.title);
    },
    handleDelete(item) {
      console.log(this.prdData, item.title)
      this.prdData = this.prdData.filter((pdata) => pdata.title != item.title );
      this.playerData = this.playerData.filter((pdata) => pdata.title != item.title);
      this.deleteData.push(item);
      console.log(this.deleteData);
    },
    modalClose() {
      this.modalOpen = false;
    },
    fullPageChange() {
      const documentElement = document.documentElement;
      if (document.fullscreenElement === null) {
        documentElement.requestFullscreen();
        this.fullPage = true;
      } else {
        document.exitFullscreen();
        this.fullPage = false;
      }
    }
  },
  components: {
    ButtonComp,
    DeleteList,
    PlayList,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode]
    };
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* /////////////// top /////////////// */
.top {
  margin: 3rem;
}
.menu {
  display: flex;
  justify-content: end;
  gap: 2rem;
}
.del-list {
  font-size: 1.4rem;
  background: #e5e5e5;
  border-radius: 5px;
  padding: 1.5rem;
  cursor: pointer;
}
.del-list i {
  margin-right: 0.4rem;
}

/* /////////////// section /////////////// */
.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.contents {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, auto));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.list {
  width: 170px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
  overflow: hidden;
}
/* 이미지영역 */
.img-area {
  position: relative;
  height: 120px;
  background-color: #f5f5f5;
}
.img-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon {
  position: absolute;
  right: 0;
  padding: 0.4rem;
  cursor: pointer;
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
.add-btn {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.4rem;

  border: 0;
  color: #fff;
  background: rgb(3, 179, 233);
  border-radius: 5px;
  cursor: pointer;
}
.added-btn {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.4rem;

  border: 0;
  color: rgb(3, 179, 233);
  background: #fff;
  border: 1px solid rgb(3, 179, 233);
  border-radius: 5px;
  cursor: pointer;
}



aside.right-side {
  border-left: 1px solid #e5e5e5;
}
.player {
  position: sticky;
  width: 360px;
  top: 3rem;
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
  height: auto;
}
.player .info {
  width: 45%;
}
.player .btn-area {
  width: auto;
  height: 100%;
  cursor: pointer;
}
article.left-side {
  width: 77%;
}
article > section {
  max-width: 1440px;
  margin: 3rem;
}
</style>