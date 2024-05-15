import { Component, OnInit } from '@angular/core';
import { ListService } from './service/list.service';
import { Photo } from '../interface/photo';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  photoList: Photo[] = [];
  orignalPhotoList: Photo[] = [];
  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.initData();
  }

  initData = () => {
    this.listService.getPhotosList().subscribe({
      next: (res: Photo[]) => {
        // this.photoList = res;
        this.orignalPhotoList = res;
        this.photoList = res.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        this.totalPages = res.length / this.pageSize;
      },
      error: (e) => {
        console.log('Error getting the list');
      },
    });
  };

  handleNextPage = () => {
    console.log('next');
    if (
      this.currentPage < Math.ceil(this.orignalPhotoList.length / this.pageSize)
    ) {
      // Check for valid page
      this.currentPage++;
      this.photoList = this.orignalPhotoList.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );

      console.log(this.photoList);
    }
  };

  handlePreviousPage = () => {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.photoList = this.orignalPhotoList.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    }
  };

  navToDetail = (id: number) => {
    this.router.navigate([`/detail/${id}`])
  }
}
