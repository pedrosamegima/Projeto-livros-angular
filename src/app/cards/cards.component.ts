import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../model/service/livros.service';
import { Ilivraria } from '../model/service/ilivraria';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[LivrosService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  constructor(private livrosService:LivrosService){}
  livros: Ilivraria[] = [];

  ngOnInit(): void{
    this.livros= this.livrosService.getLivraria();
  }
}
