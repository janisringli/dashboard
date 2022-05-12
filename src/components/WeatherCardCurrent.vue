<template>
  <div class="weather-card-current__wrapper">
    <div class="wrapper__content">
      <div class="content__top-section">
        <div class="top-section__today">Today</div>
        <div class="top-section__temprature">
          {{ Math.floor(info?.current?.temp) }}°
        </div>
      </div>
      <div class="content__stats">
        <img class="test" src="@/assets/svg/sun.svg" alt="sun" />
        <div class="stats__info">
          <div class="info__temprature">
            <!-- hello {{ info?.daily?.temp?.min }} -->
          </div>
          <div class="info__humidity">
            Humidity: {{ info?.current?.wind_speed }}%
          </div>
          <div class="info__wind">
            Wind: {{ Math.floor(info?.current?.wind_speed * 3.6) }} Km/h
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/styles/WeatherCardCurrent.scss"></style>
<script>
import axios from "axios";
export default {
  name: "WeatherCardCurrent",
  data() {
    return {
      info: null,
    };
  },
  beforeMount() {
    axios.get(process.env.VUE_APP_TEST).then((response) => {
      this.info = response.data;
      console.log(this.info);
    });
  },
};
</script>
