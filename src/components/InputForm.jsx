import React, { useState } from "react";

const InputForm = ({ countries, setCountries }) => {
  const [inputCountry, setInputCountry] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const searchCountry = countries.find(
    ({ name }) => name === inputCountry.name
  );

  const onInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputCountry({
      ...inputCountry,
      [name]: value,
      id: new Date().getTime(),
    });
  };

  // 추가
  const addCountry = (e) => {
    e.preventDefault();

    if (inputCountry.name === "") {
      alert("국가명을 적어주세요");
    } else if (!searchCountry) {
      setCountries([...countries, inputCountry]);
    } else {
      alert("이미 추가된 나라입니다");
    }
    console.log(countries);

    setInputCountry({
      name: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  //수정
  const handleUpdateBtn = (e) => {
    e.preventDefault();
    if (searchCountry) {
      searchCountry.name = inputCountry.name;
      searchCountry.gold = inputCountry.gold;
      searchCountry.silver = inputCountry.silver;
      searchCountry.bronze = inputCountry.bronze;

      setCountries([...countries]);
    } else {
      alert("나라를 추가해주세요");
    }
  };

  return (
    <div>
      <form onSubmit={addCountry}>
        <div>
          <label>국가명</label>
          <input
            type="text"
            placeholder="국가 입력"
            value={inputCountry.name}
            name="name"
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>금메달</label>
          <input
            type="number"
            value={inputCountry.gold}
            name="gold"
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>은메달</label>
          <input
            type="number"
            name="silver"
            value={inputCountry.silver}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>동메달</label>
          <input
            type="number"
            name="bronze"
            value={inputCountry.bronze}
            onChange={onInputChange}
          />
        </div>
        <button type="submit">국가 추가</button>
        <button type="button" onClick={handleUpdateBtn}>
          업데이트
        </button>
      </form>
    </div>
  );
};

export default InputForm;
