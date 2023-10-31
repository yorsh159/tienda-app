import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styles: [
  ]
})
export class DecorationComponent implements OnInit {
  public products: Product[] = []

  constructor( private storeService: StoreService ) {
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this.storeService.getAllDecoration().subscribe(products =>{
    
      console.log('Se esta consumiendo el servicio');
      console.log({products})
      return this.products=products
      
    })
  }
}
