export interface WishList {
  id: number;
  sellRent: number;
  name: string;
  propertyTypeId: string;
  furnishingTypeID:string;
  price: number;
  bhk: number;
  builtArea: number;
  city: string;
  readyToMove: boolean;
  photo?: string;
}
