interface IWeather {
    coors: {
        "lon": number,
        "lat": number
    },
    weather: [
        {
          "id": number,
          "main": string,
          "description": string,
          "icon": string
        }
    ],
    base: string,
    main: {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    visibility: number,
    wind: {
        "speed": number,
        "deg": number
    },
    clouds: {
        "all": number
    },
    dt: string,
    sys: {
        "type": number,
        "id": number,
        "message": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number,
    names: string
}

export default IWeather;