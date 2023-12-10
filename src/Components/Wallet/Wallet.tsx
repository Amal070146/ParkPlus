import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Wallet.module.css";
import pay from "./payedarrow.png";
import add from "./addedarrow.png";
type Props = {};

export const Wallet = (_props: Props) => {
  const data = [
    {
      heading: "Payed at TCR",
      date: "20-10-2023",
      amount: -230,
    },
    {
      heading: "Added to wallet",
      date: "20-10-2022",
      amount: 130,
    },
    {
      heading: "Payed at TCR",
      date: "20-10-2023",
      amount: -30,
    },
    {
      heading: "Added at TCR",
      date: "20-10-2023",
      amount: 300,
    },
    {
      heading: "Payed at TCR",
      date: "20-10-2023",
      amount: -230,
    },
    {
      heading: "Payed at TCR",
      date: "20-10-2023",
      amount: -130,
    },
    {
      heading: "Added at TCR",
      date: "20-10-2023",
      amount: 50,
    },
    {
      heading: "Payed at TCR",
      date: "20-10-2023",
      amount: -230,
    },
  ];
  return (
    <div className={styles.WalletWrapper}>
      <HeaderNav title="Wallet" />
      <div className={styles.DetailsWrapper}>
        <div className={styles.CardsWrapper}>
          <div className={styles.imagecont}></div>
          <div className={styles.BalanceConatiner}>
            <div className={styles.ValueDiv}>
              <h2>BALANCE</h2>
              <h1>1352</h1>
            </div>
            <div className={styles.imagecont}></div>
          </div>
        </div>
        <button>Add Amount</button>
        <div className={styles.transactionWrapper}>
          <h2>Your Transactions</h2>
          <div className={styles.ContentWrapper}>
            {data.map(({ heading, amount, date }) => {
              return (
                <div className={styles.Individals}>
                  {amount < 0 ? (
                    <img src={pay} alt="pay" />
                  ) : (
                    <img src={add} alt="add" />
                  )}
                  <div className={styles.ExtraWrap}>
                    <div className={styles.titleWrap}>
                      <h2 style={{ color: amount > 0 ? "#34A853" : "#1e3d6b" }}>
                        {heading}
                      </h2>
                      <p>{date}</p>
                    </div>
                    <div className={styles.amount}>
                      <h2 style={{ color: amount > 0 ? "#34A853" : "#1e3d6b" }}>
                        {amount}
                      </h2>
                      <div className={styles.imagecont}></div>
                    </div>
                  </div>
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
