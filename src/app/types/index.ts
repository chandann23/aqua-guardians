export interface FormState {
  success: boolean;
  errors?: {
    name?: string;
    ph?: string;
    temperature?: string;
    tds?: string;
    turbidity?: string;
    location?: string;
  };
}