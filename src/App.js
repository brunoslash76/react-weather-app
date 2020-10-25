import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import WeatherPage from './pages/Weather'

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <WeatherPage />
        </Fragment>
    )
}

export default App
