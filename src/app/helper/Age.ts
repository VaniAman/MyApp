export class Age{

  public static CalculateAge(DateOfBirth: Date): number{
        let age;
        var year = new Date(DateOfBirth);
       
        var currentYear = new Date().getUTCFullYear();

         age = currentYear - year.getFullYear();
        return age;
    }
}