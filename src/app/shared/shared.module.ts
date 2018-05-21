import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule } from '@angular/material';

import { ResourcesService } from './service/resources.service';

@NgModule({
	imports: [ CommonModule, MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule ],
	declarations: [  ],
	exports: [  ],
	providers: [ ResourcesService ]
})
export class SharedModule {}
