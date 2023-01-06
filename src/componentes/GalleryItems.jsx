import '../App.css';
import styles from "../modul-css/GalleryItems.css"


export default function GalleryItems (props={title, icon,bgImg}) {
    const {title, icon,bgImg} = props;

        return (
            <div style={{
                backgroundImage: `url(${bgImg})`
              }} className="items-1">
                <div className="icon-seguro">
                    <img src={icon}/>
                    <span className="lusitana">{title}</span>
                </div>
            </div>
        )
}