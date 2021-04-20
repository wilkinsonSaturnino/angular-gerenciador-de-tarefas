import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaAddComponent } from './tarefas/components/tarefa-add/tarefa-add.component';
import { TarefaListComponent } from './tarefas/components/tarefa-list/tarefa-list.component';
import { TarefaUpdateComponent } from './tarefas/components/tarefa-update/tarefa-update.component';

const routes: Routes = [
  {path: 'tarefas', component: TarefaListComponent},
  {path: 'tarefas-add', component: TarefaAddComponent},
  {path: 'tarefas-update/:idTarefa', component: TarefaUpdateComponent},
  {path: '', redirectTo: 'tarefas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
