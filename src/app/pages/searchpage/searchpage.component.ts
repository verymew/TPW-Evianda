import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatListModule],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent {

}
