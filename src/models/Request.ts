export enum RequestStatus {
  IDLE,
  FETCHING,
  SUCCESS,
  FAILURE,
}

export type APIResponse<T> = {
  data: T;
  message?: string;
};

export type APIListResponse<T> = APIResponse<{
  count: number;
  list: T[];
}>;

export type GenericError = {
  message: string;
};

export type PaginationQuery = {
  field: string;
  query: string;
};

export type PaginationPayload = {
  filter?: PaginationQuery;
  relations?: string[];
  skip?: number;
  take?: number;
};
