import { IStop } from "./IStop";

export interface IRoute {
  name: string;
  id: string;
  direction: string;
  status: string;
  stops: Array<IStop>;
}
