import { Component, EventEmitter, Output } from '@angular/core';
import { SortOptions } from 'src/app/flight/flight-constants';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent {
  @Output() onSortBy = new EventEmitter<string>();
  sortOptions = SortOptions;
  selectedOption: string = '';

  constructor() { }

  selectSortOption(option: string): void {
    this.selectedOption = option;
  }

  confirmSortOption(): void {
    this.onSortBy.emit(this.selectedOption);
  }


}
