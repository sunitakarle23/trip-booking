import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  public sideBarSubject$ = new BehaviorSubject<any>(null);
  public isSidebarOpen: boolean = false;
  constructor() { }
}
