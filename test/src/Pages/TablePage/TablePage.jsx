import React from "react";
import "./styles.css";
import datas from "./data.json";
import Table from "../../Components/Table/Table";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export const TablePage = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate replace to={ROUTES.LOGIN_PAGE} />;
  }
  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Region", value: "region" },
    { heading: "Country", value: "country" },
    { heading: "PostalZip", value: "postalZip" },
    { heading: "Region", value: "region" },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ margin: "20px" }}>
        <h1>Table</h1>
        <div className="table-container">
          <Table data={datas} column={column} />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
