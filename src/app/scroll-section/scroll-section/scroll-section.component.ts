import { Component } from '@angular/core';

import { Project } from '../types';
import { projects } from '../projects';

@Component({
  selector: 'app-scroll-section',
  templateUrl: './scroll-section.component.html',
  styleUrls: ['./scroll-section.component.scss'],
})
export class ScrollSectionComponent {
  public readonly projects: Project[] = projects;
}
