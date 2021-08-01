import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptService {
  async encrypt(data: string): Promise<string> {
    return data;
  }
}
