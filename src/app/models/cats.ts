//interface for fethcing cats data
export interface ICats {
  breeds: [
    {
      description: string;
      life_span: string;
      origin: string;
      temperament: string;
      alt_names: string;
    }
  ];
  id: string;
  url: string;
}
