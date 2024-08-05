import { PokemonApi } from "../pokemon/pokemon-api";
import axios, { AxiosResponse } from 'axios';

export class PasswordGenerator {

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }

  private async passwordAlgorithm(): Promise<string> {
    const pokemonApi = new PokemonApi('https://pokeapi.co/api/v2/pokemon');

    const randomNumber = this.generateRandomNumber();
    const pokemons = await pokemonApi.getPokemonData(randomNumber, 1);
    
    const pokemonName = pokemons[0].name;
    const pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    const randomNumberPart = Math.floor(Math.random() * 10000);
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    const specialCharacter = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

    return `${pokemonNameCapitalized}${randomNumberPart}${specialCharacter}`;
  }

  public async generatePassword(): Promise<string> {
    try {
      const password = await this.passwordAlgorithm();
      return password;
    } catch (error) {
      console.error('Erro ao gerar senha:', error);
      return '';
    }
  }
}
