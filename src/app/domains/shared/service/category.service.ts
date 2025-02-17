import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://api.escuelajs.co/api/v1/categories';
  }

  public getAll() {
    return this.http.get<Category[]>(this.url);
  }

}
