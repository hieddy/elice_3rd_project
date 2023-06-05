import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class ReadOnlyUserDto extends PickType(User, ['email', 'nickname'] as const) {
  @ApiProperty({
    example: '32645485ab407d67c3a210204e',
    description: 'id',
  })
  id: string;
}