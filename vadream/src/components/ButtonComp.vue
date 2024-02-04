<template>
  <div class="btn-wrap">
    <button>
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
      title: String,
    }
}
</script>

<style scoped>
.btn-wrap {

}
button {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.4rem;

  border: 0;
  color: #fff;
  border-radius: 5px;
  background: rgb(3, 179, 233);
}
</style>