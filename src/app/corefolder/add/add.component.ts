import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Uuid } from 'src/app/helper/Uuid';
import { StudentViewModel }  from 'src/app/model/studentviewmodel.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  studentForm!: FormGroup;
   studentViewModel!: StudentViewModel;

  constructor(
    
    private studentService: StudentService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {
    this.formBuild();
  }

  formBuild() {
    this.studentForm = this.fb.group({
      StudentId: [],
      StudentName: [null,Validators.required],
      DateOfBirth: [null,Validators.required],
      Age: ['',],
      Gender: ['',],
      StudentEmail: [null,Validators.required],
      Password: [null, [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]]
    });
  }

  SubmitForm() {
   console.log(this.studentForm);
    if (this.studentForm.valid) {

      this.studentViewModel = {
      StudentId: Uuid.generateUuid(),  
      StudentName : this.studentForm.value.StudentName, 
      DateOfBirth : this.studentForm.value.DateOfBirth,
      Age : this.studentForm.value.Age,
      Gender : this.studentForm.value.Gender,
      StudentEmail : this.studentForm.value.StudentEmail,
      Password : this.studentForm.value.Password,
      }
     const result = this.studentService.Add(this.studentViewModel);
      if(result === true){
        this.router.navigate(['/details-students']);
      }
      console.log(this.studentViewModel);
     
    }  else{
      this.studentForm.markAllAsTouched();
    }
  }
}
