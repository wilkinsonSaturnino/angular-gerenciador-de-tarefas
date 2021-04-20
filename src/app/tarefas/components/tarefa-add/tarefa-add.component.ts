import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from '../../classes/tarefa';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-add',
  templateUrl: './tarefa-add.component.html',
  styleUrls: ['./tarefa-add.component.css']
})
export class TarefaAddComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrarTarefa(): void {
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrarTarefa(this.tarefa).subscribe(taf => 
      {
        console.log(taf);
        this.router.navigate(['/tarefas']);
      },
        error => console.log(error)
      );
    }
  }

}
