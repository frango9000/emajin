import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PhotosCardComponent} from './photos-card.component';

describe('PhotosCardComponent', () => {
  let component: PhotosCardComponent;
  let fixture: ComponentFixture<PhotosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
