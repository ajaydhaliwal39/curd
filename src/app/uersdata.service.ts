import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UersdataService {
baseurl=environment.base_url
  constructor(private http:HttpClient) { }
   
  get(url:string){
    return this.http.get(this.baseurl+url)
     }

  getby(url:string){
  return this.http.get(this.baseurl+url)
  }

   post(url:string,body:any){
      return this.http.post(this.baseurl+url,body)
    }
       
    put(url:string,body:any){
      return this.http.put(this.baseurl+url,body)
    }
    
     delete(url:string){
       return this.http.delete(this.baseurl+url)
     }
}
