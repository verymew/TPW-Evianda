import { Component,ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ViandaService } from '../../services/vianda.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatListModule, CommonModule],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent implements OnInit{
  private viandaService =  inject(ViandaService);
  private snack = inject(MatSnackBar);
  private route = inject(ActivatedRoute);
  public cityName: string = "";
  public dataVianda: any[] = [];

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params) => {
      this.cityName = params.get('city') || '';
      try {
        const dados = await this.viandaService.searchByCity(this.cityName);
        this.dataVianda = dados;
        if(this.dataVianda.length == 0)
        {
          this.snack.open('Não há registros', '', {duration: 2000 })
        }
      } catch (error) {
        this.snack.open('Erro');
      }
    });
  }

}
