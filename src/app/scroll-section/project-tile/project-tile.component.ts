import { Component, Input } from '@angular/core';
import { Project } from '../types';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss'],
})
export class ProjectTileComponent {
  @Input('project') public project: Project = {
    technology: 'not-assigned',
    owner: 'not-assigned',
    name: 'not-assigned',
    description: 'not-assigned',
    href: '',
  };

  public getProjectTechnology(): string {
    return this.project.technology;
  }

  public getProjectOwner(): string {
    return this.project.owner;
  }

  public getProjectName(): string {
    return this.project.name;
  }

  public getProjectDescription(): string {
    return this.project.description;
  }

  public getProjectHref(): string {
    return this.project.href;
  }
}
