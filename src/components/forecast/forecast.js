import "./forecast.css";
import { Accordion,
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemButton
 } from "react-accessible-accordion";

const WEEK_DAYS = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInAWeek));

const Forecast = ({data}) =>{
    return (
    <>
        <label className="title">semana</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icons-small" src={`https://raw.githubusercontent.com/bobangajicsm/react-weather-app/main/public/icons/${item.weather[0].icon}.png`}/>
                                <label className="day"> {forecastDays[idx]} </label>
                                <label className="description"> {item.weather[0].description}</label>
                                <label className="min-max"> {Math.round(item.main.temp_min)}° / {Math.round(item.main.temp_max)}° </label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Sensacion</label>
                                <label>{item.main.feels_like}°</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Viento</label>
                                <label>{item.wind.speed}m/s</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humedad</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            
        </Accordion>
    </>)
}

export default Forecast;