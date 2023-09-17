import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  @Input('isActive') public isActive: boolean = false;
  @Input('referenceId') public referenceId: number = 0;
  @Input('referenceName') public referenceName: string = 'not-assigned';

  public changeIsActiveState(): void {
    this.isActive = !this.isActive;
  }
}
