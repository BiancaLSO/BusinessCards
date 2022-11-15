import { IsEmail, IsNotEmpty } from 'class-validator';

export class BusinessCardDto {
  @IsNotEmpty()
  name: string;

  title: string;

  @IsEmail()
  email: string;

  about: string;

  interests: string;

  constructor(name: string, email: string, about: string, interests: string) {
    this.name = name;
    this.email = email;
    this.about = about;
    this.interests = interests;
  }
}
