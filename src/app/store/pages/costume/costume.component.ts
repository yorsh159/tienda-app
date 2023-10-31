import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-costume',
  templateUrl: './costume.component.html',
})
export class CostumeComponent implements OnInit {

  public products: Product[] = []

  constructor( private storeService: StoreService ) {
    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this.storeService.getAllProducts().subscribe(products =>{
    
      console.log('Se esta consumiendo el servicio');
      console.log({products})
      return this.products=products
      
    })
  }

  // Solo con fines de prueba
  searchById(id:number){
   
    this.storeService.searchProductById(id).subscribe(product => {
      console.log({product})
    })

   return console.log({id})
   
  }





}
