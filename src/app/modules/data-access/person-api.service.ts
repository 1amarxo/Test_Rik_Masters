import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersDTO } from './users-dto.model';


@Injectable({ providedIn: 'root' })
export class PersonApiService {
  
  
    readonly baseUrl:string = environment.personsApiUrl;
    readonly httpClient=inject(HttpClient)
    constructor() { }
  
    public getAll(){
      return this.httpClient.get<any>(this.baseUrl).toPromise();
    }
  
  }