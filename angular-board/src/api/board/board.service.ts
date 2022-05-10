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

  // api method

  // findAll은 배열로 받기 때문에 []
  findAll(): Observable<IBoardDTO[]> {
    return this.httpClient.get<IBoardDTO[]>(this.serverUrl);
  }
  findById(seq: number): Observable<IBoardDTO> {
    return this.httpClient.get<IBoardDTO>(`${this.serverUrl}/${seq}`);
  }

  create(body: IBoardDTO): Observable<string> {
    return this.httpClient.post<string>(this.serverUrl, body);
  }
  update(body: IBoardDTO, seq: number): Observable<string> {
    return this.httpClient.put<string>(`${this.serverUrl}/${seq}`, body);
  }
  delete(seq: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.serverUrl}/${seq}`);
  }
}
