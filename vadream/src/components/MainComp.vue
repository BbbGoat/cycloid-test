<template>
  <main>
    <article>
      <div class="menu">
        <div class="del-list">
          <i>아이콘</i>
          <span>삭제 리스트</span>
        </div>
        <div class="upload-btn">
          <button-comp :type="button" title="이미지, 영상 업로드"></button-comp>
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
        <div>
          <!-- 전체리스트 map -->
          <div class="content">
            <div class="inner">
              <div class="img-area">
                <img src="" alt="상품 이미지">
              </div>
              <h3>영상제목</h3>
              <div class="info">
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
            </div>
          </div>
        </div>
      </section>
    </article>
    <aside></aside>
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

</style>