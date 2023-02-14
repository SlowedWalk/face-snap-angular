import { Router } from '@angular/router';
import { FaceSnapService } from './../services/face-snap.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(
    private _faceSnapService: FaceSnapService,
    private _router: Router
  ) { }


  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this._faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
      console.log(this.buttonText);
    } else if (this.buttonText === 'Oops, unSnap!') {
      this._faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
      console.log(this.buttonText);
    }
  }

  onViewFaceSnap() {
    this._router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
