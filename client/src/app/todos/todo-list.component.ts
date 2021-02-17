import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    {
      _id: 'lsdkfjslkdfj',
     owner: 'Nic',
     status: true,
     body: 'Clean kitchen',
     category: 'House stuff'
   },
   {
    _id: 'lsdkfjslkdfj',
   owner: 'Nic',
   status: true,
   body: 'Clean kitchen',
   category: 'House stuff'
 },
 {
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
{
  _id: 'lsdkfjslkdfj',
 owner: 'Nic',
 status: true,
 body: 'Clean kitchen',
 category: 'House stuff'
},
];

  constructor() { }

  ngOnInit(): void {
  }

}
