import { ProjectsService } from './projects/projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [ // What this is?
    ProjectsService
  ]
})
export class CoreDataModule {}
