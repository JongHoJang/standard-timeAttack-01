import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <h1>2024 파리 올림픽</h1>
      <InputForm countries={countries} setCountries={setCountries} />
      <Table countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
