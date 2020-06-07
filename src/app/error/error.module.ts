import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ErrorRoutingModule,ReactiveFormsModule],
    declarations: [ErrorComponent]
})
export class ErrorModule {}
