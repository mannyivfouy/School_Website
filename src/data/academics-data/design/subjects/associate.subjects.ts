export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  // year: number,
  semester: number;
  price?: number;
  subjects: Subject[];
}

export const designAssociateSubjects: SemesterSubjects[] = [];
