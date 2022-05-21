import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICommentDTO } from './../../interface/dto/comment.dto';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommnetService {
  constructor(private HttpClient: HttpClient) {}

  baseUrl = `${environment.server}/comment`;

  findAll(): Observable<ICommentDTO[]> {
    return this.HttpClient.get<ICommentDTO[]>(this.baseUrl);
  }

  findById(seq: number): Observable<ICommentDTO> {
    return this.HttpClient.get<ICommentDTO>(`${this.baseUrl}/${seq}`);
  }

  findByBoardId(b_seq: number): Observable<ICommentDTO[]> {
    return this.HttpClient.get<ICommentDTO[]>(`${this.baseUrl}/board/${b_seq}`);
  }

  create(body: ICommentDTO): Observable<string> {
    return this.HttpClient.post<string>(`${this.baseUrl}`, body);
  }

  update(seq: number, body: ICommentDTO): Observable<string> {
    return this.HttpClient.put<string>(`${this.baseUrl}/${seq}`, body);
  }

  delete(seq: number): Observable<string> {
    return this.HttpClient.delete<string>(`${this.baseUrl}/${seq}`);
  }
}
