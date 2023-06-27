import { CommonModule } from '@angular/common';
import {OnInit, Component, Injectable, ViewChild, inject, ElementRef} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PersonApiService } from '../../data-access/person-api.service';
import { UsersVM } from '../../data-access/usersVM.model';


@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule, 
    MatIconModule,
    MatMenuModule,FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
@Injectable()
export class TableComponent implements OnInit {

  data: any;
  isChecked!: boolean;
  dataSource:any;
  private personService = inject(PersonApiService);
  displayedColumns: string[] = ['actions', 'login', 'mail', 'phone', 'role', 'date_chg','date_crt','status','ep'];
  public result: UsersVM[] = [];
  @ViewChild('checkbox') checkbox!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  async ngOnInit() {
    this.data = await this.personService.getAll()
    this.result = [ ...this.data.users];
    for(let i = 0; i< this.data.users.length ; i++){
      this.result[i].is_admin=this.data.data[i].is_admin;
      this.result[i].is_ecp=this.data.data[i].is_ecp;
      this.result[i].status=this.data.data[i].status;
    }
    this.dataSource = new MatTableDataSource<UsersVM>(this.result);    
  }

  public onChange(element:any){
   console.log(element)
  }
}

