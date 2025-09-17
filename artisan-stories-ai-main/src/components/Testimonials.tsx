import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Asha Devi",
    location: "Varanasi, UP",
    quote:
      "The AI stories helped customers understand the craft behind my Banarasi sarees. My online orders doubled!",
  },
  {
    name: "Ramesh Kumar",
    location: "Kutch, Gujarat",
    quote:
      "Pricing suggestions took away the guesswork. I now earn fairly for my hand-embroidered work.",
  },
  {
    name: "Meera Rao",
    location: "Kochi, Kerala",
    quote:
      "Automatic English + Hindi descriptions made it easy to sell nationwide without hiring a writer.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What artisans say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from makers using AI to grow their craft business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




