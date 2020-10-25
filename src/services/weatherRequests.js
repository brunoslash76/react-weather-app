import api from '../config/api.config'

const getWeatherWithGeoCoordinates = async () => {
    try {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        return await api.get(
            `weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APPID}&lang=pt_br`
        )
    } catch (e) {
        throw new Error(e)
    }
}

export default getWeatherWithGeoCoordinates
