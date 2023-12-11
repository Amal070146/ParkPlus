import { useState } from "react";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Profile.module.css";
import Modal from "../../utils/Modal/Modal";

type Props = {};

export const AddVehicle = (_props: Props) => {
  const data = [
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
  ];
   const [modalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);
    const [newVehicle, setNewVehicle] = useState<VehicleDetails>({
      name: "",
      regno: "",
      owner: "",
    });
       const loadVehicles = (): VehicleDetails[] => {
         const storedVehicles = localStorage.getItem("vehicles");
         return storedVehicles ? JSON.parse(storedVehicles) : [];
       };
       const saveVehicles = (vehicles: VehicleDetails[]) => {
         localStorage.setItem("vehicles", JSON.stringify(vehicles));
       };
       const [vehicles, setVehicles] = useState<VehicleDetails[]>(loadVehicles);


    const handleAddVehicle = (newVehicle: VehicleDetails) => {
      if (vehicles.length >= 5) {
        alert("Cannot add more than 5 vehicles");
        return;
      }

      const newVehicles = [...vehicles, newVehicle];
      setVehicles(newVehicles);
      saveVehicles(newVehicles);
      closeModal();
    };
  return (
    <div className={styles.AddVehicleWrapper}>
      <HeaderNav title={"Add Vehicles"} />
      <div className={styles.Details}>
        {data.map(({ name, owner, number }) => {
          return (
            <button>
              <p>{name}</p>
              <p>{number}</p>
              <p>{owner}</p>
            </button>
          );
        })}
        <button className={styles.addbutton} onClick={openModal}>
          <p>+</p>
          <h4>Add Vehicle</h4>
        </button>
        <Modal show={modalOpen} onClose={closeModal}>
          <div className={styles.modalForm}>
            <h2>Add Vehicle</h2>
            <div>
              <input
                type="text"
                placeholder="Enter Vehicle Name"
                value={newVehicle.name}
                onChange={(e) =>
                  setNewVehicle({
                    ...newVehicle,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Enter Registration Number"
                value={newVehicle.regno}
                onChange={(e) =>
                  setNewVehicle({
                    ...newVehicle,
                    regno: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Enter Owner Name"
                value={newVehicle.owner}
                onChange={(e) =>
                  setNewVehicle({
                    ...newVehicle,
                    owner: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={() => handleAddVehicle(newVehicle)}
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>

      <Navbar />
    </div>
  );
};
