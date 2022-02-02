import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcucacionComponent } from './edcucacion.component';

describe('EdcucacionComponent', () => {
  let component: EdcucacionComponent;
  let fixture: ComponentFixture<EdcucacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdcucacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcucacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
