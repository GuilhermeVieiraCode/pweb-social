import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [ MenuComponent ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule
      ],
    exports: [MenuComponent]
})
export class LayoutModule { }
