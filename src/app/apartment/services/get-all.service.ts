import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IApatrment} from '../interfaces/iapatrment';



@Injectable({
  providedIn: 'root'
})
export class GetAllService {
  address = 'https://my-json-server.typicode.com/MachkivskyiYaroslav/crtJson/response';

  constructor(private http: HttpClient) {
  }
  public getAllApartments(): Observable<IApatrment[]> {
    return this.http.get<IApatrment[]>(this.address);
  }
}
