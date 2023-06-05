import { PartialType, PickType } from '@nestjs/swagger';
import { Expert } from '../experts.schema';

export class ExpertsCreateDto extends PartialType(PickType(Expert, [
  'title',
  'content',
  'author',
] as const)) {
  company?: string;
  job?: string;
}

export class ExpertDto {
  title: string;
  content: string;
  company?: string;
  job?: string;
}