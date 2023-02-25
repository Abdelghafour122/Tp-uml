enum Sexe {
  male = "Mâle",
  femelle = "Femelle",
}

export type Malade = {
  id: string;
  nom: string;
  preNom: string;
  age: number;
  sexe: Sexe;
};

export type Rendezvous = {
  id: string;
  dateRdv: Date;
};
