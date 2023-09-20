import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSectionComponent } from './scroll-section/scroll-section.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';

@NgModule({
  declarations: [ScrollSectionComponent, ProjectTileComponent],
  exports: [ScrollSectionComponent],
  imports: [CommonModule],
})
export class ScrollSectionModule {}
