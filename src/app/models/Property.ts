import { IPropertyBase } from "./iproperty-base";

export class Property implements IPropertyBase {
  id: number;
  sellRent: number;
  name: string;
  propertyType: string;
  bhk: number;
  furnishingType: string;
  price: number;
  builtArea: number;
  carpetArea ?:number;
  address : string;
  address2 ? : string;
  city: string;
  floorNo?: string;
  totalFloors?:string;
  readyToMove:number;
  age?:number;
  mainEntrance?:string;
  security?:number;
  gated?:number;
  maintenance?:string;
  estPossessionOn?:string;
  photo?: string;
  description?:string;
  postedOn:string;
  postedBy:number;
  country:string;
}
