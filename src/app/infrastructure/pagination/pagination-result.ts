export interface PaginationResult<T> {
    items: T[] | null;
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    previousPage: number | null;
    hasNextPage: boolean;
    nextPageIndex: number | null;
}