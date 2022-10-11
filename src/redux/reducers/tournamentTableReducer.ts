import {
  LeagueType,
  LocationActions,
  SetTableAction,
  TournamentTableState,
} from "../types/tournamentTableTypes";
import BritishLeague from "../../index.json";

export enum tournamentTableActionTypes {
  SET_MATCH_RESULTS = "SET_MATCH_RESULTS",
  SET_TABLE = "SET_TABLE",
}

const prevBritishLeague = localStorage.getItem("BritishLeague");
const parsedPrevBritishLeague = JSON.parse(prevBritishLeague!);

let initialState: TournamentTableState = {
  teams: [1],
  currentTable: parsedPrevBritishLeague || BritishLeague,
};

const tournamentTableReducer = (
  state = initialState,
  action: LocationActions
): TournamentTableState => {
  switch (action.type) {
    case tournamentTableActionTypes.SET_MATCH_RESULTS: {
      return { ...state, teams: action.payload };
    }
    case tournamentTableActionTypes.SET_TABLE: {
      return { ...state, currentTable: action.payload };
    }

    default:
      return state;
  }
};

export const SetTableAC = (payload: LeagueType[]): SetTableAction => ({
  payload,
  type: tournamentTableActionTypes.SET_TABLE,
});

export default tournamentTableReducer;
