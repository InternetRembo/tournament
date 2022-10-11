import { tournamentTableActionTypes } from "../reducers/tournamentTableReducer";

export type LeagueType = {
  name: string;
  img: string;
  games: number;
  win: number;
  loss: number;
  draw: number;
  points: number;
};

export type TournamentTableState = {
  teams: [number];
  currentTable: LeagueType[];
};

export type SetMatchResults = {
  type: tournamentTableActionTypes.SET_MATCH_RESULTS;
  payload: [1];
};
export type SetTableAction = {
  type: tournamentTableActionTypes.SET_TABLE;
  payload: LeagueType[];
};

export type LocationActions = SetMatchResults | SetTableAction;
