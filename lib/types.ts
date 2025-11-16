export type ConditionType = 
  | 'embarazo'
  | 'vih'
  | 'cancer'
  | 'trasplante_organo'
  | 'diabetes'
  | 'epoc'
  | 'adulto_mayor'
  | 'ninguna';

export interface PatientFormData {
  age: number;
  sex: 'M' | 'F';
  pregnant: boolean;
  immunocompromised: boolean;
  conditions: ConditionType[];
  chronicConditions: string;
}

export interface VaccineRecommendation {
  name: string;
  indication: 'FUERTE' | 'CONDICIONAL';
  scheme: string;
  timing?: string;
  notes?: string;
  source: string;
}
