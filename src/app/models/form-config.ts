import { IFormStructure } from './form.interface';

export const formConfig: IFormStructure[] = [
  {
    type: 'text',
    label: 'Nome do cliente',
    name: 'name',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Nome é obrigatório',
      },
    ],
  },
  {
    type: 'textarea',
    label: 'Observação do contrato',
    name: 'description',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Observação do contrato',
      },
    ],
  },
  {
    type: 'number',
    label: 'Idade do cliente',
    name: 'age',
    value: '',
    validations: [],
  },
  {
    type: 'radio',
    label: 'Genêro do cliente',
    name: 'gender',
    value: true,
    options: [
      { label: 'Masculino', value: true },
      { label: 'Feminino', value: false },
    ],
    validations: [],
  },
  {
    type: 'select',
    label: 'Estado civil',
    name: 'representant',
    value: 1,
    options: [
      { label: 'Solteiro(a)', value: 'solteiro(a)' },
      { label: 'Casado(a)', value: 'casado(a)' },
      { label: 'Viuvo(a)', value: 'viuvo(a)' },
    ],
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Dizer se o cliente possui representante é obrigatório',
      },
    ],
  },
  {
    type: 'date',
    label: 'Data de nascimento',
    name: 'birthDate',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Data de nascimento é obrigatório',
      },
    ],
  },
];
