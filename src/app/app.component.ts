import { Component } from '@angular/core';

import { Product } from './product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  title = 'my-store';
  name = 'Carlos';
  age = 23;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Carlos',
    age: 23,
    avatar: 'https://source.unsplash.com/random'
  }

  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  names: String[] = ['Carlos', 'Jaime', 'Doris', 'Diego', 'Adriana', 'Juan']
  emojis: String[] = ['😂', '🐦', '🐳', '🌮', '💚', '😍', '👌', '😁', '😒', '👍']
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  getRamdomEmoji() {
    return Math.floor(Math.random() * this.emojis.length)
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
