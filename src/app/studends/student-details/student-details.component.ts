import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentList : Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {

    this.studentService.getStudentList().subscribe(
      (students)=>
      {
        console.log(students);
        this.studentList = students;
      }
    )
  }

}
