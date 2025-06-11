export interface WorkoutProgram {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: Set[];
}

export interface Set {
  setNumber: number;
  weight: number;
  reps: number;
  discs?: string; // 🔹 Gör 'discs' valfritt
}
