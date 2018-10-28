import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../studends/model/student.model'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  getStudentList() : Observable <Student>{
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json, charset=utf-8');
    return this.http.get<Student>('http://localhost/restApi/api/userlist.php',{headers:headers});
  }

}
