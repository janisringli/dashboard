<template>
  <div class="small-box__wrapper">
    <div class="wrapper__time">
      <span class="time__hour"> {{ getHour() }}</span>
      <span class="time__colon">:</span>
      <span class="time__minute">{{ getMinute() }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/styles/SmallBox.scss"></style>
<script>
export default {
  name: "SmallBox",
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
