<template>
  <!-- <TimeClock /> -->
  <WeatherCardCurrent></WeatherCardCurrent>
</template>

<script>
// import TimeClock from "@/components/TimeClock.vue";
import WeatherCardCurrent from "@/components/WeatherCardCurrent.vue";

export default {
  name: "App",
  components: {
    // TimeClock,
    WeatherCardCurrent,
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
