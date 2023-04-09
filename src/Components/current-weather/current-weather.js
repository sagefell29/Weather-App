import "./current-weather.css";

const capitalize = (a) => {
  var s = a.split(" ");
  var ans = "";
  s.forEach((word) => {
    ans += word.charAt(0).toUpperCase() + word.slice(1);
    ans += " ";
  })
  return ans;
};

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="wd">{capitalize(data.weather[0].description)}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="Weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label, det">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like: </span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind: </span>
            <span className="parameter-value">{Math.round(data.wind.speed)}m/s </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity: </span>
            <span className="parameter-value">{Math.round(data.main.humidity)}% </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure: </span>
            <span className="parameter-value">{Math.round(data.main.pressure)}hPa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
