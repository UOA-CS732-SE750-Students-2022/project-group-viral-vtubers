import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TagsComponent } from './tags.component';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsComponent],
      imports: [NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    component.tags = [
      {
        id: '1',
        name: 'Modding',
        color: '#e4a324b5',
        backgroundColor: '#fff3e5',
      },
      {
        id: '2',
        name: 'Colouring',
        color: '#2488E4',
        backgroundColor: '#E5FAFF',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate tags', () => {
    const expected = ['Modding', 'Colouring'];
    const tagTexts = fixture.debugElement.nativeElement
      .querySelectorAll('p[data-test-id="tag-name"]')
      .forEach((c: HTMLElement, i: number) =>
        expect(c.textContent).toContain(expected[i])
      );
  });
});
