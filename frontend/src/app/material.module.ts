import { NgModule } from '@angular/core';

// Material components
import {
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
} from '@angular/material/';

@NgModule({
    imports: [MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatListModule, MatProgressSpinnerModule],
    exports: [MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatListModule, MatProgressSpinnerModule]
})
export class MaterialModule {}