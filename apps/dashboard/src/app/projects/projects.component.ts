import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];

  selectedProject: any;

  constructor() { }

  ngOnInit(): void {
    this.resetProject() // Initialize and reset the selected project
  }

  selectProject(project: any) {
    this.selectedProject = project;
  }

  resetProject(): void {
    this.selectedProject = {
      id: '',
      title: '',
      details: '',
      percentComplete: 0,
      approved: null,
    }
  }

  unselectProject() {
    this.resetProject();
  }

}
