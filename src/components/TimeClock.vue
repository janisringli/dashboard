<template>
  <div class="Time-clock__wrapper">
    <SmallBox
      ><div class="wrapper__time">
        <span class="time__hour"> {{ getHour() }}</span>
        <span class="time__colon">:</span>
        <span class="time__minute">{{ getMinute() }}</span>
      </div></SmallBox
    >
  </div>
</template>
<style lang="scss" scoped src="@/styles/TimeClock.scss"></style>
<script>
import SmallBox from "@/components/SmallBox.vue";

export default {
  name: "TimeClock",

  components: {
    SmallBox,
  },
  methods: {
    getHour() {
      const current = new Date();
      const hour = current.getHours();

      return hour;
    },
    getMinute() {
      const current = new Date();
      const minute = current.getMinutes();
      return minute;
    },
  },
};
</script>
