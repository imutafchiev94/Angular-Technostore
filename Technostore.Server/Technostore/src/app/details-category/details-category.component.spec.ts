import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsCategoryComponent } from './details-category.component';

describe('DetailsCategoryComponent', () => {
  let component: DetailsCategoryComponent;
  let fixture: ComponentFixture<DetailsCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
