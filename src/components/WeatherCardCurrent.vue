<template>
  <div class="weather-card-current__wrapper">
    <div class="wrapper__content">
      <div class="content__top-section">
        <div class="top-section__today">Today</div>
        <div class="top-section__temprature">15°</div>
      </div>
      <div class="content__stats">
        <img src="@/assets/svg/sun.svg" alt="sun" width="37px" />
        <div class="stats__info">
          <div class="info__temprature">9°/20°</div>
          <div class="info__humidity">Humidity: 56%</div>
          <div class="info__wind">Wind: 2m/s</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/styles/WeatherCardCurrent.scss"></style>
<script>
export default {
  name: "WideBox",
};
</script>
