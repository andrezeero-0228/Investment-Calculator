import React, { useState } from "react";
import InputsArea from "../InputsArea";
import Results from "../Results";
import { calculateInvestmentResults } from "../../util/investment";

export default function CalculatorBody() {
  const [investiment, setInvestiment] = useState({
    initialValue: 10000,
    monthlyDeposit: 1000,
    expectedReturn: 6,
    durationInYears: 10,
  });
  let results = [];

  const handleInvestimentChange = (name, value) => {
    setInvestiment((prevState) => {
      return {
        ...prevState,
        [name]: +value,
      };
    });
  };

  if (
    investiment.initialValue &&
    investiment.monthlyDeposit &&
    investiment.expectedReturn &&
    investiment.durationInYears
  ) {
    const annualData = calculateInvestmentResults({
      initialInvestment: investiment.initialValue,
      annualInvestment: investiment.monthlyDeposit,
      expectedReturn: investiment.expectedReturn,
      duration: investiment.durationInYears,
    });
    results = annualData;
  }

  return (
    <>
      <InputsArea
        investiment={investiment}
        handleInvestimentChange={handleInvestimentChange}
      />
      {results.length ? <Results results={results} /> : null}
    </>
  );
}
