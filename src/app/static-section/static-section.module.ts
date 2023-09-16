import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticSectionComponent } from './static-section/static-section.component';



@NgModule({
    declarations: [
        StaticSectionComponent
    ],
    exports: [
        StaticSectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StaticSectionModule { }
