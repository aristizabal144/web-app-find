import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUserListPromise(username: string): Promise<any> {
    const url = `${environment.apiUrl}/search/users?q=${username}`;

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error al obtener datos de GitHub:', error);
      });
  }

  getUserListObservable(username: string): Observable<any> {
    const url = `${environment.apiUrl}/users/${username}`;
    return this.http.get(url);
  }
}
