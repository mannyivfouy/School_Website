export interface InternshipStudent {
  name: string;
  position: string;
  company: string;
  image?: string;
  companyImg?: string;
}

export interface InternshipData {
  MIS: InternshipStudent[];
  BIT: InternshipStudent[];
  Design: InternshipStudent[];
}
