import "../App.css";
import styles from "../modul-css/GalleryItems.css";
import { useNavigate } from "react-router-dom";

export default function GalleryItems({ title, icon, bgImg, source }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="items-1 cursor-pointer"
      onClick={() => navigate(source)}
    >
      <div className="icon-seguro">
        <img src={icon} />
        <span className="lusitana">{title}</span>
      </div>
    </div>
  );
}
