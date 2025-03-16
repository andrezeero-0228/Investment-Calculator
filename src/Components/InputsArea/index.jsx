export default function InputsArea({ investiment, handleInvestimentChange }) {
  const inputFields = [
    { label: "Initial Investiment", key: "initialValue" },
    { label: "Anual Investiment", key: "monthlyDeposit" },
    { label: "Expected Return", key: "expectedReturn" },
    { label: "Duration", key: "durationInYears" },
  ];

  return (
    <section id="user-input">
      <div className="input-group">
        {inputFields.map((field) => (
          <p key={field.key}>
            <label>{field.label}</label>
            <input
              min={0}
              type="number"
              id={field.key}
              value={investiment[field.key]}
              onChange={(e) =>
                handleInvestimentChange(field.key, e.target.value)
              }
            />
          </p>
        ))}
      </div>
    </section>
  );
}
