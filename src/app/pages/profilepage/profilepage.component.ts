import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ViandaCrudComponent } from '../../components/vianda-crud/vianda-crud.component';
import { ViandaService } from '../../services/vianda.service';
import { Router } from '@angular/router';
import { FruitsPipe } from "../../pipes/fruits.pipe";
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSidenavModule, MatExpansionModule, MatDividerModule, MatIconModule, CommonModule, ViandaCrudComponent, FruitsPipe],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  private crud = inject(ViandaService);
  private router = inject(Router);
  private profile = inject(ProfileService);
  private auth = inject(AuthService);
  private snack = inject(MatSnackBar)

  readonly panelOpenState = signal(false);
  public userName:any;
  public viandaAvailable: boolean = false;
  public isEditing: boolean = false;
  public vianda: any = null;
  public profileImg: any = "";
  public fruit: string = "";
  public idVianda: string = "";

  handleSave(data: any): void {
    this.crud.saveVianda(data)
      .then(data => window.location.reload())
      .catch(err => this.snack.open('Registrado!','', {duration: 2000})
    );
  };

  ngOnInit(): void {
    this.crud.getVianda()
      .then((res) => {
        this.viandaAvailable = true;
        this.vianda = res.data;
        this.idVianda = res.id;
      })
      .catch((err) => this.viandaAvailable = false);
    this.userName = this.auth.getDisplayName();

    this.crud.returnCatImage().subscribe((data:any) => { this.profileImg = data[0].url });
  };

  removeVianda(userid: string): void {
    this.crud.deleteVianda(userid)
      .then((res) => window.location.reload()
      )
      .catch((error) => this.snack.open('Registrado!','', {duration: 2000})
    );
  };

  editVianda(): void {
    this.isEditing = !this.isEditing;
  };

  updateVianda(data: any): void {
    const viandaId = this.idVianda;
    this.crud.editVianda(viandaId, data)
      .then((res) => { window.location.reload() })
      .catch((err) => this.snack.open('Registrado!','', {duration: 2000})
    );
  };

  logOut(): void {
    this.auth.signOut()
      .then(() => window.location.reload())
      .catch((error) => this.snack.open('Registrado!','', {duration: 2000})
    );
  };
}
