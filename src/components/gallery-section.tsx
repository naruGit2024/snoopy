import snoopyHugImage from '../assets/04abb7836cc71e8c72be8b703ed98592726c27a8.png';
import snoopyIceCreamImage from '../assets/51c0880c18eea7bf457e25c6cb9aaecf40f12e35.png';
import snoopySkateboardImage from '../assets/dbffb484703884a07b6dac260b98359a3de1ca4b.png';
import peanutsGangImage from '../assets/f89fc30e37369068cddb945b0818608da241727c.png';

export function GallerySection() {
  const images = [
    {
      src: peanutsGangImage,
      alt: "The Peanuts gang featuring Lucy, Charlie Brown, Woodstock and Snoopy",
      caption: "The beloved Peanuts characters",
    },
    {
      src: snoopySkateboardImage,
      alt: "Snoopy skateboarding with Woodstock flying nearby",
      caption: "Snoopy's adventurous spirit",
    },
    {
      src: snoopyIceCreamImage,
      alt: "Snoopy walking with an ice cream cone",
      caption: "Simple pleasures bring joy",
    },
    // {
    //   src: snoopyHugImage,
    //   alt: "Snoopy giving a big hug",
    //   caption: "Love and friendship in Peanuts style",
    // },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-5xl">Snoopy Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Classic moments from Snoopy's wonderful world of imagination and friendship
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={image.src}       
                alt={image.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm backdrop-blur-sm bg-black/70 p-2 rounded">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
