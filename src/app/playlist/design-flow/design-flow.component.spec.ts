import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFlowComponent } from './design-flow.component';

describe('DesignFlowComponent', () => {
  let component: DesignFlowComponent;
  let fixture: ComponentFixture<DesignFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
