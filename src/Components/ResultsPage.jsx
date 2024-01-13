import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MeteoApp.css';




const SearchPage = () => {
  const api_key = "233be5e7d3b9e3b33549d7e97fc295b2";
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [anotherData, setAnotherData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async () => {
    setLoading(true);
    setError(null);

    try {
      if (city === "") {
        throw new Error("Inserisci il nome della città");
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("La località inserita non è valida");
      }

      let data = await response.json();
      setWeatherData(data);

      
      let anotherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}` ;
      let anotherResponse = await fetch(anotherUrl);

      if (!anotherResponse.ok) {
        throw new Error("Errore nella seconda richiesta");
      }

      let anotherData = await anotherResponse.json();
      setAnotherData(anotherData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

 
  
  return (
    <div>
      <input
        type="text"
        className="cityInput w-50"
        placeholder="Inserisci il nome della Città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={search}>Cerca</button>

      {loading && <p>Caricamento...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
     <div className="container align-items-center">
     <div className="row justify-content-center">
       <div className="col-md-4 mb-3 mx-auto divEst">
         <div className=" bordoDiv text-center">
           <h1>Condizioni Meteo Attuali Per {weatherData.name}</h1>
           <p>Umidità: {weatherData.main.humidity}%</p>
           <p>Velocità Del Vento: {weatherData.wind.speed} km/h</p>
           <p>Temperatura: {Math.floor(weatherData.main.temp) - 273}°C</p>
           <p>Descrizione: {(weatherData.weather[0].description)}</p>
           <p>Pressione: {weatherData.main.pressure} hPa</p>
         </div>
       </div>
     </div>
   </div>
   
      )}

      {anotherData && (
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv ">
          <p className=" PrevProx">Previsioni del {anotherData.list[4].dt_txt} </p>
          <p>E' previsto vento alla velocità di {anotherData.list[4].wind.speed} km/h</p>
          <p>Con una temperatura di {Math.floor(anotherData.list[4].main.temp)-273}°C</p>
          <p>Un'umidità del {anotherData.list[4].main.humidity}%</p>
          <p>Previsioni atmosferiche {anotherData.list[4].weather[0].description} </p>
        </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv">
            <p className="PrevProx">Previsioni del{anotherData.list[7].dt_txt} </p>
            <p>E' previsto vento alla velocità di {anotherData.list[7].wind.speed} km/h</p>
            <p>Con una temperatura di {Math.floor(anotherData.list[7].main.temp)-273}°C</p>
            <p>Un'umidità del {anotherData.list[7].main.humidity}%</p>
            <p>Previsioni atmosferiche {anotherData.list[7].weather[0].description} </p>
          </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv">
            <p className="PrevProx">Previsioni del{anotherData.list[10].dt_txt} </p>
            <p>E' previsto vento alla velocità di {anotherData.list[10].wind.speed} km/h</p>
            <p>Con una temperatura di {Math.floor(anotherData.list[10].main.temp)-273}°C</p>
            <p>Un'umidità del {anotherData.list[10].main.humidity}%</p>
            <p>Previsioni atmosferiche {anotherData.list[10].weather[0].description} </p>
          </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv">
              <p className="PrevProx">Previsioni del{anotherData.list[13].dt_txt} </p>
              <p>E' previsto vento alla velocità di {anotherData.list[13].wind.speed} km/h</p>
              <p>Con una temperatura di {Math.floor(anotherData.list[13].main.temp)-273}°C</p>
              <p>Un'umidità del {anotherData.list[13].main.humidity}%</p>
              <p>Previsioni atmosferiche {anotherData.list[13].weather[0].description} </p>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv">
              <p className="PrevProx">Previsioni del{anotherData.list[16].dt_txt} </p>
              <p>E' previsto vento alla velocità di {anotherData.list[16].wind.speed} km/h</p>
              <p>Con una temperatura di {Math.floor(anotherData.list[16].main.temp)-273}°C</p>
              <p>Un'umidità del {anotherData.list[16].main.humidity}%</p>
              <p>Previsioni atmosferiche {anotherData.list[16].weather[0].description} </p>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className=" bordoDiv">
              <p className="PrevProx">Previsioni del{anotherData.list[19].dt_txt} </p>
              <p>E' previsto vento alla velocità di {anotherData.list[19].wind.speed} km/h</p>
              <p>Con una temperatura di {Math.floor(anotherData.list[19].main.temp)-273}°C</p>
              <p>Un'umidità del {anotherData.list[19].main.humidity}%</p>
              <p>Previsioni atmosferiche {anotherData.list[19].weather[0].description} </p>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
