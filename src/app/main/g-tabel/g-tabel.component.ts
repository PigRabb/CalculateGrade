import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FireDatabaseService } from 'src/app/service/fire-database.service';
@Component({
  selector: 'app-g-tabel',
  templateUrl: './g-tabel.component.html',
  styleUrls: ['./g-tabel.component.scss']
})
export class GTabelComponent implements OnInit {
  gradeItem : Observable<any[]>;
  totalGrade:any
  totalCredit:any
  constructor(private db:AngularFireDatabase,private firedb:FireDatabaseService) { 
 
  }

  async ngOnInit() {
    let allc=0;
    let allscore=0;
    var path = '/grade/'+localStorage.getItem('uid');
    this.gradeItem = this.db.list(path).valueChanges()
    await this.gradeItem.subscribe(async data1=>{
      await data1.forEach(data2=>{
        allc = allc+data2.credit
        let g ;
        if(data2.grade == "A"){ g = 4}
        else if(data2.grade == "B+"){ g = 3.5}
        else if(data2.grade == "B"){ g = 3}
        else if(data2.grade == "C+"){ g = 2.5}
        else if(data2.grade == "C"){ g = 2}
        else if(data2.grade == "D+"){ g = 1.5}
        else if(data2.grade == "D"){ g = 1}
        else if(data2.grade == "F"){ g = 0}
        allscore = allscore+(data2.credit*g)
      })
      this.totalCredit = allc
      var x = allscore/allc
      this.totalGrade = x.toFixed(2)
    })

  } 

  deleteItem(key){
    var path = '/grade/'+localStorage.getItem('uid');
    this.firedb.deleteData(key,path)
    location.reload()
  }

  ckeckCredit(){
    let data;
    if(this.totalCredit == 0 ){
      data = false
    }
    else{
      data = true
    }
    return data;
  }
}
