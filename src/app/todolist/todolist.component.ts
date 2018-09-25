import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todo : String;
  todoArray = [];
  constructor() { }

  ngOnInit() {
  }

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  deleteItem(todo) {
    for(let i = 0; i <= this.todoArray.length; i++){
      if(todo === this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

  todoSubmit() {
    console.log(this.todo);
    if (this.todo !==""){
      this.todoArray.push(this.todo)
       //this.todoForm.reset()
    } else {
      alert('Field required **')
    }
  }

}
