import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string =
    'https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json';

  constructor(private api: HttpClient) {}

  get list(): Observable<any> {
    return this.api.get<any>(this.baseUrl).pipe(tap((res) => res));
  }
}
