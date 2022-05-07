import React from "react";
import UserLayout from "Layout/userLayout";
import AdminLayout from "Layout/adminLayout";

const WithLayoutpages = (Component, role = 'user') => {
  return (props) => {
    if (role == 'user')
      return (
        <UserLayout>
          <Component {...props} />
        </UserLayout>
      );
    return (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    );
  };
};

export default WithLayoutpages;
