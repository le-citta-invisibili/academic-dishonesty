import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeatureService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getAllFeatures() {
    return this.http.get('/assets/json/features.json');
  }
}
