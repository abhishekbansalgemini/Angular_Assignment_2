import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserdataService } from 'src/app/services/userdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent {

  constructor(public activeModal: NgbActiveModal, private userdata: UserdataService, public router: Router) {

  }

  // this function is used to pass (or save) data to services
  saveData() {
    this.userdata.loginUser(this.data);
    this.router.navigate(['./user-module/view']); // After click on save button, it get redirect to view component
    this.activeModal.dismiss('Cross click'); // To dismiss that modal 
  }

  @Input() data: any;

  // This function is checking that either image is get input by the user or not... because image is optional
  // If image is not uploaded than we will not going to show that image signal
  // check() {
  //   if (this.data.url !== "") {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }


}
