import {Image} from '../../models/image';
import { Component, OnInit, Input} from '@angular/core'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
image = new Image ('1', 'Primera Imagen', 'Descripción primera imagen','https://videotutoriales.com/maspa/maspa1.jpg','https://videotutoriales.com/maspa/maspa1-1.jpg');
constructor() { }

ngOnInit() {
    }
}