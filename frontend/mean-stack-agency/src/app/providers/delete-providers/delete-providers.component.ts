import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-delete-providers',
  templateUrl: './delete-providers.component.html',
  styles: [
  ]
})
export class DeleteProvidersComponent implements OnInit {
  id!:number;
  company!:string;
  isDeleted = false;
  constructor(private providerService:ProviderService,private route:ActivatedRoute){

  }
  ngOnInit():void
{
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam !== null) {
    this.id = parseInt(idParam);
    }
  }
  );
  this.deleteRecord();
}
deleteRecord(){
    this.providerService.deleteProvider(this.id)
    .subscribe({
      next:(data)=>{
       console.log(data);
       this.company = data.company.company_name;
       this.isDeleted = true;
      },
      error:(error)=>{
        console.log(error);
      },
    });
  }
}

