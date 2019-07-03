import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GraphService {
	private apiEndPoint = "http://127.0.0.1:10010/"
	constructor(
		private http: Http
	) { }

	protected getHeaders() {
		let headers = new Headers({});
		let options = new RequestOptions({ headers: headers });
		return options;
	}

	getGraphData(): Observable<any> {
		return this.http.get(this.apiEndPoint + "graph", this.getHeaders())
			.pipe(map((res: Response) => res.json()));
	}
}
