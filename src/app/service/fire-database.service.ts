import { Injectable } from '@angular/core';
import { gradeInfo } from '../model/gradeM';
import { AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

  constructor(private db: AngularFireDatabase) { }

 async addData(path,data){
   await this.db.list(path).push(data);
   
  }

  async deleteData(key,path){
   await this.db.list(path).remove(key);
    
  }
  
  async edit(key,path,data){
    await this.db.list(path).set(key,data)
  }
  async update(key,path,data){
     await this.db.list(path).update(key,data)
  
  }
}
