export class QueryTicketsDto {
    topic?: string;
    region?: string;
    fromDate?: Date;
    toDate?: Date;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }