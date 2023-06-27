import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentComponent } from '../content/content.component'; 

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule,
    MatSidenavModule,
    NgIf,
    ContentComponent,
    SideBarComponent,
    MatButtonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  showFiller = false;
}
