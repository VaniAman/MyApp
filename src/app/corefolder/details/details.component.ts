import { Component, OnInit } from '@angular/core';
import { Age } from 'src/app/helper/Age';
import { StudentViewModel } from 'src/app/model/studentviewmodel.model';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  studentViewModel: StudentViewModel[] = [];
  studentView!: StudentViewModel;

  constructor(
    private studentService: StudentService,

  ) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    return this.studentService.GetAll().subscribe((student) => {
      this.studentViewModel = student.map((item) => {
        item.Age = Age.CalculateAge(item.DateOfBirth);
        return item;
      }
      );
    });
  }

  DeleteData(id: string) {
    Swal.fire({
      title: "Are you sure want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if(result.value){
        var entity = this.studentService.GetById(id);
        if (entity != null) {
          this.studentService.Delete(entity.StudentId);
      }
      Swal.fire({
        title: "Record deleted successfully",
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
      })
    }else if(result.dismiss === Swal.DismissReason.cancel){}
    })
  }
}



