import { HttpClient, HttpParams, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private gifList: Gif[] = [];

  private _tagsHistory: string[] = []

  private serviceGifs: string = 'https://api.giphy.com/v1/gifs/search'
  private apiKey: string = '0fnlCbYoBMb1YqF83HXs0oAWH58fJcvM'

  constructor(private http: HttpClient) {
    this.getLocalStorage()
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }
  organizeHistory(tag: string) {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }
  }
  /**
   *
   * @param tag
   * @returns
   */
  searchTag(tag: string): void {
    if (tag.length == 0) return;

    this.organizeHistory(tag);
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    //save in local storage
    this.saveLocalStorage();
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceGifs}`, { params }).subscribe((resp) => this.gifList = resp.data)
  }
  /**
   *
   * @returns array Gif[]
   */
  getGifList() {
    return [...this.gifList]
  }
  /**
   * modified local Storage
   */
  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  /**
   *
   * @returns get local storage and save in _tagsHistory
   */
  private getLocalStorage() {
    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);

  }
}
