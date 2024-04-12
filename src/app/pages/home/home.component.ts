import { Component, signal } from '@angular/core';
import { signalUpdateFn } from '@angular/core/primitives/signals';
import {task} from './../../models/task.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks=signal<task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componente',
      completed: true
    }
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value="";
  }
  // Empezamos a dividir responsabilidades
  addTask(title: string){
    const newTask ={
      id: Date.now(),
      title, 
      completed: false
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index:number){
    this.tasks.update((tasks)=> tasks.filter((tasks, position)=> position !== index));
  }

  updateTask(index:number){
    this.tasks.update((tasks)=>{
      return tasks.map((tasks, position)=>{
        if(position == index){
          return{
            ...tasks,
            completed: !tasks.completed
          }
        }
        return tasks;
      })
    })
  }
}
