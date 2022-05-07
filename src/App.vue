<template>
  <TimeClock />
</template>

<script>
import TimeClock from "@/components/TimeClock.vue";

export default {
  name: "App",
  components: {
    TimeClock,
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
