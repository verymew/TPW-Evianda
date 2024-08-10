import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSidenavModule, MatExpansionModule, MatDividerModule, MatIconModule  ],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  readonly panelOpenState = signal(false);
  public userName:string = "Julia";

}
