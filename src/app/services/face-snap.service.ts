import { Injectable } from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor() { }
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title:'archibald',
      description: 'My best friend since childhood !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      location:'Paris',
      snaps:0.473
    },
    {
      id: 2,
      title: 'three Rock Montain',
      description: 'Un endroit magnifique pour les rendonees',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      location: 'Montreal',
      snaps: 12.47
    },
    {
      id: 3,
      title: 'un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 101,
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found');
    }
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
