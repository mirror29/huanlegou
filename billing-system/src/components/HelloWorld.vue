<template>
  <div>
    <div class="block">
        <span class="demonstration">不显示间断点</span>
        <el-slider
          v-model="value6"
          :step="10">
        </el-slider>
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <el-slider
          v-model="value7"
          :step="10"
          show-stops>
        </el-slider>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value6: 0,
      value7: 0
    }
  }
}
</script>
