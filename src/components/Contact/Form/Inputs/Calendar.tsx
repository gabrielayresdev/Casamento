import React from "react";
import styles from "./Calendar.module.sass";

interface ICalendar {
  type: "year" | "month";
  currentDate: string;
  changeDate: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Calendar = ({
  type,
  currentDate,
  changeDate,
  year,
  isActive,
  setActive,
}: ICalendar) => {
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [date, setDate] = React.useState<Date>(defineDate);

  React.useEffect(() => setDate(() => defineDate()), [year]);

  function defineDate() {
    const current = new Date();
    if (year === String(current.getFullYear())) {
      return current;
    } else {
      return new Date("dez-3000");
    }
  }

  const getItems = () => {
    if (type === "year") {
      const currentYear = new Date().getFullYear();
      const aux = [];
      for (let i = 0; i < 9; i++) {
        aux.push(currentYear + i + "");
      }
      return aux;
    } else {
      return [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
      ];
    }
  };
  const items = getItems();

  React.useEffect(() => {
    const handleModal = (e: MouseEvent) => {
      if (
        e.target &&
        e.target instanceof Element &&
        !calendarRef.current?.contains(e.target)
      ) {
        setActive(false);
      }
    };
    if (isActive) {
      document.addEventListener("mousedown", handleModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  });

  return (
    <div className={styles.calendar} ref={calendarRef}>
      {items.map((item, index) => (
        <div
          key={item}
          className={`${styles.option} ${
            item === currentDate ? styles.active : ""
          } ${
            type === "month" && index < date.getMonth()
              ? styles.unavailable
              : ""
          }`}
          onClick={() => {
            changeDate(item);
            setActive(false);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
