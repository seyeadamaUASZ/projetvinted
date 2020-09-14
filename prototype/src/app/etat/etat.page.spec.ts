import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtatPage } from './etat.page';

describe('EtatPage', () => {
  let component: EtatPage;
  let fixture: ComponentFixture<EtatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
