import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null; 

  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  albumId: string | null; 

  @IsNotEmpty()
  @IsNumber()
  duration: number; 
}

export class UpdateTrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null;
  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  albumId: string | null;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
