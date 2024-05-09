import React from "react";
import { Link } from "react-router-dom";
import Aside from "../components/common/admin/common/Aside";

const AdminLayout = ({ children }) => {
  return (
    <div id="admin-container">
      <header>
        <Link to="./index.html" class="logo">
          <img src="/images/admin_logo.jpg" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>
          <Link to="#">로그아웃 |</Link>
          <Link to="#">고객센터</Link>
        </p>
      </header>
      <main>
        <Aside />
        {children}
      </main>
      <footer>
        <p>
          Copyright(C)Farmstory All rights reserved. FARMSTORY ADMINISTRATOR
          Version 1.0.1
        </p>
      </footer>
    </div>
  );
};

export default AdminLayout;
