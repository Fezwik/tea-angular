import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "../../../services/product-service.service";
import {Router} from "@angular/router";
import {ProductType} from "../../../types/product-type.type";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;
  constructor(private productService: ProductService, private router: Router) { }

  public products: ProductType[] = [];
  ngOnInit(): void {
    this.subscription = this.productService.getProducts()
      .subscribe({
        next: data => {
          this.products = data;
        },
        error: error => {
          console.log(error);
          this.router.navigate(['']);
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
