import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayxoComponent } from './playxo.component';

describe('PlayxoComponent', () => {
  let component: PlayxoComponent;
  let fixture: ComponentFixture<PlayxoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayxoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
