import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <a href="/vagas">
        <Button className="cursor-pointer mt-12" variant={'outline'}>
          Busque Uma Vaga
        </Button>
      </a>
      <img
        src="/people.png"
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
