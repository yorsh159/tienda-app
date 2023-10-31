import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})

export class StoreService {

    private url_base: string = 'https://api.escuelajs.co/api/v1'

    constructor(private httpClient: HttpClient) { }
    
    private getProductRequest(url:string):Observable<Product[]>{
        return this.httpClient.get<Product[]>(url)
        .pipe(
            catchError(error=>{
                return of ([])
            })
        )
    }

    getAllProducts():Observable<Product[]>{

        return this.httpClient.get<Product[]>(`${this.url_base}/products?offset=0&limit=10`)
        .pipe(
            catchError(error => {
                return of ([])
            })
        )

    }

    searchProductById(id:number):Observable<Product | null>{
        return this.httpClient.get<Product>(`${this.url_base}/products/${id}`)
        .pipe(
            map(products => products),
            catchError(()=>of(null)),
            delay(1000)
        )
    }

    getAllDecoration():Observable<Product[]>{
        return this.httpClient.get<Product[]>(`${this.url_base}/products?offset=10&limit=10`)
        .pipe(
            catchError(error => {
                return of ([])
            })
        )
    }


}