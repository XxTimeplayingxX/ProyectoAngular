import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcolme  = "Hola";
  tasks=[
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicios'
  ];
  name = signal('Nicolas');
  age = 18;
  disabled = false;
  img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULLHHvBkdUGBht_T9U5mSa8o-ztNHVySWAgbsbmGkQw&s';

  person={
    name: 'David',
    edad: 20
  }
  clickHandler(){
    alert('Hey no me piques');
  }
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  keydownHandler(evet: KeyboardEvent){
    const input = evet.target as HTMLInputElement;
    console.log(input.value);
  }
}
