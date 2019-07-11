import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FireDatabaseService } from '../service/fire-database.service';
@Component({
  selector: 'app-forecast-g',
  templateUrl: './forecast-g.component.html',
  styleUrls: ['./forecast-g.component.scss']
})
export class ForecastGComponent implements OnInit {

  constructor(private firedb:FireDatabaseService) { }

  ngOnInit() {

  }

  addData(gform:NgForm){
    var path = '/grade-forcast/'+localStorage.getItem('uid');
    this.firedb.addData(path,gform.value).then(data=>{

    },err=>{
    })
  }
}
