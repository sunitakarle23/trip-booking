import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent {
  economyClass: string = '';
  firstClass: string = '';
  @Output() onApplyFilter = new EventEmitter();

  constructor() { }
  
  resetForm(form: NgForm) {
    form.resetForm(); 
  }

  applyFilter(filterForm: NgForm) {
    this.onApplyFilter.emit(filterForm.value);
  }
}
