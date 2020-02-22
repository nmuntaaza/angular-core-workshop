import { Component, OnInit } from '@angular/core';

import { Project, ProjectsService } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.all();
  }

  onProjectClick(project): void {
    this.selectedProject = project;
  }

  cancel(): void {
    this.onProjectClick(null);
  }

}
