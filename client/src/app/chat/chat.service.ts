import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ChatService {
  private HOST_URL = 'http://localhost:8081/massages';
  private CHAT_URL = '/massages';

  constructor(private http: Http) {
  }

  public getMassages() {
    return this.http.get(this.HOST_URL);
  }

  public sendMassage(massage: any) {
    const header = new Headers();
          header.set('Content-type', 'application/json');

    const requestOprions = new RequestOptions({
      headers: header
    });

    return this.http.post(this.HOST_URL, massage, requestOprions);
  }

  public deleteMassage (massage: any) {
    const requestOprions = new RequestOptions({
      headers: new Headers({'Content-type': 'application/json'}),
      body: massage
    });

    return this.http.delete(this.HOST_URL, requestOprions);
  }

}
