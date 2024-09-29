import { StudentService } from '../service/student.service';
import { StudentViewModel } from './studentviewmodel.model';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new StudentService()).toBeTruthy();
  });
});
