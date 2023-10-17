import { Component } from '@angular/core';

import { References } from '../../shared/references';

@Component({
  selector: 'app-static-section',
  templateUrl: './static-section.component.html',
  styleUrls: ['./static-section.component.scss'],
})
export class StaticSectionComponent {
  protected readonly references = References;
  public activeReference: References = References.Projects;

  public onReferenceClick(newActiveReference: References): void {
    this.activeReference = newActiveReference;
  }

  public ngForSortPrevention(): number {
    return 0;
  }
}
