import { Button } from "./ui/button";
import snoopyHugImage from '../assets/04abb7836cc71e8c72be8b703ed98592726c27a8.png';
import snoopyIceCreamImage from '../assets/51c0880c18eea7bf457e25c6cb9aaecf40f12e35.png';
import snoopySkateboardImage from '../assets/dbffb484703884a07b6dac260b98359a3de1ca4b.png';
import peanutsGangImage from '../assets/f89fc30e37369068cddb945b0818608da241727c.png';


export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to
                <span className="block text-primary">Snoopy's World</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover the adventures of the world's most famous beagle! From his 
                doghouse to his wild imagination, explore the wonderful world of 
                Charlie Brown's beloved pet.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={snoopyHugImage}
              alt="Snoopy hugging Woodstock with hearts"
              className="aspect-square overflow-hidden rounded-xl object-cover max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}