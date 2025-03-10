import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto py-20 text-center">
      <h2 className="text-4xl font-display font-black ">
        Nada encontrado aqui...
      </h2>
      <Image
        className="mx-auto w-sm"
        src="/boat.png"
        alt="ilustração de um barco"
      />
      <p className="text-3xl font-extralight text-gray-400">
        Não foi possível encontrar a página solicitada.
      </p>
      <a
        className={cn('mt-10 block', buttonVariants({ variant: 'default' }))}
        href="/"
      >
        Voltar à Home
      </a>
    </main>
  );
}
