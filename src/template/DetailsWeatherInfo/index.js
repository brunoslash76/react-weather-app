import React, { useEffect } from 'react'

import convertKelvinToCelcius from '../../utils/kelvinConversor'
import WeatherDetail from '../../components/WeatherDetail'

function DetailsWeatherInfo({ weather }) {
    useEffect(() => {
        console.log(weather)
    }, [])

    return (
        <div>
            <WeatherDetail
                icon="humidity.png"
                property="Humidade"
                value={weather && weather.main.humidity + '%'}
            />
            <WeatherDetail
                icon="air.png"
                property="Pressão do ar"
                value={weather && weather.main.pressure + 'PS'}
            />
            <WeatherDetail
                icon="wind.png"
                property="Velocidade do vento"
                value={weather && weather.wind.speed + 'km/h'}
            />
            <WeatherDetail
                icon="thermometer.png"
                property="Sensação térmica"
                value={
                    weather &&
                    convertKelvinToCelcius(weather.main.feels_like) + ' °C'
                }
            />
        </div>
    )
}

export default DetailsWeatherInfo
