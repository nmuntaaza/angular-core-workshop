import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project, ProjectsService } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;
  selectedProject: Project;

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.resetProject();
    this.getProjects();
  }

  saveProject(project: Project): void {
    if (project.id != '') {
      this.updateProject(project)
    } else {
      this.createProject(project);
    }
  }

  createProject(project: Project) {
    this.projectService.create(project)
      .subscribe((result : Project) => {
        this.getProjects();
        this.selectProject(result);
      });
  }

  updateProject(project: Project) {
    this.projectService.update(project)
      .subscribe((result: Project) => {
        this.getProjects();
        this.selectedProject = result;
      });
  }

  getProjects(): void {
    this.projects$ = this.projectService.all();
  }

  deleteProject(project: Project): void {
    this.projectService.delete(project.id)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  } 

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  cancel(): void {
    this.resetProject();
  }

  resetProject() {
    const emptyProject: Project = {
      id: '',
      title: '',
      details: '',
      percentComplete: 0,
      approved: null
    }

    this.selectedProject = emptyProject;
  }

}
