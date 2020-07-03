import { State } from "../../typings";
import { WINNERS, PREFIX } from "../constants";

export const winners$ = (state: State) => state[PREFIX][WINNERS] 