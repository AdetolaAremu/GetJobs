<template>
  <div @click="showmodal = false">
    <div v-if="showmodal">
      <section class="bg-gray-200 h-full w-full fixed top-0 left-0 z-10 opacity-50"></section>
      <div class="inset-0 absolute h-full flex">
        <div class="m-auto z-20 bg-white rounded h-60 w-80">
          <p>
            <slot name="body"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showmodal:true
    }
  }
}
</script>

<style>

</style>