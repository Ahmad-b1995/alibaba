import Currency from "./currency.type";
import Flags from "./flags.type";
import Language from "./language.type";

interface Country {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  languages: Language[];
  currencies: Currency[];
  population: number;
  borders: string[];
  nativeName: string;
  flags: Flags;
}

export default Country;
