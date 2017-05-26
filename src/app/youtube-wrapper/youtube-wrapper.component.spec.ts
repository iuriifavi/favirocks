import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeWrapperComponent } from './youtube-wrapper.component';

describe('YoutubeWrapperComponent', () => {
  let component: YoutubeWrapperComponent;
  let fixture: ComponentFixture<YoutubeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
