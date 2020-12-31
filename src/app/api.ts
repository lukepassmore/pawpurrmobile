import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://adoptadog.yellowbox.software/api/v1/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
      ) {
      }
    
    public getToken(callBack) {
      const params = {
        apiKey: 'd7e1a3d7dd2a43a4',
        apiToken: '',
        apiFunctionName: 'getToken',
        apiFunctionParams: '{"api_key":"d7e1a3d7dd2a43a4"}'
      }
      return this.http.get(API, { params }).toPromise().then(response => {
        //const apiToken = response.dataArray.token;
        this.getLog(callBack)
      })
      .catch(console.log);
    }
    public getLog(callBack) {
        const params = {
            apiKey: 'd7e1a3d7dd2a43a4',
            apiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJkN2UxYTNkN2RkMmE0M2E0In0.0F4xcFEsW9dRQutcCFtuPS6yQ6hSbPXok2099zi44XI',
            apiFunctionName: 'getLog',
            apiFunctionParams: '{"api_key":"d7e1a3d7dd2a43a4"}'
        }
        return this.http.get(API, { params }).toPromise().then(response => {
          callBack(response);
        })
        .catch(console.log);
    }
}