export interface User {
  id: number;
  name: string;
  email: string;
  contactNumber?: string;
}

export interface FormValues {
  name: string;
  email: string;
  contactNumber?: string;
}

export interface UserListProps {
  users: User[];
}

export interface UserTableData extends User {
  key: string;
  tags?: string[];
}

export interface SignupFormProps {
  onSubmitSuccess?: (values: SignupFormValues) => void;
}

export interface SignupFormValues {
  name: string;
  email: string;
  contactNumber: string;
}
