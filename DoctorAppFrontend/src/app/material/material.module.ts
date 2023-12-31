import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes dematerial
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LayoutModule } from "@angular/cdk/layout";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    
    
  ],
  exports: [
MatCardModule,
MatButtonModule,
MatAutocompleteModule,
MatButtonToggleModule
,MatCheckboxModule
,MatDialogModule
,MatDividerModule
,MatExpansionModule
,MatFormFieldModule
,MatGridListModule
,MatIconModule
,MatInputModule
,MatListModule
,MatMenuModule
,MatPaginatorModule
,MatProgressBarModule
,MatProgressSpinnerModule
,MatRadioModule 
,MatSelectModule
,MatSidenavModule
,MatSlideToggleModule
,MatSliderModule
,MatSnackBarModule
,MatSortModule
,MatTableModule
,MatTabsModule
,MatToolbarModule
,MatTreeModule
,MatTooltipModule
,LayoutModule
  ]
})
export class MaterialModule { }
