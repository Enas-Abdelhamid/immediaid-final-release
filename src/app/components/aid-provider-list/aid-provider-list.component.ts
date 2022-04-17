import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-aidprovider-list',
  templateUrl: './aid-provider-list.component.html',
  styleUrls: ['./aid-provider-list.component.css']
})
export class AidProviderListComponent implements OnInit {
  
  Aidprovider:any = [];
  constructor(private apiService: ApiService) { 
    this.readAidprovider();
  }
  ngOnInit() {}
  readAidprovider(){
    this.apiService.getAidproviders().subscribe((data) => {
     this.Aidprovider = data;
    })    
  }
  removeAidprovider(aidprovider, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteAidprovider(aidprovider._id).subscribe((data) => {
          this.Aidprovider.splice(index, 1);
        }
      )    
    }
  }
}