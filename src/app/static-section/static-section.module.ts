import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticSectionComponent } from './static-section/static-section.component';
import { ReferenceComponent } from './reference/reference.component';



@NgModule({
    declarations: [
        StaticSectionComponent,
        ReferenceComponent
    ],
    exports: [
        StaticSectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StaticSectionModule { }
