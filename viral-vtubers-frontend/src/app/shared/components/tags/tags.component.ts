import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Tag, TagFragmentFragment } from 'src/schema/type';

interface ColorTags extends Tag {
  color: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class TagsComponent implements OnInit {
  @Input()
  public isEdit = true;

  @Input()
  public tags: TagFragmentFragment[] = [];

  @Input()
  public allTags!: TagFragmentFragment[];

  public newTag = false;

  constructor() {}

  deleteTag(tag: Tag): void {
    this.tags = this.tags.filter((t) => t.id !== tag.id);
  }

  show(): void {
    this.newTag = true;
  }

  getAllTags(): Array<ColorTags> {
    return this.allTags.filter(
      (a) => !this.tags.map((tag) => tag.id).includes(a.id)
    );
  }

  addTag(tag: ColorTags): void {
    // TODO check tags for duplicates
    this.tags.push(tag);
    this.hide();
  }

  hide(): void {
    this.newTag = false;
  }

  ngOnInit(): void {}
}
