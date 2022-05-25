import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
    { id: '1', name: 'Sherlock Holmes - Um estudo em vermelho' , price: 13.90, quantity: 1, category: "Ação", description:"Holmes é chamado para solucionar o caso de um homem que foi encontrado morto, com uma expressão de terror, mas que não apresenta ferimentos, apenas manchas de sangue pelo corpo.", img:"img1" },
    { id: '2', name: 'O Mundo de Sofia' , price: 64.90, quantity: 1, category: "Ação", description:"Às vésperas de seu aniversário de quinze anos, Sofia Amundsen começa a receber bilhetes e cartões-postais bastante estranhos. Os bilhetes são anônimos e perguntam a Sofia quem é ela e de onde vem o mundo. Os postais são enviados do Líbano, por um major desconhecido, para uma certa Hilde Møller Knag, garota a quem Sofia também não conhece. O mistério dos bilhetes e dos postais é o ponto de partida deste romance fascinante, que vem conquistando milhões de leitores em todos os países e já vendeu mais de 1 milhão de exemplares só no Brasil. De capítulo em capítulo, de “lição” em “lição”, o leitor é convidado a percorrer toda a história da filosofia ocidental, ao mesmo tempo que se vê envolvido por um thriller que toma um rumo surpreendente.", img:"img2" },
    { id: '3', name: 'Arsène Lupin e a Agulha Oca' , price: 10.90, quantity: 1, category: "Ação", description:"Um incrível roubo em um castelo no interior da França desencadeia uma perseguição aos ladrões. Logo descobre-se que Arsène Lupin é o líder da quadrilha. Quem comanda a investigação é Isidore Beautrelet, um jovem estudante de retórica e um brilhante detetive amador, tão inteligente e sagaz quanto Lupin e, por isso, um opositor a temer. Mas o jovem nem desconfia que, ao desbaratar a quadrilha, não vencerá Lupin. Na realidade, estará apenas dando os primeiros passos para desvendar o mistério da Agulha Oca, conhecido apenas pelo cavalheiro-ladrão.", img:"img3" },

  ];

@Injectable()


export class BooksService {
    
   constructor() {}

    getBooks() {
      return books;

  
    }
  }