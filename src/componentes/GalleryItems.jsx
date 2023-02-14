import { Link } from 'react-router-dom';
import '../App.css';
import styles from '../modul-css/GalleryItems.css';

export default function GalleryItems({ title, icon, bgImg, source }) {
  return (
    <Link to={source}>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="items-1"
      >
        <div className="icon-seguro">
          <img src={icon} />
          <span className="lusitana">{title}</span>
        </div>
      </div>
    </Link>
  );
}
