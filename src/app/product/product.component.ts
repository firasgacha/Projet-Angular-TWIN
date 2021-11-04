import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //dans le composant fils en met @Input
  //on va recevoir des doneés
  @Input() product : Product;
  //exporter des fonctions vers une autre component
  @Output() notification : EventEmitter<Product>;

  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    this.notification = new EventEmitter<Product>();
    this.notification.emit(this.product);
  }
}
