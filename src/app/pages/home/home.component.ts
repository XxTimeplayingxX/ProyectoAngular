import { Component, signal } from '@angular/core';
import { signalUpdateFn } from '@angular/core/primitives/signals';
import {task} from './../../models/task.model'
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

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

  newTaskControl = new FormControl('',{
    nonNullable: true,
    validators:[
      Validators.required
    ]
  }
  )

  changeHandler(){
    console.log(this.newTaskControl.valid)
    if(this.newTaskControl.status === 'VALID'){
      const value = this.newTaskControl.value;
      this.addTask(value);
    }
    this.newTaskControl.setValue('');
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
