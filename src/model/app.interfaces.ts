// 👇 Grundinterface
export interface Program {
  id: ID;
  namn: string;
  createdAt?: Date;
  exercises?: Exercise[];
}

// 👇 Hjälptyper
export type ProgramInput = Omit<Program, 'id'>; // används vid add
export type ProgramUpdate = Partial<ProgramInput>; // används vid update
export type ProgramRef = Pick<Program, 'id'>; // används vid delete

// 👇 Bonus: central typ för ID om du vill typa ännu tydligare
export type ID = string;

export interface Exercise {
  id: string;
  name: string;
  sets?: Set[];
}

export interface Set {
  setNumber: number;
  weight: number;
  reps: number;
  discs?: string;
}
