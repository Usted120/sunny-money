import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather" >
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`https://raw.githubusercontent.com/bobangajicsm/react-weather-app/main/public/icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°c</p>
                <div className="details">
                    <div className="parameters-row">
                        <span className="parameter-label top">detalles</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">sensacion</span>
                        <span className="parameter-value">{data.main.feels_like}°c</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">viento</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">humedad</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;