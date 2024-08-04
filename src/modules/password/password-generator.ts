import { PokemonApi } from "../pokemon/pokemon-api";

export class PasswordGenerator {

  private generateRandomNumber(){
      const number = Math.floor(Math.random() * 500);
      return number;
  }

  public async generatePassword(): Promise<string> {

    const chamadaPokemon = new PokemonApi('https://pokeapi.co/api/v2/pokemon');
    try {
      const randomNumber = this.generateRandomNumber();

      const pokemons = await chamadaPokemon.getPokemonData(randomNumber, randomNumber);
      const pokemonName = pokemons[0].name;

      return pokemonName;
    } catch (error) {
      console.error('Erro ao gerar senha:', error);
      return '';
    }
  }
}