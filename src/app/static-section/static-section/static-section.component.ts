import { Component } from '@angular/core';

const references: string[] = ["Projects", "Skills", "Education", "Contact"];

@Component({
  selector: 'app-static-section',
  templateUrl: './static-section.component.html',
  styleUrls: ['./static-section.component.scss']
})
export class StaticSectionComponent {

  protected readonly references = references;
}
