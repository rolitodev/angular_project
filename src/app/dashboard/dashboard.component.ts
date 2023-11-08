import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Local Components
import { NewUsersComponent } from "../components/new-users/new-users.component";

// Angular Material Components
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, DashboardComponent, NewUsersComponent, MatTableModule, HttpClientModule]
})

export class DashboardComponent implements OnInit {

  public newFormUser: FormGroup;

  public dataSource: any = [
    {name: 'Hydrogen', email: 'xxxxxxx', picture: 'H'},
    {name: 'ZZZ', email: 'AAAA', picture: 'CCCCC'},
  ];

  public displayedColumns: string[] = ['name', 'email', 'picture'];

  public showModalNewUser: boolean = false;

  constructor(public _fb: FormBuilder, public _api: ApiService) {

    // Inicializamos el formulario para agregar un nuevo usuario
    this.newFormUser = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      image: [null, [Validators.required]]
    });

  }

  ngOnInit() {
    console.log(this.displayedColumns);
    console.log(this.dataSource);
    this._api.getAllUsers().subscribe((res) => {
      console.log(res);
    })

  }


}