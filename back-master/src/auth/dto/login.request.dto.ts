import { PickType } from '@nestjs/swagger';
import { User } from '../../users/users.schema';

export class LoginRequestDto extends PickType(User, [
  'email',
  'password',
] as const) {}

// PickType()은 선택할 대상, OmitType()은 제거할 대상
