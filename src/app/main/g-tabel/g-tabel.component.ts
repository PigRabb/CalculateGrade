import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
import { FireDatabaseService } from 'src/app/service/fire-database.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-g-tabel',
  templateUrl: './g-tabel.component.html',
  styleUrls: ['./g-tabel.component.scss']
})
export class GTabelComponent implements OnInit {
  gradeItem : Observable<any[]>;
  gradeItem1 : Observable<any[]>;
  totalGrade:any
  totalCredit:any
  constructor(private db:AngularFireDatabase,private firedb:FireDatabaseService) { 
 
  }



  async ngOnInit() {
    let allc=0;
    let allscore=0;
    let count = 0;
    var path = '/grade/'+localStorage.getItem('uid');
    this.gradeItem = this.db.list(path).valueChanges()
    await this.gradeItem.subscribe(async data1=>{
      await data1.forEach(data2=>{
        count++;
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
      console.log("G = "+x)
      this.totalGrade = x.toFixed(2)
      if(count >= data1.length){
        allc=0;
        allscore=0;
        count = 0;
      }
    })
    this.gradeItem1 = this.db.list(path).snapshotChanges()
    .pipe(map(items=>{
       return items.map(a=>{
         const data = a.payload.val();
         const key = a.payload.key
         return {key,data};
       })
    }))
  } 

  deleteItem(key){
    var path = '/grade/'+localStorage.getItem('uid');
    this.firedb.deleteData(key,path)
    console.log(key)
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
