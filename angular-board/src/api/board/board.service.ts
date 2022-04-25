import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoardDTO } from 'src/interface/dto/board.dto';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private httpClient: HttpClient) {}

  serverUrl = `${environment.server}`;

  //api method

  // findAll은 배열로 받기 때문에 []
  findAll(): Observable<IBoardDTO[]> {
    return this.httpClient.get<IBoardDTO[]>(this.serverUrl);
  }
  findById(seq: number): Observable<IBoardDTO> {
    return this.httpClient.get<IBoardDTO>(`${this.serverUrl}/${seq}`);
  }

  create(body: IBoardDTO): Observable<IBoardDTO> {
    return this.httpClient.post<IBoardDTO>(this.serverUrl, body);
  }
  update(body: IBoardDTO): Observable<IBoardDTO> {
    return this.httpClient.put<IBoardDTO>(this.serverUrl, body);
  }
  delete(seq: number): Observable<IBoardDTO> {
    return this.httpClient.delete<IBoardDTO>(`${this.serverUrl}/${seq}`);
  }
}
