import React from "react";
import Header from "./Header";

function Layout({ children, data_theme }) {
  return (
    <div className="full-container" data-theme={data_theme}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
