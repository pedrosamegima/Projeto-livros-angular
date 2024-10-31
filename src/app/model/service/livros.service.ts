import { Injectable } from '@angular/core';
import { Ilivraria } from './ilivraria';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private livraria: Ilivraria[] = [
    {id: 1, name:"Story brand", price: 5.0, description: "Um café quente e gostoso", image:'../livro1.png'},
    {id: 2, name:"O pequeno príncipe", price: 7.5, description: "Suco natural", image:'../livro2.png'},
    {id: 3, name:"Green Book", price: 6.0, description: "Chá saudável", image:'../livro3.png'},
    {id: 4, name:"O agir invisível de Deus", price: 5.0, description: "Um café quente e gostoso", image:'../livro4.png'},
    {id: 5, name:"O jardim secreto", price: 7.5, description: "Suco natural", image:'../livro5.png'},
    {id: 6, name:"Antes que o café esfrie", price: 6.0, description: "Chá saudável", image:'../livro6.png'},
    {id: 7, name:"É assim que acaba", price: 6.0, description: "Chá saudável", image:'../livro7.png'},
    {id: 8, name:"A revolução dos bichos", price: 6.0, description: "Chá saudável", image:'../livro8.png'},
    {id: 9, name:"As coisas que você só vê quando desacelera", price: 6.0, description: "Chá saudável", image:'../livro9.png'},
    {id: 10, name:"Hábitos Atômicos", price: 6.0, description: "Chá saudável", image:'../livro10.png'}
  ];
  getLivraria(): Ilivraria[]{
    return this.livraria;
  }
}
