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
          <div class="info__temprature">9°/20°</div>
          <div class="info__humidity">
            Humidity: {{ info?.current?.humidity }}%
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
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=47.5160671&lon=8.5419603&exclude=hourly&units=metric&appid=09e31f3e5bdd8ad8441b635b33ba3dad"
      )
      .then((response) => {
        this.info = response.data;
        console.log(this.info);
      });
  },
};
</script>
