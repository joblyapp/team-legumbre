import '../App.css';
import GalleryItems from './GalleryItems';

export default function GalleryConteiner () {
    return (
        <section class="section-gallery">
            <div class="conteiner-gallery">
                {<GalleryItems/>}
            </div>
        </section>
    )
}