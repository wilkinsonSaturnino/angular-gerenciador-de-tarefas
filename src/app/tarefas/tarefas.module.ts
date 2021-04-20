import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TarefaService } from './services/tarefa.service';
import { HttpClientModule } from '@angular/common/http';
import { TarefaListComponent } from './components/tarefa-list/tarefa-list.component';
import { TarefaAddComponent } from './components/tarefa-add/tarefa-add.component';
import { FormsModule } from '@angular/forms';
import { TarefaUpdateComponent } from './components/tarefa-update/tarefa-update.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

@NgModule({
  declarations: [
    TarefaListComponent,
    TarefaAddComponent,
    TarefaUpdateComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
