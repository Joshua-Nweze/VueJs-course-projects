<template>
    <div v-if="weather.data.cod == 200" class="mt-5">
        <div>
            <div class="text-start">Current weather report in {{ weather.data.name }}</div>

            <div class="mt-4">
                <div>
                    <img
                    :src="'https://openweathermap.org/img/wn/' + weather.data.weather[0].icon + '.png'"
                    alt="Weather icon"
                    height="150"
                    > 
                </div>
                <div>{{ weather.data.weather[0].main }} </div>
                <div>
                    <span class="temp fw-bold">{{ weather.data.main.temp.toFixed() }}<sup class="fw-normal">°c</sup></span>
                </div>

                <div>
                    <div class="row">
                        <div class="col">
                        Wind speed <br> {{ weather.data.wind.speed }} m/s
                        </div>
                        <div class="col">
                        Humidity <br> {{ weather.data.main.humidity }} %
                        </div>
                        <div class="col">
                        Pressure <br> {{ weather.data.main.pressure }} hPa
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div v-else-if="weather.data.cod == 404">
        <Error />
    </div>
</template>

<script setup>
import Error from './Error.vue'

let props = defineProps(['weather'])
</script>

<style scoped>
.temp {
    font-size: 70px;
}
</style>