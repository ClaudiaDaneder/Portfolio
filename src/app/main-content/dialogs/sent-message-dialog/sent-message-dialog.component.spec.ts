import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMessageDialogComponent } from './sent-message-dialog.component';

describe('SentMessageDialogComponent', () => {
  let component: SentMessageDialogComponent;
  let fixture: ComponentFixture<SentMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentMessageDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
