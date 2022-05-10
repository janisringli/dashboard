<style lang="scss" scoped src="@/styles/TimeClock.scss"></style>

<template>
  <div class="time-clock__wrapper">
    <div>
      <div class="wrapper__clock">
        <span class="clock__time">
          {{ hours }}
          <span class="time__colon">:</span>
          {{ minutes }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeClock",
  data: () => ({
    currentTime: new Date(),
  }),
  computed: {
    hours() {
      return this.currentTime.getHours();
    },
    minutes() {
      return this.currentTime.getMinutes();
    },
  },
  mounted() {
    const instance = this;
    setInterval(function () {
      instance.currentTime = new Date();
    }, 500);
  },
};
</script>
