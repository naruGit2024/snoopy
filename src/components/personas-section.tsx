import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function PersonasSection() {
  const personas = [
    {
      title: "World War I Flying Ace",
      description: "The most famous of Snoopy's fantasies",
      content: "Sitting atop his doghouse, Snoopy transforms into a WWI fighter pilot, battling the Red Baron in aerial combat. His vivid imagination takes him to the skies over France, where he's a heroic aviator.",
      icon: "✈️"
    },
    {
      title: "Joe Cool",
      description: "The epitome of laid-back coolness",
      content: "With sunglasses and a casual attitude, Joe Cool is Snoopy's persona as the coolest character around. He leans against walls, acts nonchalant, and embodies effortless style.",
      icon: "😎"
    },
    {
      title: "The World Famous Author",
      description: "Literary genius on a typewriter",
      content: "Snoopy sits on his doghouse with his typewriter, crafting what he believes are masterpieces. His novels often begin with 'It was a dark and stormy night...'",
      icon: "📝"
    },
    {
      title: "The Dancing Beagle",
      description: "Joy expressed through movement",
      content: "Snoopy's happy dance is iconic - ears flying, body bouncing, pure joy in motion. He dances when he's excited, happy, or celebrating life's simple pleasures.",
      icon: "💃"
    },
    {
      title: "Vulture",
      description: "Patient and observant",
      content: "Perched motionless on his doghouse, Snoopy becomes a vulture, waiting with infinite patience. This persona showcases his contemplative and observant nature.",
      icon: "🦅"
    },
    {
      title: "The Fierce Watchdog",
      description: "Guardian of the household",
      content: "Though he's actually quite friendly, Snoopy sometimes imagines himself as a fierce guard dog, protecting his territory with great determination and bark.",
      icon: "🐕‍🦺"
    }
  ];

  return (
    <section id="personas" className="py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-5xl">Snoopy's Many Personas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the rich imagination of our favorite beagle through his various alter egos
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{persona.icon}</span>
                  <div>
                    <CardTitle>{persona.title}</CardTitle>
                    <CardDescription>{persona.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{persona.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}