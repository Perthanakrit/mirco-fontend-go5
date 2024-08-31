import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryRequest } from '../models/category-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  addCategory(category: CategoryRequest) {
    return this.httpClient.post(
      'https://dev.tks.co.th/codepulseapi/api/Categories',
      category);
  }
}

