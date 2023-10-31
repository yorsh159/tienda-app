import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styles: [
  ]
})
export class SingleProductComponent implements OnInit{

  public product? : Product;

  constructor(private storeService: StoreService,
              private router: Router,
              private activedRoute: ActivatedRoute){}
  
  ngOnInit(): void {

    this.getProduct()
    
    //Muestra el resultado en consola

    //this.activedRoute.params
    //.subscribe(({id})=>{
    //  this.storeService.searchProductById(id)
    //  .subscribe(product =>{console.log({product})})
    //})
   
  }

  getProduct(){

    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.storeService.searchProductById(id))
    )
    .subscribe( product => {
      if(!product) return this.router.navigateByUrl('');
      return this.product = product;
    })
    
  }
}
