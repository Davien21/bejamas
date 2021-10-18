function SelectBox({ options, selectedOption, onChangeOption }) {
  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => onChangeOption(e.target.value.toLowerCase())}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
