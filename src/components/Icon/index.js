import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Icon = ({ iconId }) => {
    return (
        <Container>
            <img src={iconId && require(`../../assets/${iconId}.png`)} width="80px"/>
        </Container>
    )
}

Icon.propTypes = {
    iconId: PropTypes.string.isRequired
}

export default Icon
