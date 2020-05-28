import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptNewsComponent } from './typescript-news.component';

describe('TypescriptNewsComponent', () => {
  let component: TypescriptNewsComponent;
  let fixture: ComponentFixture<TypescriptNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
