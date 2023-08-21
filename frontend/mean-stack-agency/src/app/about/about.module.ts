import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations:[AboutComponent],
    imports:[RouterModule],
    exports:[AboutComponent],
    providers:[],
})
export class AboutModule{}