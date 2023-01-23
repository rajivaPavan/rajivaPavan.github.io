<template>
  <span class="typing-text" >{{ currentWord  }}</span>
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
      currentWord: '',
      currentIndex: 0
    }
  },
  mounted() {
    this.typeWords();
  },
  methods: {
    typeWords() {
      // add character by character to currentWord at the speed specified
      // when currentWord is complete wait for 2s and then,
      // remove character by character from currentWord at double the speed specified
      // when currentWord is empty, move to next word in words array
      // when currentIndex is at the end of the words array, reset currentIndex to 0
      // repeat
      let word = this.words[this.currentIndex];
      let i = 0;
      let timer = setInterval(() => {
        if (i < word.length) {
          this.currentWord += word[i];
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            let j = word.length - 1;
            let timer2 = setInterval(() => {
              if (j >= 0) {
                this.currentWord = this.currentWord.slice(0, j);
                j--;
              } else {
                clearInterval(timer2);
                this.currentIndex++;
                if (this.currentIndex === this.words.length) {
                  this.currentIndex = 0;
                }
                this.typeWords();
              }
            }, this.speed /2);
          }, 2000);
        }
      }, this.speed);

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
/*blinking cursor animation for the span tag*/
.typing-text::after {
  content: '';
  display: inline-block;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% {
    border-right-color: transparent;
  }
}

</style>
