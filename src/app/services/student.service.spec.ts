import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
// import { Injector } from '@angular/core';
// import { async, TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { Student } from '../studends/model/student.model';
describe('StudentService', () => {
 // let injector: Injector;
  let service = StudentService;
  let httpMock = HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpTestingController],
      providers: [StudentService],

    });
    service = TestBed.get(StudentService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
  it('should have getStudentList function', inject([StudentService], (service: StudentService) => {
    expect(service.getStudentList).toBeTruthy();
  }));
  it('should retrive student list form API via GET Method', inject([StudentService], (service: StudentService) => {
    // const dummyData: Student[] = [	
    //   {
    //     age: 35,contactNumber: 1234567890,contactPreference: "phone",department_id: 0,email: "ananddshukkla@gmail.com",fullname: "anand",gender: "male",isActive: "0",profile_image: "assets/images/neeraj.png"
    //   },
    //   {
    //      age: 23,	contactNumber: 987654321,	contactPreference: "email",		department_id: 0,	email: "ananddshukkla00@gmail.com",	fullname: "neeraj",	gender: "male",	isActive: "0",profile_image: "assets/images/neeraj.png"
    //   }
    // ];
    // service.getStudentList().subscribe(
    //   (studentlist)=>{
    //     expect(studentlist).toEqual(2)
    //   }
    // )
    const req = httpMock.expectOne(`http://localhost/restApi/api/userlist.php`, 'call to api');
    expect(req.request.method).toBe('GET');
  }));
  

  

});
