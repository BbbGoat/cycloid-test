<template>
  <div class="btn-wrap">
    <button :type="type">
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
      type: String,
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
  background: rgb(3, 179, 233);
  border-radius: 5px;
  cursor: pointer;
}
</style>