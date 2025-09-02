import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aseo } from './aseo';

describe('Aseo', () => {
  let component: Aseo;
  let fixture: ComponentFixture<Aseo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aseo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aseo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
