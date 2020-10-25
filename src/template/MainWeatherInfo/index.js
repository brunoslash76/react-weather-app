import React, { useEffect } from 'react'

import Icon from '../../components/Icon'
import MainInfo from '../../components/MainInfo'
import Temperature from '../../components/Temperature'
import { Container } from './styles'

const MainWeatherInfo = ({ weather }) => {

    useEffect(() => {
        console.log(weather)
    }, [weather])


    return (
        <Container>
            <Icon
                iconId={weather && weather.weather[0].icon}
            />
            <MainInfo
                condition={weather && weather.weather[0].description}
                location={weather && weather.name}
            />
            <Temperature
                temperature={weather && weather.main.temp}
            />
        </Container>
    )
}

export default MainWeatherInfo
