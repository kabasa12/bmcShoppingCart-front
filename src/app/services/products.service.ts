import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";

@Injectable({
    providedIn:'root'
})
export class ProductsService {
    constructor(private http: HttpClient) { };

    getProducts():Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:3000/products');
    };

    getProductsOnSale():Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:3000/products-on-sale');
    };
}