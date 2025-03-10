import { Github, Instagram, Mail } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-black text-white flex py-4 ">
      <div className="max-w-5xl w-full mx-auto flex justify-between items-center py-4">
        <div className="w-sm">
          <Logo bg="dark" />
          <p className="font-light text-sm mt-3">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex items-center">
          {/* Social Media */}
          <ul className="flex items-center gap-3 transition-colors">
            <li className="hover:text-blue-400 transition-colors">
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors">
              <a href="https://www.github.com/">
                <Github />
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors">
              <a href="mailto:teste@teste.com">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
