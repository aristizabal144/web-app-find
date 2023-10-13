import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { errorMessage } from '../utils/alertMessage';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserPromise(url: string): Promise<any> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .catch((error) => {
        errorMessage(error);
      });
  }

  getUserListPromise(username: string): Promise<any> {

    //validators
    if (username.length < 4) {
      errorMessage("The field must be more than 4 characters.");
      return Promise.reject();
    }

    if (username == "doublevpartners") {
      errorMessage("the word doublevpartners is restricted");
      return Promise.reject();
    }

    //request
    const url = `${environment.apiUrl}/search/users?q=${username}`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad Request');
        }
        return response.json();
      })
      .catch((error) => {
        errorMessage(error);
      });

  }

  getUserListObservable(username: string): Observable<any> {
    const url = `${environment.apiUrl}/users/${username}`;
    return this.http.get(url);
  }
}
