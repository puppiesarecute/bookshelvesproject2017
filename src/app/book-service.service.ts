import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class BookServiceService {
  private host = "https://www.googleapis.com/books/v1/volumes?q=";
  constructor(private http: Http) { }

  searchBook(searchTerm: string): Observable<any[]> {
    return this.http.get(this.host + searchTerm + "&key=AIzaSyB2qVwtI28FL8Yy7-IycBNsyIxEU4r3UF0")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() as any[];
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
