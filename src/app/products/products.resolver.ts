import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsResolver implements Resolve<Observable<any>> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.productsService.getProducts();
  }
}
