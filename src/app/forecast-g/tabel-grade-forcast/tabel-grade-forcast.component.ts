import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { FireDatabaseService } from 'src/app/service/fire-database.service';
@Component({
  selector: 'app-tabel-grade-forcast',
  templateUrl: './tabel-grade-forcast.component.html',
  styleUrls: ['./tabel-grade-forcast.component.scss']
})
export class TabelGradeForcastComponent implements OnInit {
  gradeItem : Observable<any[]>;
  gradeItemA : Observable<any[]>;
  totalGradeS:any
  totalCreditS:any
  totalScoreS:any
  totalGradeA:any
  totalCreditA:any
  constructor(private db:AngularFireDatabase,private firedb:FireDatabaseService) { 
 
  }

  async ngOnInit() {
    let allc=0;
    let allscore=0;
    var path1 = '/grade-forcast/'+localStorage.getItem('uid');
    this.gradeItem = this.db.list(path1).valueChanges()
    var path2 = '/grade/'+localStorage.getItem('uid');
    this.gradeItemA = this.db.list(path2).valueChanges()
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
      this.totalCreditS = allc
      console.log(allscore)
      var x = allscore/allc
      this.totalScoreS = allscore;
      console.log("totalGrade = "+allscore/allc)
      this.totalGradeS = x.toFixed(2)
      
      await this.calG()

    })
   

  } 

  async calG(){
    console.log("Start CalG")
    console.log(this.totalCreditS)
    console.log(this.totalScoreS)
    let allc2=0;
    let allscore2=0;
    await this.gradeItemA.subscribe(async data1=>{
      console.log("StartData1 ")
      await data1.forEach(data2=>{
        console.log("StartData2 ")
        allc2 = allc2+data2.credit
        let g ;
        if(data2.grade == "A"){ g = 4}
        else if(data2.grade == "B+"){ g = 3.5}
        else if(data2.grade == "B"){ g = 3}
        else if(data2.grade == "C+"){ g = 2.5}
        else if(data2.grade == "C"){ g = 2}
        else if(data2.grade == "D+"){ g = 1.5}
        else if(data2.grade == "D"){ g = 1}
        else if(data2.grade == "F"){ g = 0}
        allscore2 = allscore2+(data2.credit*g)
      
      })
      this.totalCreditA = allc2+this.totalCreditS
      var x2 = ((this.totalScoreS+allscore2)/(this.totalCreditA ));
      this.totalGradeA = x2.toFixed(2)
    })
  }

  deleteItem(key){
    var path = '/grade/'+localStorage.getItem('uid');
    console.log("key = "+key)
    this.firedb.deleteData(key,path)
    location.reload()
  }

  ckeckCredit(){
    let data;
    if(this.totalCreditS == 0 ){
      data = false
    }
    else{
      data = true
    }
    return data;
  }
}
