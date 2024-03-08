export interface procedureResponse {
  code: string;
  type: Type;
  state: string;
  reference: string;
  amount: string;
  send: boolean;
  startDate: string;
  group: string;
  details: details;
}

export interface details {
  solicitante: applicant;
  requirements: any[];
  pin: number;
}

export interface applicant {
  nombre: string;
  paterno: string;
  materno: string;
  telefono: string;
  dni: string;
  tipo: string;
  documento: string;
}

export interface Type {
  nombre: string;
}
