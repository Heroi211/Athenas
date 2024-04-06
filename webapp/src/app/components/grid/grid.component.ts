import { NgModule, Component } from '@angular/core';
import {
  DxDataGridModule,
  DxDataGridTypes,
} from 'devextreme-angular/ui/data-grid';
import {
  DatasourceService,
  PersonResponse,
} from '../../services/datasource.service';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import type { RowInsertingEvent, RowUpdatingEvent, RowRemovingEvent } from "devextreme/ui/data_grid";
import { finalize } from 'rxjs';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DxDataGridModule, DxPopupModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  dataSource: PersonResponse[] = [];
  pesoIdealItem = 0
  isPopupVisivel = false

  constructor(private service: DatasourceService) {
    service.getPersons().subscribe((persons) => (this.dataSource = persons));
  }

  addPerson(e: RowInsertingEvent) {
    console.log('event: ', e)
    this.service.inputPerson(e.data).subscribe(
      () => this.service.getPersons().subscribe((persons) => (this.dataSource = persons))
    )
  }

  editPerson(e: RowUpdatingEvent) {
    console.log('evento editar: ', e)
    this.service.updatePerson(e.newData, e.oldData.id).subscribe()
  }

  deletePerson(e: RowRemovingEvent) {
    console.log('evento remover: ', e)
    this.service.deletePerson(e.data.id).subscribe(
      () => this.service.getPersons().subscribe((persons) => (this.dataSource = persons))
    )
  }

  onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    console.log('evento oclick: ', e)
    this.service.getPesoIdealItem(e.row?.data.id).subscribe(
      (peso) => {
        this.pesoIdealItem = peso.peso_ideal;
        this.isPopupVisivel = true
      }
    )
  }
}
