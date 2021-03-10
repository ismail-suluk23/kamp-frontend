import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({  
  providedIn: 'root'
}) 
export class ProductService {
  apiUrl="https://localhost:44304/api/products/getall";   
  constructor(private httpCliend:HttpClient) { } 
  
  getProducts():Observable<ProductResponseModel>{ 
   return this.httpCliend.get<ProductResponseModel>(this.apiUrl);       
  }





} 
