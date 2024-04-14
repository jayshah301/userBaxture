import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsertComponent } from './user-insert.component';
import { DataServiceService } from '../../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserInsertComponent', () => {
  let component: UserInsertComponent;
  let fixture: ComponentFixture<UserInsertComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataServiceService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>;
  beforeEach(async () => {

    dataServiceSpy = jasmine.createSpyObj('DataServiceService', ['doesEmailExist']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routeSpy = jasmine.createSpyObj('ActivatedRoute', [], { queryParams: of({}) });


    await TestBed.configureTestingModule({
      declarations: [ UserInsertComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: DataServiceService, useValue: dataServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: routeSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
});


