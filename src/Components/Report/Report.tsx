import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import { Locationsvg } from "../Profile/svg";
import styles from "./Report.module.css";
import images from "./upload.png";
import { ChangeEvent, useState } from "react";

type Props = {};

export const Report = (_props: Props) => {
  const [image, setImage] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);

   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files.length > 0) {
       const img = e.target.files[0];
       setImage(URL.createObjectURL(img));
       setIsImageSelected(true);
     }
   };
  return (
    <div className={styles.ReportWrapper}>
      {" "}
      <HeaderNav title="Report" />
      <div className={styles.detailsWrapper}>
        <div className={styles.DetailSection}>
          <div className={styles.UploadSection}>
            <h2>Upload your images</h2>
            <p>
              Please upload a clear picture of the dump. (PNG, JPG images are
              preferred)
            </p>
            <label
              htmlFor="file-upload"
              className={isImageSelected ? styles.sectionAfter : ""}
              style={{ cursor: "pointer" }}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              {!isImageSelected && (
                <div className={styles.sectionBefore}>
                  <img style={{width:"100px"}} src={images} alt="Default" />{" "}
                  {/* Replace 'default-image-url' with your default image URL */}
                  <p>Drag and drop or browse to choose a file</p>
                </div>
              )}
              {isImageSelected && (
                <div>
                  <img src={image} alt="Upload Preview" />
                  <p>Drag and drop or browse to choose a file</p>
                </div>
              )}
            </label>

          
          </div>
          <div>
            <h2>Enter the location of the Parkings</h2>
            <div>
              <Locationsvg />
              <input
                type="text"
                name=""
                id=""
                placeholder="HMT Nagar, Kalamassery Kochi"
              />
            </div>
          </div>
        </div>
        <button>Report</button>
      </div>
      <Navbar />
    </div>
  );
};
