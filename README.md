# React Weather App

This small system is composed by simple functional components.
The struture is based on maximum three levels, one main page, which is the single source of thruth that share the main data for your children. The templates is where we split the data and where the main logics and controllers acts.

The third level is the components, which control it's own actions and how no business logics.

## Page
Weather - Is responsible for requesting info from Open Weather Map and contains two children, one is the MainContainer and the other DetailsWeatherInfo, both get an the weather data.

## Template
MainWeatherInfo - Gets a weather data object to split the info in between your children. MainWeatherInfo has three children, Icon, MainInfo and Temperature. Each one gets it's own data to handle.

DetailsWeatherInfo - Gets a weather data object to split the info in between your children. DetailsWeatherInfo may have as much children as wanted, but mainly is composed by a WeatherDetail component which can render all details need to the application.

## Components
Icon - Is a component used to render weather icon and it's programmed to get a prop which is the icon id to render the proper Icon icon prop is required.

MainInfo - Is a component to render the condition and the location, receive two props, conditon and location both are required.

Temperature - Render the temperature, receive a prop temperature which is a number and it is required.

WeatherDetail - Is a multi porpose component to render weather details with icon, property and value of the property.

## AXIOS
The system is using axios to make requests to Open Weather Map, all configurations are been made in config folder in `api.config.js`

## Requests
All requrests are been made in services folder in weatherRequests.js file.

## Temperature conversion
As known the temperature comes from the api in kelvin. System uses a conversor which is stored in utils kelvinConversor.js file

## Styles
System is using styled components to create our CSS in JS and for our global styles system is using createGlobalStyles in globalStyles folder.

## Boiler Plate
I am using a boilerplate created by myself which includes storybook, but for sake of simplicity I am not implementing any story, but can be imoplemented easely. The patters is inside each component, template or page create a file with the name of the component .storybook and config the file.


