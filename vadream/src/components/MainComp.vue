<template>
  <main>
    <div class="wrap">
      <article class="left-side">
        <div class="top">
          <div class="menu">
            <div class="del-list">
              <i>아이콘</i>
              <span>삭제 리스트</span>
            </div>
            <div class="upload-btn">
              <button-comp :type="button" title="이미지, 영상 업로드"></button-comp>
            </div>
          </div>
        </div>
        <!-- 리스트1 -->
        <section>
          <h2>최근 재생 된 컨텐츠 (Carousel)</h2>
          <div class="slide">
            <!-- 스와이퍼 -->
          </div>
        </section>
        <!-- 리스트2 -->
        <section>
          <h2>전체 컨텐츠</h2>
          <div class="contents">
            <!-- 전체리스트 map -->
            <div class="list">
              <div class="inner">
                <div class="img-area">
                  <img src="/images/prd1.png" alt="상품 이미지">
                </div>
                <div class="info">
                  <h3>영상제목</h3>
                  <div class="line">
                    <span>TYPE</span>
                    <span>Video</span>
                  </div>
                  <div class="line">
                    <span>SIZE</span>
                    <span>20 MB</span>
                  </div>
                  <div class="line">
                    <span>TIME</span>
                    <span>01:00</span>
                  </div>
                </div>
                <div class="btn-area">
                  <!-- isAdd Boolean v-if 적용해서 토글버튼 -->
                  <button class="add-btn" type="button">추가하기</button>
                  <button class="added-btn" type="button">추가됨</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <aside class="right-side"></aside>
    </div>
  </main>
</template>

<script>
import ButtonComp from './ButtonComp.vue';

export default {
  name: 'MainComp',
  props: {

  },
  components: {
    ButtonComp
  }  
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
}

.top {
  margin: 3rem;
}
.menu {
  display: flex;
  justify-content: end;
}
.list {
  width: 170px;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  overflow: hidden;
}

/* 이미지영역 */
.img-area {
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
  width: 30%;
  height: 100vh;
  background: burlywood;
}
article.left-side {
  width: 70%;
  /* height: 100vh; */
}
</style>