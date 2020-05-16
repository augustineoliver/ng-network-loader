import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLoaderComponent } from './network-loader.component';

describe('NetworkLoaderComponent', () => {
  let component: NetworkLoaderComponent;
  let fixture: ComponentFixture<NetworkLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
