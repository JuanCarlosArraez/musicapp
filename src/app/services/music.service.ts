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
  console.log("start getPopularSong");
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


//************************//
//****** Playlists ******//
//************************//


getPlaylists(){
  console.log("start getPlaylists");
  return this.firestore.collection<any>('music_playlists', ref => ref
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

//******************************//
//****** Get item detail  ******//
//******************************//

getItemDetail(itemId: string){
  return this.firestore.doc<any>('music_playlists/'+itemId).valueChanges();
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
//*************************************//
//******** Item by categoryId *********//
//*************************************//

getItemByCatId(bandsId: string){
  return this.firestore.collection<any>('/music_albums', ref => ref
  .where('music_category_name', '==', bandsId).where('Available', '==', 'si' ).where('Visible', '==', 'si' ))
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









}

