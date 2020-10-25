import React from 'react'
import PropTypes from 'prop-types'
import { Container, Subtitle, Title } from './styles'

function MainInfo({ condition, location }) {
    return (
        <Container>
            <Title>{condition}</Title>
            <Subtitle>{location}</Subtitle>
        </Container>
    )
}

MainInfo.propTypes = {
    condition: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default MainInfo
