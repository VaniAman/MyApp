import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentViewModel } from 'src/app/model/studentviewmodel.model';
import { StudentService } from 'src/app/service/student.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup
  studentViewModel!: StudentViewModel;
  StudentId!: string;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.formBuild();
    this.route.params.subscribe((student) => {
      this.StudentId = student['id'];
      this.fillForm();
    })
  }

  formBuild() {
    this.form = this.fb.group({
      StudentId: [Validators.required],
      StudentName: [null, Validators.required],
      DateOfBirth: [null, Validators.required],
      Age: ['',],
      Gender: ['', Validators.required],
      StudentEmail: [null, Validators.required],
      Password: [null, [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]]
    });
  }

  fillForm() {
    const student = this.studentService.GetById(this.StudentId);
    console.log(student);
    this.form.setValue({
      StudentId: student?.StudentId,
      StudentName: student?.StudentName,
      DateOfBirth: student?.DateOfBirth,
      Age: student?.Age,
      Gender: student?.Gender,
      StudentEmail: student?.StudentEmail,
      Password: student?.Password
    });
  }

  SubmitForm() {
    if (this.form.valid) {

      this.studentViewModel = {
        StudentId: this.form.value.StudentId,
        StudentName: this.form.value.StudentName,
        DateOfBirth: this.form.value.DateOfBirth,
        Age: this.form.value.Age,
        Gender: this.form.value.Gender,
        StudentEmail: this.form.value.StudentEmail,
        Password: this.form.value.Password,
      }
      console.log(this.studentViewModel);
      const result = this.studentService.Update(this.studentViewModel);
      if (result === true)
        this.router.navigate(['/details-students']);
    }
    else {
      this.form.markAllAsTouched();
      throw new Error("not valid");
    }
  }
}

