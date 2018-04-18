import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable, Optional } from '@angular/core';
import { environment } from '../../environments/environment';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  private readonly CONVERSION_SETTINGS_URL: string = `${environment.backendUrl}/api/`;
  private options: any = new RequestOptions();

  constructor(private http: Http,
    private authService: AuthService) {

  }

  /**
   * Return all emailModels
   */
  getAll(offset?: number, limit?: number, sort?: string, order?: string): Observable<any> {
    const httpAddress: string = environment.backendUrl + '/api/greffe/dad/v1/users?'
      + 'offset=' + offset + '&limit=' + limit +
      '&sort=' + sort + '&order=' + order;
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', this.authService.getAuthorizationHeaderValue());
    const options: RequestOptions = new RequestOptions({ headers: myHeaders });
    return this.http.get(httpAddress, options)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getById(id: any): Observable<any> {
    const httpAddress: string = environment.backendUrl + '/api/greffe/dad/v1/users/' + id;
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', this.authService.getAuthorizationHeaderValue());
    const options: RequestOptions = new RequestOptions({ headers: myHeaders });
    return this.http.get(httpAddress, options)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  create(entity: any): Observable<any> {
    const httpAddress: string = environment.backendUrl + '/api/greffe/dad/v1/users';
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', this.authService.getAuthorizationHeaderValue());
    const options: RequestOptions = new RequestOptions({ headers: myHeaders });
    return this.http.post(httpAddress, entity, options)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  send(entity: any): Observable<any> {
    const httpAddress: string = `https://radiant-lake-98649.herokuapp.com?mac=${entity.mac}&message=${entity.message}
      &email=${entity.email}&device=${entity.device}&phone=${entity.phone}&name=${entity.name}`;
      return this.http.get(httpAddress)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  update(entity: any): Observable<any> {
    const httpAddress: string = environment.backendUrl + '/api/greffe/dad/v1/users';
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', this.authService.getAuthorizationHeaderValue());
    const options: RequestOptions = new RequestOptions({ headers: myHeaders });
    return this.http.put(httpAddress, entity, options)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  delete(id: number): Observable<any> {
    const httpAddress: string = environment.backendUrl + '/api/greffe/dad/v1/users/' + id;
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', this.authService.getAuthorizationHeaderValue());
    const options: RequestOptions = new RequestOptions({ headers: myHeaders });
    return this.http.delete(httpAddress, options)
      .map(res => res.text())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  /**
   * Error handling method
   * @param error
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
