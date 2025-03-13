import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAsidebarComponent } from './user-asidebar.component';

describe('UserAsidebarComponent', () => {
  let component: UserAsidebarComponent;
  let fixture: ComponentFixture<UserAsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAsidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
