import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../classes/tarefa';
import { TarefaService } from '../../services/tarefa.service';


@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css']
})
export class TarefaListComponent implements OnInit {

  tarefas: Tarefa[] = new Array;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.tarefaService.listarTodos().subscribe(tarefa => {
      this.tarefas = tarefa;
      /* Ordena o Array de objetos por nome */
      this.tarefas.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
    });
  }

  removerTarefa($event: any, tarefa: Tarefa): void {
    // Utilizado para não atualizar a página novamente
    $event.preventDefault();

    if (confirm('Deseja remover a Tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.removerTarefa(tarefa.id).subscribe(taf => {
        console.log(taf);
        this.listarTodos();
      });
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    this.tarefaService.alterarStatus(tarefa.id, tarefa).subscribe(taf => {
      console.log(taf);
      this.listarTodos();
    },
      error => console.log(error)
    );
  }

}
