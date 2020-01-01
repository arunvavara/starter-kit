import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const apiPath = `https://api.kanye.rest?format=text`;

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getRandomQuote(context: RandomQuoteContext) {
    this.http
      .get(apiPath)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
}
