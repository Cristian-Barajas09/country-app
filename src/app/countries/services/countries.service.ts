import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public chacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: undefined, countries: []},
  }

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // es para darle un delay al observable
      )
    // pipe me permite usar operadores de rjsx
    // map es lo mismo que el map pero reactivo
    // tap me sirve para disparar eventos secundarios
    // cathError me sirve para agarrar errores
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)),
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`

    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.chacheStore.byCapital = {
          term, countries
        })
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;


    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.chacheStore.byCountries = {
          term, countries
        })
      )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;


    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.chacheStore.byRegion = {
          countries,region
        })
      )
  }

}
