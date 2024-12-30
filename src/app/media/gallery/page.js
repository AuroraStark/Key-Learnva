import ImageGallery from "@/components/ImageGallery";
import SEO from "@/components/SEO"
import metadata from "@/data/metadata";

const Gallery = () => {
    const courseMeta = metadata.gallery;

    return(
        <>
        <SEO
         title={courseMeta.title}
         description={courseMeta.description}
         url={courseMeta.url}
         image={courseMeta.image}
        />
        <main className="flex flex-col items-center p-16">
        <h3 className="font-normal text-3xl text-[textBlue] m-4 border-b-2 border-pink-200">Gallery</h3>
        <p>Kids here</p>
        <ImageGallery/>
        </main>
            
        </>
    )
}

export default Gallery

  