import { Component, OnInit } from '@angular/core';
import postData from './posts.json'
import { PostService } from './../../services/posts.service';
import { Post } from './home.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  post = {} as Post;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts;
  }

}
