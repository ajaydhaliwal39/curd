import { Component, OnInit, ViewChild, EventEmitter, Output, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { UersdataService } from 'src/app/uersdata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone: number;
  dob: string;
  countryCode: string;
  address: string;
}


@Component({
  selector: 'app-add-edit-merchant',
  templateUrl: './add-edit-merchant.component.html',
  styleUrls: ['./add-edit-merchant.component.css']
})
export class AddEditMerchantComponent implements OnInit, AfterViewInit {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;
  addEmployees: FormGroup;
  options = {
    type: [],
    componentRestriction: {
      country: [],
    },
  };
  id: any;
  type: any
  pageView: any;
  submitted: boolean = false;
  location: any;

  constructor(private userdata: UersdataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,) {

    this.addEmployees = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),]],
      phone: [undefined, [Validators.required]],
      countrycode: ['', [Validators.required]],
    })
    this.route.params.subscribe((params: Params) => this.id = params['id']);
    this.route.params.subscribe((params: Params) => this.pageView = params['view']);

    this.type = this.pageView;
    // console.log(this.type)
  }

  ngOnInit(): void {
    if (this.pageView !== 'add') {
      this.getMerchant(this.id)
    }
  }


  ngAfterViewInit(): void {

    this.setPlaceAutocomplete();
  }

  private setPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'in' },
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }
  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }



  handleAddressChange(event: any) {
    console.log(event, "frghue");
    let long: any;
    let lat: any;
    (long = event.geometry.location.lng()),
      (lat = event.geometry.location.lat());
    this.addEmployees.patchValue({
      address: event.formatted_address,
      longitude: long,
      latitude: lat,
    });


  }

  
onSubmit() {
   this.submitted = true;
  // debugger
  (this.type == 'add'
  
   ? this.userdata.post('merchant/', this.addEmployees.value):
   this.userdata.put('merchant/'+this.id,this.addEmployees.value)
  ).subscribe((res:any)=>{
    console.log(res);
    this.router.navigateByUrl('/list-merchant')
  })
  if(this.addEmployees.valid){
    this.addEmployees.enabled
  }
  else{
    this.addEmployees.markAllAsTouched()
  }
}

  // onSubmit() {
  //    console.log(this.addEmployees.value);
  //   if (this.addEmployees.value.name === '' || this.addEmployees.value.dob === '' || this.addEmployees.value.email === '' || this.addEmployees.value.countrycode === '' || this.addEmployees.value.address === '') {
  //     alert('Please Fill All fields')
  //     return
  //   } else {
  //     this.userdata.post('merchant/', this.addEmployees.value).subscribe(
  //         (res: any) => {
  //         this.router.navigateByUrl('/list-merchant')
  //         console.log(res)
  //       })
  //   }
    
  // }; 

    getMerchant(id: any) {
    this.userdata.getby('merchant/' + id).subscribe((res: any) => {
      console.log(res)
      this.addEmployees.patchValue(res.data);

      if (this.type == "view") {
        this.addEmployees.disable();
      }
    });
  }


  // update() {
  //   this.userdata.put('merchant/' + this.id, this.addEmployees.value).subscribe((res: any) => {
  //     console.log(res)
  //     this.router.navigateByUrl('/list-merchant')
  //   })
  // }


}


