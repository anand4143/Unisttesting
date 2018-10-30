import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { StudentService } from './student.service';
import { Student } from '../studends/model/student.model';
describe('StudentService', () => {
  let service = StudentService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations:[HttpTestingController],
      imports:[HttpClientTestingModule],
      providers: [StudentService,HttpTestingController],

    });
     service = TestBed.get(StudentService);
     let httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
  it('should have getStudentList function', inject([StudentService], (service: StudentService) => {
    expect(service.getStudentList).toBeTruthy();
  }));
  it('should retrive student list form API via GET Method', inject([StudentService], (service: StudentService) => {
    const dummyData: Student[] = [	
      {
        fullname: "anand",age: 35,contactNumber: 1234567890,contactPreference: "phone",department_id: 0,email: "ananddshukkla@gmail.com",gender: "male",isActive: "0",profile_image: "assets/images/neeraj.png"
      },
      {
         age: 23,	contactNumber: 3333333,	contactPreference: "email",		department_id: 0,	email: "ananddshukkla00@gmail.com",	fullname: "neeraj",	gender: "male",	isActive: "0",profile_image: "assets/images/neeraj.png"
      }
    ];
    service.getStudentList().subscribe(
      studentlist=>{
        expect(studentlist.length).toBe(2);
        expect(studentlist).toEqual(dummyData);
      });

      // const request = httpMock.expectOne(`${service.listURL}`);
      // expect(request.request.Method).toBe('GET');
      // request.flush(dummyData);
    
  }));
  

  

});
