import { Component, OnInit } from '@angular/core';
import { Photo } from '../interface/photo';
import { DetailService } from './service/detail.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  photo!: Photo;
  photoId: number = 0;
  constructor(
    private detailService: DetailService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.photoId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.initData();
  }

  initData = () => {
    this.detailService.getPhoto(this.photoId).subscribe({
      next: (res: Photo) => {
        console.log(res);
        this.photo = res;
      },
      error: (e) => {
        console.log('Error getting the list');
      },
    });
  };

  navToList = () => {
    this.router.navigate(['']);
  }
}
