import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MaterialModule } from '../../material.module'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the framework logo', () => {
    const fixtureScene = TestBed.createComponent(HeaderComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('img').src).toContain('assets/framework.svg')
  })

  it('should render Albums button', () => {
    const fixtureScene = TestBed.createComponent(HeaderComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('li:nth-child(1) > button').innerHTML).toContain('Albums')
  })

  it('should render Posts button', () => {
    const fixtureScene = TestBed.createComponent(HeaderComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('li:nth-child(2) > button').innerHTML).toContain('Posts')
  })

  it('should render Todos button', () => {
    const fixtureScene = TestBed.createComponent(HeaderComponent)
    fixtureScene.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('li:nth-child(3) > button').innerHTML).toContain('Todos')
  })
})
