import { Aidprovider } from './../../model/aidprovider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-aidprovider-edit',
  templateUrl: './aid-provider-edit.component.html',
  styleUrls: ['./aid-provider-edit.component.css'],
})
export class AidProviderEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  aidproviderData: Aidprovider[];
  AidproviderProfile: any = ['First Aid', 'CPR', 'Defibrillator', 'Doula', 'Midwife'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateAidprovider();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAidprovider(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      location: [
        '',
        [
          Validators.required,
          
        ],
      ],
      aidtype: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('aidtype').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getAidprovider(id) {
    this.apiService.getAidprovider(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        location: data['location'],
        aidtype: data['aidtype'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }
  updateAidprovider() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      location: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      aidtype: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateAidprovider(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/aidproviders-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}