import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyDetailsComponent } from './add-party-details.component';

describe('AddPartyDetailsComponent', () => {
  let component: AddPartyDetailsComponent;
  let fixture: ComponentFixture<AddPartyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPartyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
