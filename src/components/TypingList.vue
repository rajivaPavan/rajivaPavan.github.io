<template>
  <span class="typing-text" >{{ currentWord  }}</span>
</template>

<script>
// TODO: Work on this
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

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
      currentWord: '',
      currentIndex: 0
    }
  },
  mounted() {
    this.typeWords();
  },
  methods: {
    async typeWords() {
      // an iterative approach to typing words
      // add character by character to currentWord at the speed specified
      // when currentWord is complete wait for 2s and then,
      // remove character by character from currentWord at double the speed specified
      // when currentWord is empty, move to next word in words array
      // when currentIndex is at the end of the words array, reset currentIndex to 0
      // repeat
      while (true) {
        let word = this.words[this.currentIndex];
        let i = 0;
        while (i < word.length) {
          this.currentWord += word[i];
          i++;
          await delay(this.speed);
        }
        await delay(2000);
        while (i > 0) {
          this.currentWord = this.currentWord.slice(0, -1);
          i--;
          await delay(this.speed / 2);
        }
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
      }


    }
  }
}
</script>

<style scoped>
.typing-text {
  color: #0678e3;
  padding-right: 0.25em;
  border-right: 3px solid #0678e3;
}
</style>
