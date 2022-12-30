import '../App.css';


export default function GalleryItems (props={title, icon,bgImg}) {
    const {title, icon,bgImg} = props;

        return (
            <div style={{
                backgroundImage: `url(${bgImg})`
              }} className="items-1">
                <div className="icon-seguro">
                    <img src={icon} alt="hogar"/>
                    <span className="lusitana">{title}</span>
                </div>
            </div>
        )
}