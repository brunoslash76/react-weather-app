import React from 'react'
import PropTypes from 'prop-types'

import convertKelvinToCelcius from '../../utils/kelvinConversor'
import { Container, Title } from './styles';

function Temperature({ temperature }) {
    return (
        <Container>
            <Title>{convertKelvinToCelcius(temperature)} °C</Title>
        </Container>
    )
}

Temperature.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Temperature
