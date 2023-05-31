import React, { useEffect, useRef, useState } from "react";
import "./AddCar.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
export default function AddCar(props) {
  const [logoB64, setLogoB64] = useState("");
  const [imgB64, setImgB64] = useState("");
  const idRef = useRef(null);
  const modelRef = useRef(null);
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const ownerRef = useRef(null);
  const [modalCloseStatus, setModalCloseStatus] = useState(false);

  useEffect(() => {
    setModalCloseStatus(false);
    console.log("useeffect running!");
  }, []);

  const closeModalHandler = () => {
    setModalCloseStatus(true);
    setTimeout(() => {
      props.closemodal(false);
    }, 500);
  };

  const addCarHandler = async () => {
    const carid = "CAR" + idRef.current.value;
    const model = modelRef.current.value;
    const name = nameRef.current.value;
    const colour = colorRef.current.value;
    const owner = ownerRef.current.value;
    const details = {
      logo: logoB64,
      img: imgB64,
      carid,
      make: model,
      model: name,
      colour,
      owner,
      isNew: true,
    };
    try {
      await axios.post("http://4.246.223.78:8080/api/addcar", details);
      console.log("Added car!");
      alert("Added car!");
      setLogoB64("");
      setImgB64("");
      idRef.current.value = "";
      modelRef.current.value = "";
      nameRef.current.value = "";
      colorRef.current.value = "";
      ownerRef.current.value = "";
      closeModalHandler();
      window.location.reload();
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <div className="model-holder">
      <div
        className={`field ${
          modalCloseStatus === true ? "closeActive" : "openActive"
        }`}
      >
        <p>Add a Car</p>
        <div className="input-properties">
          <label for="carimg">Logo:</label>
          <FileBase64
            type="file"
            multiple={false}
            max-size="1500"
            onDone={({ base64, type }) => {
              console.log(type);
              if (
                type !== "image/jpg" &&
                type !== "image/jpeg" &&
                type !== "image/png" &&
                type !== "image/svg"
              ) {
                alert(
                  "File format not supported\nSupported formats: .jpg, .jpeg, .png, .svg"
                );
                closeModalHandler();
                return;
              }
              let padding;
              let inBytes;
              let base64Length;
              if (base64.endsWith("==")) {
                padding = 2;
              } else if (base64.endsWith("=")) {
                padding = 1;
              } else {
                padding = 0;
              }

              base64Length = base64.length;
              console.log(base64Length);
              inBytes = (base64Length / 4) * 3 - padding;
              let kb = inBytes / 1000;
              let mb = kb / 1000;
              if (mb < 1) {
                setLogoB64(base64);
              } else {
                alert("File size too high! Size limit: 1.5MB");
                closeModalHandler();
              }
            }}
          />
          <label for="carimg">Poster:</label>
          <FileBase64
            type="file"
            multiple={false}
            max-size="1500"
            onDone={({ base64, type }) => {
              if (type !== "image/jpg" && type !== "image/jpeg") {
                alert(
                  "File format not supported\nSupported formats: .jpg, .jpeg"
                );
                closeModalHandler();
                return;
              }
              let padding;
              let inBytes;
              let base64Length;
              if (base64.endsWith("==")) {
                padding = 2;
              } else if (base64.endsWith("=")) {
                padding = 1;
              } else {
                padding = 0;
              }

              base64Length = base64.length;
              console.log(base64Length);
              inBytes = (base64Length / 4) * 3 - padding;
              let kb = inBytes / 1000;
              let mb = kb / 1000;
              if (mb < 1.5) {
                setImgB64(base64);
              } else {
                alert("File size too high! Size limit: 1.5MB");
                closeModalHandler();
              }
            }}
          />
          <label for="carid">Car ID:</label>
          <input type="number" id="carid" name="carid" ref={idRef} />
          <br />
          <label for="model">Model:</label>
          <input type="text" id="model" name="model" ref={modelRef} />
          <br />
          <label for="cname">Name:</label>
          <input type="text" id="cname" name="cname" ref={nameRef} />
          <br />
          <label for="color">Color:</label>
          <input type="text" id="color" name="color" ref={colorRef} />
          <br />
          <label for="color">Owner:</label>
          <input type="text" id="owner" name="owner" ref={ownerRef} />
          <br />
          <div className="addCarButtonHolder">
            <button onClick={addCarHandler}>Add</button>
            <button className="close-button" onClick={closeModalHandler}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
