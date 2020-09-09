import {Component, OnInit} from '@angular/core';
import {GetAllService} from '../../services/get-all.service';
import {Observable} from 'rxjs';
import {IApatrment} from '../../interfaces/iapatrment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  apartmentModel: Observable<IApatrment[]>;

  constructor(private getAllService: GetAllService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  click(el): void {
    const idEl = el.getAttribute('id-flat');
    return localStorage.getItem(idEl) ? localStorage.removeItem(idEl) : localStorage.setItem(idEl, 'true');
  }
  getLike(el): boolean {
    const idEl = el.getAttribute('id-flat');
    return !!localStorage.getItem(idEl);
  }

  getAll(): Observable<IApatrment[]> {
    return this.apartmentModel = this.getAllService.getAllApartments();
  }
}
