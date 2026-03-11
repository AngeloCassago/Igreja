import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Visitante } from './pages/visitante/visitante';
import { Historia } from './pages/historia/historia';
import { Missoes } from './pages/missoes/missoes';
import { ProjetosSociais } from './pages/projetos-sociais/projetos-sociais';
import { Sucesso } from './pages/sucesso/sucesso';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'visitante', component: Visitante },
  { path: 'historia', component: Historia },
  { path: 'missoes', component: Missoes },
  { path: 'projetos-sociais', component: ProjetosSociais },
  { path: 'sucesso', component: Sucesso }
];