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
    console.log("data="+gform.value)
    var path = '/grade/'+localStorage.getItem('uid');
    console.log("path="+path)
    this.firedb.addData(path,gform.value).then(data=>{
      console.log("GG")
    },err=>{
      console.log(err.message)
      console.log("error")
    })
  }
}
