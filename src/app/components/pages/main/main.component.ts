import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable : Observable<number>;
  private subscription: Subscription | null = null;
  public popup: boolean = false;


  constructor() {
    this.observable = new Observable(observer => {
      const timeout = setTimeout(() => {
        observer.next()
      }, 10000)

      return {
        unsubscribe() {
          clearTimeout(timeout)
        }
      }
    })
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe({
      next:() =>  this.popup = true
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
