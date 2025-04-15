import React, { useState } from "react";
import { SignupForm } from "../components/form";
import { Pagination, UserList } from "../components/user";
import { FormValues, User } from "../types/user";
import userData from "./intialuserData.json";

const UserManagement: React.FC = () => {
  const [users, setUser] = useState<User[]>(userData as User[]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFormSubmit = (values: FormValues) => {
    setUser((prevUsers) => [
      {
        id: prevUsers.length + 1,
        name: values.name,
        email: values.email,
        contactNumber: values?.contactNumber || "",
      },
      ...prevUsers,
    ]);
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <div>
        <h2>Signup Form</h2>
        <SignupForm onSubmitSuccess={handleFormSubmit} />
      </div>

      <div className="user-list-section">
        <h2>User List</h2>
        <UserList users={currentUsers} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={goToPrevPage}
          onNextPage={goToNextPage}
        />
      </div>
    </div>
  );
};

export default UserManagement;
