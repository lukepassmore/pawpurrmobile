import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Dogs';
  dogs = [{id: 1, name: 'Windstorm 1'},
          {id: 2, name: 'Windstorm 2'},
          {id: 3, name: 'Windstorm 3'},
          {id: 4, name: 'Windstorm 4'}];
  mydogs = this.dogs[0];
  
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getToken(
      (jsonData) => {
        console.log(jsonData[0]);
      }
    );
  }
  /*getLog() {
    const params = {
      apiKey: 'd7e1a3d7dd2a43a4',
      apiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJkN2UxYTNkN2RkMmE0M2E0In0.0F4xcFEsW9dRQutcCFtuPS6yQ6hSbPXok2099zi44XI',
      apiFunctionName: 'getLog',
      apiFunctionParams: '{"api_key":"d7e1a3d7dd2a43a4"}'
    }
    const url = 'https://adoptadog.yellowbox.software/api/v1/'
    return this.http.get(url, { params }).toPromise().then(response => {
      console.log(response);
    })
    .catch(console.log);
  }*/
}
