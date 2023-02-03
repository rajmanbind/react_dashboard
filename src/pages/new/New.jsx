import React from "react";
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
const New = ({ inputs, title }) => {
  const [files,setFile] = useState("");
  console.log(files);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={files? URL.createObjectURL(files):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt={files ? "Available":"Not Available"}
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" title="Choose Fille">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
              </div>

              {inputs.map((item) => (
                <div className="formInput" key={item.id}>
                  <label>{item.label}</label>
                  <input type="text" placeholder={item.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
