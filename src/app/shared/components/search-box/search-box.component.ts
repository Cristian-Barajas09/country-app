import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  // Subject es un observable manual
  private debouncer = new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output() // esto es un evento de salida
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300) // debounceTime hace que espere un segundo mientras dejan de llegar valores
    )
    .subscribe(value => {
      this.onDebounce.emit( value )
    })
  }

  ngOnDestroy(): void { // este se llama cuando el componente se va a destruir
    this.debouncerSuscription?.unsubscribe()
  }


  onEnterSearchBox(searchValue: string): void {
    this.onValue.emit(searchValue);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next( searchTerm );
  }
}
