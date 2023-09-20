import { Component } from '@angular/core';
import { ReferenceComponent } from '../reference/reference.component';

export enum References {
  Projects = 'Projects',
  Skills = 'Skills',
  Education = 'Education',
  Contact = 'Contact',
}

@Component({
  selector: 'app-static-section',
  templateUrl: './static-section.component.html',
  styleUrls: ['./static-section.component.scss'],
})
export class StaticSectionComponent {
  protected readonly references = References;
  public activeReference: References | null = null;

  public onReferenceClick(newActiveReference: References): void {
    this.activeReference = newActiveReference;
    console.log(this.activeReference);
  }
}
