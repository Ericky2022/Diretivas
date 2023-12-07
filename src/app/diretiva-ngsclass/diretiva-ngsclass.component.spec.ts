import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgsclassComponent } from './diretiva-ngsclass.component';

describe('DiretivaNgsclassComponent', () => {
  let component: DiretivaNgsclassComponent;
  let fixture: ComponentFixture<DiretivaNgsclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgsclassComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgsclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
