
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UersdataService } from 'src/app/uersdata.service';
import Swal from 'sweetalert2';

export interface Element {
  name: number;
  email: number;
  phone: number;
  dob: string;
  countryCode:number;
  address:number;
  
}

@Component({
  selector: 'app-list-merchant',
  templateUrl: './list-merchant.component.html',
  styleUrls: ['./list-merchant.component.css']
})
export class ListMerchantComponent implements OnInit,AfterViewInit {

 
  displayedColumns: string[] = [ 'id', 'name', 'email', 'dob', 'countryCode','address','actions'];
  dataSource= new MatTableDataSource<Element>();
  
  @ViewChild('Paginater') paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;
  
 


  constructor(private userdata:UersdataService, private router: Router, private route: ActivatedRoute,) {
    this.dataSource=new MatTableDataSource
   }
    

    getuser(){
      this.userdata.get('merchant').subscribe((res:any)=>{
        console.log(res)
        this.dataSource=res.data
      })
    }

  ngOnInit(): void {
    this.getuser();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//   editid(row:any){
//  this.userdata.getby('merchant/id-here'+row.id).subscribe((res:any)=>{
//   console.log(res)
//  })
//   }
    
editId(id:string) {
    console.log(id, "elementid")
    if (id){
      this.router.navigate([`merchant/edit/${id}`])
    }
  }

  
  deletid(id:string){  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.value) {
      this.userdata.delete('merchant/'+id).subscribe((res: any) => {
        let data = {
          search: null,
        };
     
       Swal.fire('Deleted!', 'User has been deleted.', 'success');
        this.getuser();
      });
    }
  });
}




  
 


  // save(element:any){

  // }
  

  
  FilterChange(event: Event) {
    console.log(event, "event");

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


}
