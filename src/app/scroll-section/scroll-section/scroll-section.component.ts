import { Component } from '@angular/core';

import { Project } from '../types';
import { projects } from '../projects';
import { References } from '../../shared/references';

@Component({
  selector: 'app-scroll-section',
  templateUrl: './scroll-section.component.html',
  styleUrls: ['./scroll-section.component.scss'],
})
export class ScrollSectionComponent {
  public readonly projects: Project[] = projects;

  public activeSection: References = References.Projects;
}
