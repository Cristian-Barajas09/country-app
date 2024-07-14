import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';


  @Output() // esto es un evento de salida
  public onValue = new EventEmitter<string>()


  onEnterSearchBox(searchValue: string): void {


    this.onValue.emit(searchValue);

  }
}
