import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service'

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	showIds = false;
	//лучше не обращаться напрямую к свойству, а сделать геттер
	constructor(public postsService: PostsService,
		private route: ActivatedRoute,
		private router: Router
	) { }
	ngOnInit() {
		this.route.queryParams.subscribe((params: Params) => {
			return this.showIds = !!params['showIds'];
		});
		this.route.fragment.subscribe(fragment => {
			console.log('fragments: ', fragment);
		})
	}
	showIdsProgram() {
		this.router.navigate(['/posts'], {
			queryParams: {
				showIds: true
			},
			fragment: 'program-fragment'
		})
	}
}
