import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PersonResponse {
  id: number;
  nome: string;
  data_nasc: string;
  cpf: string;
  sexo: string;
  altura: number;
  peso: number;
}

export interface PersonRequest {
  nome?: string;
  data_nasc?: string;
  cpf?: string;
  sexo?: string;
  altura?: number;
  peso?: number;
}

export interface PesoIdealResponse {
  peso_ideal: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatasourceService {
  private endpointUrl = 'http://localhost:8000/person';

  constructor(private httpClient: HttpClient) {}

  getPersons() {
    return this.httpClient.get<PersonResponse[]>(this.endpointUrl);
  }
  getPerson(id: number) {
    return this.httpClient.get<PersonResponse>(`${this.endpointUrl}/${id}`);
  }
  inputPerson(person: PersonRequest) {
    return this.httpClient.post<PersonResponse>(this.endpointUrl, person);
  }
  updatePersonFull(person: PersonRequest, id: number) {
    return this.httpClient.put<PersonResponse>(
      `${this.endpointUrl}/${id}`,
      person
    );
  }
  updatePerson(person: PersonRequest, id: number) {
    return this.httpClient.patch<PersonResponse>(
      `${this.endpointUrl}/${id}`,
      person
    );
  }
  deletePerson(id: number) {
    return this.httpClient.delete(`${this.endpointUrl}/${id}`);
  }
  getPesoIdealItem(id: number) {
    return this.httpClient.get<PesoIdealResponse>(`${this.endpointUrl}/pesoIdeal/${id}`)
  }
}
