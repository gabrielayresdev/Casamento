import React from "react";
import styles from "./DateInput.module.sass";
import ArrowIcon from "/src/assets/icons/Arrow.png";
import Calendar from "./Calendar";

interface IDateInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean | undefined;
  name: string;
}

const DateInput = ({ value, setValue, validate, name }: IDateInput) => {
  const [month, setMonth] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setValue(`${month} - ${year}`);
    validate();
    if (inputRef.current) {
      inputRef.current.value = `${month}. de ${year}`;
    }
  }, [month, year, setValue, validate]);

  React.useEffect(() => {
    if (value.length === 0) {
      setMonth("");
      setYear("");
    }
  }, [value]);

  const [yearActive, setYearActive] = React.useState<boolean>(false);
  const [monthActive, setMonthActive] = React.useState<boolean>(false);

  return (
    <div className={styles.datePicker}>
      <input
        type="text"
        name={name}
        id=""
        ref={inputRef}
        style={{ display: "none" }}
      />
      <p className={styles.label}>Data do evento</p>
      <div className={styles.pickers}>
        <div className={styles.input}>
          <span
            className={`${styles.value} ${!month ? styles.placeholder : ""}`}
          >
            {month ? month : "Mês"}
          </span>
          <img
            className={styles.arrow}
            src={ArrowIcon}
            alt="Selecionar mês"
            onClick={() => setMonthActive((current) => !current)}
          />
          {monthActive ? (
            <Calendar
              type="month"
              currentDate={month}
              changeDate={setMonth}
              year={year}
              isActive={monthActive}
              setActive={setMonthActive}
            />
          ) : null}
        </div>
        <div className={styles.input}>
          <span
            className={`${styles.value} ${!year ? styles.placeholder : ""}`}
          >
            {year ? year : "Ano"}
          </span>
          <img
            className={styles.arrow}
            src={ArrowIcon}
            alt="Selecionar ano"
            onClick={() => setYearActive((current) => !current)}
          />
          {yearActive ? (
            <Calendar
              type="year"
              currentDate={year}
              changeDate={setYear}
              year={year}
              isActive={yearActive}
              setActive={setYearActive}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DateInput;
