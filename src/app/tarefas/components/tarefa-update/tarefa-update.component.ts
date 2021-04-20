import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../../classes/tarefa';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  idTarefa: number;

  constructor(private tarefaService: TarefaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
    this.idTarefa = this.route.snapshot.params['idTarefa'];
    this.tarefaService.buscarPorId(this.idTarefa).subscribe(taf =>
      {
        console.log(taf);
        this.tarefa = taf;
      },
        error => console.log(error)
      );
  }

  atualizarTarefa(): void {
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizarTarefa(this.idTarefa, this.tarefa).subscribe(taf => 
      {
        console.log(taf);
        this.router.navigate(['/tarefas']);
      },
        error => console.log(error)
      );
    }
  }  

}
