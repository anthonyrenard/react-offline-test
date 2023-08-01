export interface IData {
  data: Data;
}

export interface IError {
  error: Error;
}

export type Data = {
  from: string;
  to: string;
  generationmix: GenerationMix[];
};

export type GenerationMix = {
  fuel: Fuel;
  perc: number;
};

export type Fuel =
  | "biomass"
  | "coal"
  | "imports"
  | "gas"
  | "nuclear"
  | "other"
  | "hydro"
  | "solar"
  | "wind";
