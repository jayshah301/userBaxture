import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../data-service.service';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  userForm!: FormGroup;
  isEditMode = false;
  userId!: string;
  constructor(private fb: FormBuilder, private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.userId = params['id'];
        this.isEditMode = true;
        const user = this.dataService.getUserById(this.userId);
        if (user) {
          this.userForm.patchValue(user);
        }
      }
    })
  }
  initializeForm() {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      const data: User = this.userForm.value;
      if (this.isEditMode) {
        data.id = this.userId
        this.dataService.updateUser(data);
      } else {
        this.dataService.addUser(data);
      }
      this.router.navigate(['']);
    }
    console.log(this.userForm);
  }

}
