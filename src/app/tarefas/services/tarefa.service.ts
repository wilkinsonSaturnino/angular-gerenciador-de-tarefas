import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../classes/tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private URL_TAREFAS = 'http://localhost:8082/api/tarefas';
  private URL_TAREFAS_STATUS = 'http://localhost:8082/api/tarefas/alterar-status';

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(this.URL_TAREFAS);
  }

  cadastrarTarefa(tarefa: Tarefa): Observable<Object> {
    return this.httpClient.post(this.URL_TAREFAS, tarefa);
  }

  buscarPorId(idTarefa: number): Observable<Tarefa> {
    return this.httpClient.get<Tarefa>(`${this.URL_TAREFAS}/${idTarefa}`);
  }

  atualizarTarefa(idTarefa: number, tarefa: Tarefa): Observable<Object> {
    return this.httpClient.put(`${this.URL_TAREFAS}/${idTarefa}`, tarefa);
  }

  removerTarefa(idTarefa: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_TAREFAS}/${idTarefa}`);
  }

  alterarStatus(idTarefa: number, tarefa: Tarefa): Observable<Object> {
    
    tarefa.concluida ? tarefa.concluida = false : tarefa.concluida = true;
    return this.httpClient.put(`${this.URL_TAREFAS_STATUS}/${idTarefa}`, tarefa);
    
  }
  
}
