interface StepSimple {
  stepper: number;
  id: number | null;
}

interface StepForm {
  stepper: number;
  nombre: string | null;
  celular: string | null;
  idDomicilio: number | null;
  numero: string | null;
  email: string | null;
  fechaNacimiento: string | null;
  direccion: string | null;
  ciudad: string | null;
  idDepartamento: number | null;
  barrio: string | null;
}

interface StepOperator {
  stepper: number;
  idOperador: number | null;
  numero: string | null;
  idEntidad: number | null;
}

// Tipo unión que engloba todas las posibilidades
type StepperOption = StepSimple | StepForm | StepOperator;

export let SaveStepper: StepperOption[] = [
  { stepper: 1, id: null },
  { 
    stepper: 2,
    nombre: null, 
    celular: null, 
    idDomicilio: null, 
    numero: null, 
    email: null, 
    fechaNacimiento: null, 
    direccion: null, 
    ciudad: null, 
    idDepartamento: null, 
    barrio: null 
  },
  { stepper: 3, id: null },
  { 
    stepper: 4, 
    idOperador: null, 
    numero: null, 
    idEntidad: null 
  },
  { stepper: 5, id: null }
];