import { Component } from '@angular/core';
import { ReferenceComponent } from '../reference/reference.component';

enum References {
  Projects = 'Projects',
  Skills = 'Skills',
  Education = 'Education',
  Contact = 'Contact',
}

const REFERENCE_NAMES: string[] = Object.keys(References).filter((v: string) =>
  isNaN(Number(v)),
);

@Component({
  selector: 'app-static-section',
  templateUrl: './static-section.component.html',
  styleUrls: ['./static-section.component.scss'],
})
export class StaticSectionComponent {
  protected readonly REFERENCE_NAMES = REFERENCE_NAMES;
}
