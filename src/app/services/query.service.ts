import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  url = environment.server_url;
  constructor(private http: HttpClient) {}

  login(dni: string, code: string) {
    return this.http.post(`${this.url}/applicants`, { dni, code });
  }
}
