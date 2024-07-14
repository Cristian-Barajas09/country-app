import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${ code }`
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    );
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`

    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
    // pipe me permite usar operadores de rjsx
    // map es lo mismo que el map pero reactivo
    // tap me sirve para disparar eventos secundarios
    // cathError me sirve para agarrar errores
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;


    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;


    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }

}
