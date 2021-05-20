import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private firestore: AngularFirestore,)
   { }


  //*******************************//
//******** Search Item *********//
//******************************//

searchItem(){
  console.log("called searchItem");
  // this.itemDoc = this.firestore.doc<any>(`food_item/${categoryId}`)
  // return this.itemDoc.valueChanges()
  return this.firestore.collection<any>('music_item', ref => ref
  .where('Visible', '==', 'si' )).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );
}


//************************//
//****** Categories ******//
//************************//

getPopular(){
  console.log("start getPopular");
  return this.firestore.collection<any>('music_popular', ref => ref
  .where('Visible', '==', 'si' )).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );

}

//************************//
//****** PopularSong ******//
//************************//

getPopularSong(){
  console.log("start getPopular");
  return this.firestore.collection<any>('music_popularsong', ref => ref
  .where('Visible', '==', 'si' )).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );

}










}

