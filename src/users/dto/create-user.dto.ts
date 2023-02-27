import { IsEmail, IsString,  MinLength} from "class-validator";
export class CreateUserDto {
  @IsEmail() // validating the fields
  email: string;
  @IsString()
  name: string;
  @IsString()
  @MinLength(6)
  password: string;

}
