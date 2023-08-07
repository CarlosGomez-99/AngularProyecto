import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  names: String[] =['Carlos', 'Jaime', 'Doris', 'Diego', 'Adriana', 'Juan']
  emojis: String[] =  [ '😂' , '🐦', '🐳','🌮', '💚', '😍', '👌', '😁', '😒', '👍']

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

  getRamdomEmoji(){
    return Math.floor(Math.random() * this.emojis.length)
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }
}
