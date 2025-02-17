import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://api.escuelajs.co/api/v1/products';
  }

  public getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  public getOne(id: string) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
