import { FaceSnap } from './../models/face-snap.model';
import { FaceSnapService } from './../services/face-snap.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    const id = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(id);
  }

  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
      console.log(this.buttonText);
    } else if (this.buttonText === 'Oops, unSnap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
      console.log(this.buttonText);
    }
  }
}
