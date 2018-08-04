import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Positions} from './positions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PositionService {
  private url="https://radiant-lake-28462.herokuapp.com";
  
  constructor(private http: HttpClient) { }

  getPositions(): Observable<Positions[]> {
    return this.http.get<Positions[]>(`${this.url}/positions`);
  }

  savePosition(position : Positions): Observable<any> {
    return this.http.put<any>(this.url + "/position/" + position._id, position);
  }

  getPosition(id): Observable<Positions[]>{
    return this.http.get<Positions[]>(this.url + "/position/" + id);
  }
}
