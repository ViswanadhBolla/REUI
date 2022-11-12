import { IPropertyBase } from "./iproperty-base";
import { Photo } from "./photo";

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
  readyToMove:boolean;
  age?:number;
  mainEntrance?:string;
  security?:number;
  gated?:boolean;
  maintenance?:string;
  estPossessionOn?:Date;
  photo?: string;
  description?:string;
  postedOn:string;
  postedBy:number;
  country:string;
  propertyTypeId: number;
  furnishingTypeId: number;
  cityId:number;
  lastUpdatedBy:number;
  photos?: Photo[];

}
