<template>
  <wide-box />
</template>

<script>
import WideBox from "@/components/SmallBox.vue";

export default {
  name: "App",
  components: {
    WideBox,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
:root {
  font-size: 8px;
}
</style>
