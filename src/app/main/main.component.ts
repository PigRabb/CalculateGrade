import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FireDatabaseService } from '../service/fire-database.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor(private firedb:FireDatabaseService) {

   }
 
  
  ngOnInit() {
  }
  addData(gform:NgForm){
    var path = '/grade/'+localStorage.getItem('uid');
    this.firedb.addData(path,gform.value).then(data=>{
    },err=>{
    })
  }
}
