import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSectionComponent } from './scroll-section/scroll-section.component';



@NgModule({
    declarations: [
        ScrollSectionComponent
    ],
    exports: [
        ScrollSectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ScrollSectionModule { }
