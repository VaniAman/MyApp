import { Injectable } from '@angular/core';
import { StudentViewModel } from '../model/studentviewmodel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student: StudentViewModel[] = [];
  private studentarr = new BehaviorSubject<StudentViewModel[]>([]);

  constructor(
    private httpClient: HttpClientModule
  ) {
   this.LoadStudentToLocalStorage() 
   }

  private SaveStudentToLocalStorage() {
    localStorage.setItem('student', JSON.stringify(this.student));
  }

  private LoadStudentToLocalStorage() {
    var data = localStorage.getItem('student')
    if(data){
       this.student = JSON.parse(data);
       this.studentarr.next([...this.student]);
    }
  }

  Add(student: StudentViewModel): boolean {
    this.student.push(student);
    this.studentarr.next([...this.student]);
    this.SaveStudentToLocalStorage();
    return true;
  }

  GetAll(): Observable<StudentViewModel[]>{
      return this.studentarr.asObservable();
  }

  GetById(id: string): StudentViewModel | undefined{
   return this.student.find((s) => s.StudentId == id);
  }

  Update(studentViewModel: StudentViewModel):boolean{
    const index = this.student.findIndex((s) => s.StudentId === studentViewModel.StudentId);
    console.log(index);
    if(index !== -1){
      this.student[index] = studentViewModel;
      console.log(this.student[index]);
      this.studentarr.next([...this.student]);
      this.SaveStudentToLocalStorage();
      return true;
    }
    else{
      return false;
    }
  }

  Delete(id: string) {
    const index = this.student.findIndex((s) => s.StudentId === id);
    if (index !== -1) {
      this.student.splice(index, 1);
      this.studentarr.next([...this.student]);
      this.SaveStudentToLocalStorage();
    }
  }
}
