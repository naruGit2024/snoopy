import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import snoopyImage from '../assets/51c0880c18eea7bf457e25c6cb9aaecf40f12e35.png';
//const snoopyImage = "/assets/04abb7836cc71e8c72be8b703ed98592726c27a8.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-5xl">About Snoopy</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Charlie Brown's pet beagle who first appeared in the comic strip Peanuts in 1950
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Beginning</CardTitle>
                  <CardDescription>
                    Created by Charles M. Schulz in 1950
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Snoopy made his debut on October 4, 1950, just two days after the 
                    first Peanuts comic strip was published. Initially a normal dog, 
                    Snoopy evolved into one of the most beloved and imaginative characters 
                    in comic history.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personality</CardTitle>
                  <CardDescription>
                    More than just a pet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Snoopy is independent, imaginative, and often lost in his own world. 
                    He's known for his rich fantasy life, his love of root beer, and his 
                    sophisticated thoughts that contrast with his dog status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={snoopyImage}
              alt="Snoopy enjoying an ice cream cone"
              className="aspect-square overflow-hidden rounded-xl object-cover max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}