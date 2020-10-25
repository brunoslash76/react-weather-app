import React, { useEffect, useState } from 'react'

import getWeatherWithGeoCoordinates from '../../services/weatherRequests'
import MainWeatherInfo from '../../template/MainWeatherInfo'
import DetailsWeatherInfo from '../../template/DetailsWeatherInfo'
import { Container, MainContainer,  } from './styles'

const WeatherPage = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {

        getWeather()
        return () => {
            clearImmediate(interval)
        }
    }, [])

    const getWeather = async () => {
        try {
            const response = await getWeatherWithGeoCoordinates()
            console.log(response)
            setWeather(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const interval = setInterval(() => {
        getWeather()
    }, 300000)

    return (
        <Container>
            <MainContainer>
                <MainWeatherInfo
                    weather={weather}
                />
                <DetailsWeatherInfo
                    weather={weather}
                />
            </MainContainer>
        </Container>
    )
}

export default WeatherPage
