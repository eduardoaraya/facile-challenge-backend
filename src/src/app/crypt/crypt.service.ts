import * as CryptoJS from 'crypto-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface CryptServiceInterface {
  encrypt(data: string): Promise<string>;
  decrypt(data: string): Promise<string>;
}

@Injectable()
export class CryptService implements CryptServiceInterface {
  private KEY: string;

  constructor(private configService: ConfigService) {
    this.KEY = this.configService.get('CRYPT_SECRET_KEY');
  }

  async encrypt(data: string): Promise<string> {
    return CryptoJS.Rabbit.encrypt(data, this.KEY).toString();
  }

  async decrypt(data: string): Promise<string> {
    return CryptoJS.Rabbit.decrypt(data, this.KEY).toString(CryptoJS.enc.Utf8);
  }
}
