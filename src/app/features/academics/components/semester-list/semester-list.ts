import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Subject } from '../../../../../data/academics-data/mis/subjects/bachelor.subjects';

@Component({
  selector: 'app-semester-list',
  imports: [CommonModule],
  templateUrl: './semester-list.html',
  styleUrl: './semester-list.css',
})
export class SemesterList {
  @Input() subjects: Subject[] = [];
}
