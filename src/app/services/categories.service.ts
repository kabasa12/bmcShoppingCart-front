import { HttpClient } from "@angular/common/http";
import { Injectable,EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";


@Injectable({
    providedIn:'root'
})
export class CategoriesService {

    OnChangeCategory: EventEmitter<string> = new EventEmitter<string>();
    constructor(private http: HttpClient) { };

    getCategories():Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:3000/categories');
    };

    getCategoryProducts(cagtegoryId: string):Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:3000/products/' + cagtegoryId);
    };

    getCategoryById( categoryId: string):Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:3000/categories/' + categoryId);
    };

    changeCategory(categoryId: string) {
        this.OnChangeCategory.emit(categoryId);
    };
}