import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function FunFactsSection() {
  const facts = [
    {
      icon: "🎂",
      title: "August 10th, 1968",
      description: "Snoopy's comic strip debut date"
    },
    {
      icon: "🏆",
      title: "First Beagle in Space",
      description: "In his imagination, of course!"
    },
    {
      icon: "📚",
      title: "Famous Opening Line",
      description: "It was a dark and stormy night..."
    },
    {
      icon: "🎭",
      title: "Multiple Personalities",
      description: "Over 20 different personas"
    },
    {
      icon: "🌟",
      title: "Global Icon",
      description: "Recognized worldwide"
    },
    {
      icon: "🍺",
      title: "Favorite Drink",
      description: "Root beer enthusiast"
    }
  ];

  return (
    <section id="facts" className="py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-5xl">Fun Facts About Snoopy</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover interesting tidbits about everyone's favorite beagle
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto text-4xl mb-2">{fact.icon}</div>
                <CardTitle>{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{fact.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto max-w-4xl mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Famous Snoopy Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-xl italic">
                "Yesterday I was a dog. Today I'm a dog. Tomorrow I'll probably still be a dog. 
                Sigh! There's so little hope for advancement."
              </blockquote>
              <p className="mt-4 text-primary-foreground/80">- Snoopy</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}