import React from "react";

const Table = ({ countries, setCountries }) => {
  const sortedCountries = countries.sort((a, b) => b.gold - a.gold);

  const handelDeleteBtn = (id) => {
    const filteredCountry = countries.filter((selected) => {
      if (selected.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setCountries(filteredCountry);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {sortedCountries.map((country) => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>
                <button onClick={() => handelDeleteBtn(country.id)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
