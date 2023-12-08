import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";

type Props = {}

export const Notifications = (_props: Props) => {
  return (
    <div>
      {" "}
      <HeaderNav title="Notifications" />
      <Navbar />
    </div>
  );
}