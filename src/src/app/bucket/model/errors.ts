export type BucketErrors = {
  message: string;
  code: string;
};

export enum BuckerMessageErrosEnum {
  E_VALIDATE_FAILURE = 'error_validation_error',
  INTERNAL_SERVER_ERROR = 'error_internal_error',
  E_LIST_FAILURE = 'error_invalid_id',
}

export const BuckerMessageErros: {
  [key: string]: BucketErrors;
} = {
  [BuckerMessageErrosEnum.E_VALIDATE_FAILURE]: {
    message: "O campo 'data' obrigatório",
    code: 'E_VALIDATE_FAILURE',
  },
  [BuckerMessageErrosEnum.INTERNAL_SERVER_ERROR]: {
    message: 'Erro interno, tente novamente mais tarde',
    code: 'INTERNAL_SERVER_ERROR',
  },
  [BuckerMessageErrosEnum.E_LIST_FAILURE]: {
    message: 'O id informado é invalido',
    code: 'E_LIST_FAILURE',
  },
};
