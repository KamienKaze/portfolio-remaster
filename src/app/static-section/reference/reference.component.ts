import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {
  @Input('isActive') private isActive: boolean = false;
  @Input('referenceId') private referenceId: number = 0;
  @Input('referenceName') private referenceName: string = "not-assigned";

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getReferenceId(): number {
    return this.referenceId;
  }

  public getReferenceName(): string {
    return this.referenceName;
  }

  public changeIsActiveState(): void {
    this.isActive = !this.isActive;
  }
}
