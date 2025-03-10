import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Logo } from './logo';

export function Navbar() {
  return (
    <nav className="max-w-5xl w-full flex justify-between py-4 mx-auto">
      <div className="flex items-center">
        <Logo />
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/vagas">
            Vagas
          </a>
        </li>
        <li>
          <a
            className={cn(buttonVariants({ variant: 'link' }))}
            href="/vagas/cadastro"
          >
            Cadastrar Vaga
          </a>
        </li>
      </ul>
    </nav>
  );
}
