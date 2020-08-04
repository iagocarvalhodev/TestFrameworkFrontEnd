import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MaterialModule } from '../../material.module'
import { LayoutComponent } from './layout.component'

describe('LayoutComponent', () => {
  let component: LayoutComponent
  let fixture: ComponentFixture<LayoutComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [MaterialModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render header', () => {
    const fixtureScene = TestBed.createComponent(LayoutComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('header app-header')).toBeTruthy()
  })

  it('should render content', () => {
    const fixtureScene = TestBed.createComponent(LayoutComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.container .content')).toBeTruthy()
  })
})
