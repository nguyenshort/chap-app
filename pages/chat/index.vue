<template>
  <div class="wel-come-page flex justify-center items-center flex-wrap">
    <lottie-player
      src="https://assets6.lottiefiles.com/packages/lf20_utsfwa3k.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
    <lottie-player
      src="https://assets10.lottiefiles.com/packages/lf20_rd4wrn81.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
    <lottie-player
      src="https://assets3.lottiefiles.com/private_files/lf30_6jzgknvg.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  head() {
    return {
      script: [
        {
          src:
            'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
        }
      ]
    }
  }
}
</script>
