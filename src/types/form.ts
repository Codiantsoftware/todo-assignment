export interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}
