import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  url = environment.server_url;
  constructor(private http: HttpClient) {}

  getData(dni: string, pin: number) {
    return this.http.post<{ procedure: any; workflow: any[] }>(
      `${this.url}/applicants`,
      { dni, pin }
    );
  }
}
