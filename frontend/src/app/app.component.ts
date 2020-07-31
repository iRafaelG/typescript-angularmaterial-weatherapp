import { Component } from '@angular/core';

// services
import { WeatherService } from './services/weather.service';

// import interfaces
import { IWeather } from './interfaces/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  weather: IWeather; 
  alert = {
    activated: false,
    text: "You must to type some country code and city name"
  };
  spinner: Boolean = false;

  constructor( private weatherService: WeatherService ) {}

  submitForm(inputCity: HTMLInputElement, inputCountry: HTMLInputElement) {
    
    if(inputCity.value, inputCountry.value) {
      this.spinner = !this.spinner;
      this.weatherService.getWeather(inputCity.value, inputCountry.value)
      .subscribe(
        response => {
          if(response.cod == 200) {
            this.weather = response; 
          } else {
            this.alertFuntion();
            this.alert.text = response.message;
          }        
          this.spinner = !this.spinner;
        },
        error => console.log(error)
      );
      inputCity.value = '';
      inputCountry.value = '';
    } else {
      this.alertFuntion();
    }

    return false;
  }

  alertFuntion() {
    this.alert.activated = !this.alert.activated;
    setTimeout( () => {
      this.alert.activated = !this.alert.activated;
    }, 3000)
  }
}
