import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files-select',
  templateUrl: './files-select.component.html',
  styleUrls: ['./files-select.component.sass']
})
export class FilesSelectComponent {

  files = [
    {"id": 1, "name": "Contrato de Serviços Estéticos Personalizados"},
    {"id": 2, "name": "Acordo de Tratamento Estético Integral"},
    {"id": 3, "name": "Contrato de Pacote de Beleza e Bem-Estar"},
    {"id": 4, "name": "Termo de Compromisso para Procedimentos Estéticos Específicos"},
    {"id": 5, "name": "Acordo de Prestação de Serviços de Estética Avançada"}
  ]

  constructor(private router: Router) {}

  selectedFiles:Array<Number> = []

  onClickEvent(id:Number) {
    const index = this.selectedFiles.indexOf(id);
    if (index > -1)
      this.selectedFiles.splice(index, 1)
    else
      this.selectedFiles.push(id)
  }

  onSubmitFillDocuments() {
    this.router.navigate(['/', 'form']);
  }

}
