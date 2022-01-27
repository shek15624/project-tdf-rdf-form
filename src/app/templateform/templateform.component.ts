import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any=[]

  onSubmit(mydata:string){
    console.log(mydata)
    const jsonData = JSON.stringify(mydata)
    localStorage.setItem('mydata',jsonData)
  }


}
