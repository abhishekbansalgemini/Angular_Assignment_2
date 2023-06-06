import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ModalCompComponent } from '../modal-comp/modal-comp.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  constructor(public router: Router, private modalService: NgbModal) { }
  ngOnInit(): void {

  }
 
 
 
  tech: any[] = []; // contains all the technologies which are checked by the users

// functions to get the checked value (total 5 functions for 5 different checkboxes)

  gettech1(e: any) {
    if (e.target.checked) {
      this.tech.push(e.target.value);
    }
    else{
      let index = this.tech.indexOf(e.target.value);
      if(index > -1){
        this.tech.splice(index,1);
      }
    }
  }
  gettech2(e: any) {
    if (e.target.checked) {
      this.tech.push(e.target.value);
    }
    else{
      let index = this.tech.indexOf(e.target.value);
      if(index > -1){
        this.tech.splice(index,1);
      }
    }

  }
  gettech3(e: any) {
    if (e.target.checked) {
      this.tech.push(e.target.value);
    }
    else{
      let index = this.tech.indexOf(e.target.value);
      if(index > -1){
        this.tech.splice(index,1);
      }
    }

  }
  gettech4(e: any) {
    if (e.target.checked) {
      this.tech.push(e.target.value);
    }
    else{
      let index = this.tech.indexOf(e.target.value);
      if(index > -1){
        this.tech.splice(index,1);
      }
    }

  }
  gettech5(e: any) {
    if (e.target.checked) {
      this.tech.push(e.target.value);
    }
    else{
      let index = this.tech.indexOf(e.target.value);
      if(index > -1){
        this.tech.splice(index,1);
      }
    }
    
  }

  tech_error=false
  

  //  Function for fetching the image url so that we can display it on the webpage

  message = "";
  imagePath: any;
  url: any = ""; // After below function executes, this value will contains a URL by which we can show the image

  onFileChanged(event: any) {
    this.url = "";
    this.message = "";
    const files = event.target.files;

    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    console.log(mimeType)
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    else if(mimeType !== 'image/jpg' && mimeType !== 'image/png' && mimeType !== 'image/jpeg'){
      this.message = "this type of image format is not supported";
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
    this.message = ''
  }


  loginForm = new FormGroup({
    name: new FormControl((''), [Validators.required, Validators.pattern('^[A-Za-z][a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
    number: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
    gender: new FormControl('', [Validators.required]),
    tech: new FormControl(this.tech),
    category: new FormControl('', [Validators.required])
  })

  

  // For Showing Modal (After Clicking on Preview Button)
  modalDAta:any
  // modelref:any;
  open(){
    const modelref = this.modalService.open(ModalCompComponent);
    this.modalDAta = this.loginForm.value;
    this.modalDAta.url = this.url;
    modelref.componentInstance.data = this.modalDAta;
  }

  
  

  //getter method to show error message for required field
  get name() {
    return this.loginForm.get('name')
  }

  get email() {
    return this.loginForm.get('email')
  }

  get number() {
    return this.loginForm.get('number')
  }

  get genderr() {
    return this.loginForm.get('gender')
  }

  get categoryr() {

    return this.loginForm.get('category')
  }
}
