import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	post!: Post

	constructor(private route: ActivatedRoute,
		//private postsService: PostsService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.data.subscribe(data => {
			this.post = data['post'];
		})
		//this.post = this.route.snapshot.data['post'];
		//this.route.params.subscribe(
		//	((params: Params) => {
		//		let newLocal: Post = this.post;
		//		newLocal = this.postsService.getById(+params['id']);
		//	})
		//)
	}

	loadPost() {
		this.router.navigate(['/posts', 44])
	}
}
