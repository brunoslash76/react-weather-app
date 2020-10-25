import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Subtitle, IconContainer, InfoContainer } from './styles';

function WeatherDetail({ icon, property, value }) {
    return (
        <Container>
            <IconContainer>
                <img src={require(`../../assets/${icon}`)} width="20px"/>
            </IconContainer>
            <InfoContainer>
                <Title>{property}</Title>
                <Subtitle>{value}</Subtitle>
            </InfoContainer>
        </Container>
    )
}

export default WeatherDetail
