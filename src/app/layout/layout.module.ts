import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule
      ],
    exports: [MenuComponent]
})
export class LayoutModule { }
