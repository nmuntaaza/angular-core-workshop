import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from './project';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  model: String = 'projects';

  constructor(
    private _http: HttpClient
  ) { }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id: Number | String) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    return this._http.get<Project[]>(`${BASE_URL}${this.model}`);
  }

  create(project: Project) {
    return this._http.post(this.getUrl(), project);
  }

  update(project: Project) {
    return this._http.patch(this.getUrlForId(project.id), project);
  }

  delete(id: Number | String) {
    return this._http.delete(this.getUrlForId(id));
  }

}
