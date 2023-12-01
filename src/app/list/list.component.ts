import { Component,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face- snaps.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
    }
  
  constructor(private faceSnapsService:FaceSnapsService) { }
  }


