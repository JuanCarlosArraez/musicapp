import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private firestore: AngularFirestore,)
   { }



//******************************//
//****** Get item detail  ******//
//******************************//

getItemDetail(itemId: string){
  return this.firestore.doc<any>('music_bands/'+itemId).valueChanges();
}


//******************************//
//****** Get Bands  ************//
//******************************//

getBands(){
  console.log("start getBands");
  return this.firestore.collection<any>('music_bands', ref => ref
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
getBandsRecommended(){
  console.log("start getBandsRecommended");
  return this.firestore.collection<any>('music_bands', ref => ref
  .where('Visible', '==', 'si' ).where('recommended', '==', true )).snapshotChanges().pipe(
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
//*************************************//
//******** Item by categoryId *********//
//*************************************//

getItemByCatId(){
  return this.firestore.collection<any>('/music_albums', ref => ref
  .where('Available', '==', 'si' )
  .where('Visible', '==', 'si' ).orderBy("music_category_name", "asc"))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
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

//******************************//
//****** Get Albums  ************//
//******************************//

getAlbums(){
  console.log("start getAlbums");
  return this.firestore.collection<any>('music_albums', ref => ref
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

getAlbumsRecommended(){
  console.log("start getAlbumsRecommended");
  return this.firestore.collection<any>('music_albums', ref => ref
  .where('Visible', '==', 'si' ).where('front', '==', true )).snapshotChanges().pipe(
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


/* ********************************* */

addedBand(
  photo: any,
  music: any,
  name: string,
  rating: number, 
  description: string,
  question: any,
  short_description:any
) {
  console.log("___addBand=");
  return  this.firestore.collection<any>('music_bands').add({
      Available: "si",
      Visible: "si",
      image: photo,
      name: name,
      music: music,
      rating: rating,
      description: description,
      recommended: question,
      short_description: short_description,
      createdTime: new Date()
  });
}



}

