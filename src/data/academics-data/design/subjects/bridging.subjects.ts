export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  semester: number;
  subjects: Subject[];
}

export const designBridgingSubjects: SemesterSubjects[] = [];
