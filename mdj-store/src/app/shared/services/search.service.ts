import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private inputData: string = '';
  private inputDataSubject = new Subject<string>();

  // Observable para notificar cambios en el término de búsqueda
  inputDataChanged = this.inputDataSubject.asObservable();

  getInputData(): string {
    return this.inputData;
  }

  setInputData(data: string): void {
    this.inputData = data;
    this.inputDataSubject.next(data); // Notificar cambios
    console.log('SearchService - Received searchTerm:', data);
  }

}