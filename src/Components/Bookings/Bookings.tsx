import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Bookings.module.css";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Bookings = (_props: Props) => {
  const data = [
    {
      date: "05-10-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 260,
    },
    {
      date: "23-12-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 360,
    },
    {
      date: "15-11-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 300,
    },
    {
      date: "25-09-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 360,
    },
    {
      date: "25-09-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 360,
    },
    {
      date: "25-09-2002",
      place: "TSR parking",
      time: "7:30am to 9:30pm",
      amount: 360,
    },
  ];

  const getMonthAbbreviation = (monthNum: string | number) => {
    const monthMap: { [key: string]: string } = {
      "01": "JAN",
      "02": "FEB",
      "03": "MAR",
      "04": "APR",
      "05": "MAY",
      "06": "JUN",
      "07": "JUL",
      "08": "AUG",
      "09": "SEP",
      "10": "OCT",
      "11": "NOV",
      "12": "DEC",
    };
    return monthMap[String(monthNum)] || monthNum;
  };
  const navigate = useNavigate();
  const handleTicket = () => {
    navigate("/ticket");
  };

  return (
    <div className={styles.BookingWrapper}>
      {" "}
      <HeaderNav title="Bookings" />
      <div className={styles.DetailsWrapper}>
        <div className={styles.scheduleWrap}>
          <h1>Your Schedule</h1>
          <div className={styles.Datas}>
            {data.map(({ date, place, time }) => {
              const month = getMonthAbbreviation(date.slice(3, 5));
              return (
                <div onClick={handleTicket} className={styles.IndividualCont}>
                  <div className={styles.Dates}>
                    <p>{month}</p>
                    <p style={{ fontSize: "25px" }}>{date.slice(0, 2)}</p>
                  </div>
                  <div className={styles.Info}>
                    <h2>{place}</h2>
                    <p>{time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.pastBookingWrap}>
          <h1>Past Booking</h1>
          <div className={styles.TableWrap}>
            <div style={{fontSize:"18px",fontWeight:700}}>
             
              <p>Place</p> <p>Date</p>
              <p>Amount</p>
            </div>

            {data.map(({ date, place, amount }) => {
              return (
                <div>
                  <p>{place}</p> <p>{date}</p>
                  <p>{amount}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
