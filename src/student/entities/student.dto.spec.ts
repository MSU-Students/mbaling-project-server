import { CreateStudentDto } from './CreateStudent.dto';

describe('StudentDto', () => {
  it('should be defined', () => {
    expect(new CreateStudentDto()).toBeDefined();
  });
});
