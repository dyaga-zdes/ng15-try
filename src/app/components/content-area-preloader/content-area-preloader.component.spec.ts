import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaPreloaderComponent } from './content-area-preloader.component';

describe('ContentAreaPreloaderComponent', () => {
  let component: ContentAreaPreloaderComponent;
  let fixture: ComponentFixture<ContentAreaPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAreaPreloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAreaPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
