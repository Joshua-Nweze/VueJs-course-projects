<template>
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-12 col-md-8 col-lg-6">
        <SearchBar @search="search"/>
        <div>
          <WeatherDetails :weather="weatherData" v-if="showWeatherDetails"/>

          <div v-else>
            Search a location to see it's current weather
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';

let weatherData = reactive({data: null})
let showWeatherDetails = ref(false)

function search(location) {
    if (location.trim() !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8368787296b15cf1c0f66331292a441d`)
            .then(res => res.json())
            .then(data => {
                weatherData.data = data;
                console.log(weatherData)
                showWeatherDetails.value = true
            })
            .catch(e => console.log(e))
    } else {
      showWeatherDetails.value = false
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
  background: #151638;
}


.form-control:focus {
  box-shadow: none;
  border-color: #f8f9fa;
  color: white;
}

.form-control{
  color: white;
}
</style>
