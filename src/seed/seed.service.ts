import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  async executeSeed() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = (await response.json()) as PokeResponse;

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
    });

    return data.results;
  }
}
