import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  currentProject?: Project;
  projectTitle?: String;
  
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();

  @Input() set project (project: Project) {
    this.projectTitle = project?.title;
    this.currentProject = Object.assign({}, project);
  }
}
