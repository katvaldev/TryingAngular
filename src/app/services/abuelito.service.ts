import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { IAbuelito } from "../models/IAbuelito";
import { IContacto } from "../models/IContacto";

@Injectable({
  providedIn: "root",
})
export class AbuelitoService {
  private serverUrl: string = `http://localhost:9000`;

  constructor(private httpClient: HttpClient) {}

  public getAllAbues(): Observable<IAbuelito[]> {
    let dataURL: string = `${this.serverUrl}/abuelitos`;
    return this.httpClient
      .get<IAbuelito[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public getAbue(abuelitoId: string): Observable<IAbuelito> {
    let dataURL: string = `${this.serverUrl}/abuelitos/${abuelitoId}`;
    return this.httpClient
      .get<IAbuelito>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public createAbue(abuelito: IAbuelito): Observable<IAbuelito> {
    let dataURL: string = `${this.serverUrl}/abuelito/add`;
    return this.httpClient
      .post<IAbuelito>(dataURL, abuelito)
      .pipe(catchError(this.handleError));
  }

  public updateAbue(
    abuelito: IAbuelito,
    abueId: string
  ): Observable<IAbuelito> {
    let dataURL: string = `${this.serverUrl}/abuelito/${abueId}`;
    return this.httpClient
      .put<IAbuelito>(dataURL, abuelito)
      .pipe(catchError(this.handleError));
  }

  public deleteAbue(abueId: string): Observable<{}> {
    let dataURL: string = `${this.serverUrl}/abuelito/${abueId}`;
    return this.httpClient
      .delete<{}>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public getAllContacts(): Observable<IContacto[]> {
    let dataURL: string = `${this.serverUrl}/contactos`;
    return this.httpClient
      .get<IContacto[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
