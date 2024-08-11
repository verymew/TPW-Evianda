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



@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSidenavModule, MatExpansionModule, MatDividerModule, MatIconModule, CommonModule, ViandaCrudComponent],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  readonly panelOpenState = signal(false);
  public userName: string = "Julia";
  public viandaAvailable: boolean = false;
  private crud = inject(ViandaService);
  public vianda: any = null;

  handleSave(data: any) {
    this.crud.saveVianda(data)
      .then(data => console.log("foii"))
      .catch(err => console.error(err));
  }

  ngOnInit(): void {
    this.crud.getVianda()
      .then((data) => {
        this.viandaAvailable = true;
        this.vianda = data;
      })
      .catch((erro) => {
        console.error(erro);
      })
      .finally();
  };

  removeVianda(userid: string) {
    this.crud.deleteVianda(userid)
      .then((res) => alert('Deletado com sucesso'))
      .catch((error) => console.log(error));
  };

}
