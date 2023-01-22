<template>
  <span v-for="(word, index) in words" :key="index"
        :style="{ animation: `typing ${speed/1000}s steps(${word.length}, end)`, animationFillMode: 'both' }">{{ word }}</span>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      currentWordIndex: 0
    }
  },
  mounted() {
    this.typingInterval = setInterval(() => {
      if (this.currentWordIndex < this.words.length - 1) {
        this.currentWordIndex++
      } else {
        this.currentWordIndex = 0
      }
    }, this.speed)
  },
  beforeDestroy() {
    clearInterval(this.typingInterval)
  }
}
</script>

<style>
@keyframes typing {
  from { width: 0; }
}
</style>
