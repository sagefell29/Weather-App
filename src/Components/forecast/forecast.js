import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import './forecast.css';

const capitalize = (a) => {
  var s = a.split(" ");
  var ans = "";
  s.forEach((word) => {
    ans += word.charAt(0).toUpperCase() + word.slice(1);
    ans += " ";
  })
  return ans;
};

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek - 1, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek - 1)
  );

    // console.log(forecastDays);

  return (
    <>
      <label className="title">Daily Prediction for the Week</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          // return
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label htmlFor="" className="day">{forecastDays[idx]} </label>
                  <label htmlFor="" className="desc">{capitalize(item.weather[0].description)} </label>
                  <label htmlFor="" className="minmax">{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Pressure: </label>
                  <label htmlFor="" className="data">{item.main.pressure} hPA</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Humidity: </label>
                  <label htmlFor="" className="data">{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Clouds: </label>
                  <label htmlFor="" className="data">{item.clouds.all} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Wind Speed: </label>
                  <label htmlFor="" className="data">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Sea Level: </label>
                  <label htmlFor="" className="data">{item.main.sea_level} ms</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="" className="label">Feels Like: </label>
                  <label htmlFor="" className="data">{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
