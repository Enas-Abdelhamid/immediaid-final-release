import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-aidprovider-create',
  templateUrl: './aid-provider-create.component.html',
  styleUrls: ['./aid-provider-create.component.css'],
})
export class AidProviderCreateComponent implements OnInit {
  submitted = false;
  aidproviderForm: FormGroup;
  AidproviderProfile: any = ['First Aid', 'CPR', 'Defibrillator', 'Doula', 'Midwife'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.aidproviderForm = this.fb.group({
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
  // Choose aid type with select dropdown
  updateProfile(e) {
    this.aidproviderForm.get('aidtype').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.aidproviderForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.aidproviderForm.valid) {
      return false;
    } else {
      return this.apiService.createAidprovider(this.aidproviderForm.value).subscribe({
        complete: () => {
          console.log('Aid Provider successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/aidproviders-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}