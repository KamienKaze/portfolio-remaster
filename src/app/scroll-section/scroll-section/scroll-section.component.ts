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
  protected readonly References = References;

  private hoveredSection: References | null = null;
  private hoveredTile: Project | null = null;

  public setHoveredSection(reference: References | null): void {
    this.hoveredSection = reference;
  }

  public setHoveredTile(hoveredTile: typeof this.hoveredTile): void {
    this.hoveredTile = hoveredTile;
  }

  public getIsFadedOut(
    currentSection: References,
    thisTile: typeof this.hoveredTile,
  ): string {
    if (
      this.hoveredSection === currentSection &&
      this.hoveredTile != thisTile
    ) {
      return 'faded-out';
    } else return 'faded-in';
  }
}
