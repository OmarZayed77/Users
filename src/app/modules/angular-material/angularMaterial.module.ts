import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatGridListModule, 
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: 
    [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule
    ],
    exports: 
    [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule
    ],
})
export class AngularMaterialModule { }
