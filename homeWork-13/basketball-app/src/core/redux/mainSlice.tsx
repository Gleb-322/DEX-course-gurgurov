import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IformData } from '../../common/pages/addPlayers/AddPlayers'
import { IformTeam } from '../../common/pages/addTeams/AddTeams'

interface IInitialState {
	players: any[],
    playerById: {},
    imageAddPlayer: any;
    addPlayer: {},
	teams: any[],
    teamById: {},
    findTeam: number;
}

const initialState: IInitialState = {
    players: [],
    playerById: {},
    imageAddPlayer: "",
    addPlayer: {},
    teams: [],
    teamById: {},
    findTeam: 0,
}

const mainSlice = createSlice({
    name: "mainSlice",
    initialState,

    reducers: {
        getPlayers(state, action: PayloadAction<object[]>) {
            state.players.push(action.payload)
        },
        getPlayersById(state, action: PayloadAction<number>) {
            state.playerById = state.players.find((player) => player.id === action.payload)
            // state.players = state.players.filter((player) => player.id !== action.payload);
        },
        addPlayer(state, action: PayloadAction<IformData>) {
            state.players.push(action.payload)
        },
        addImagePlayer(state, action: PayloadAction<any>) {
            state.imageAddPlayer = action.payload
        },
        // removePlayers(state, action: PayloadAction) {

        // },
        // updatePlayers(state, action: PayloadAction) {
            
        // },
        getTeams(state, action: PayloadAction<object[]>) {
            state.teams.push(action.payload)
        },
        getTeamId(state, action: PayloadAction<string>) {
            state.teams[0].map((team: { name: string; id: number; }) => team.name === action.payload ? state.findTeam = team.id : null)

        },
        getTeamsById(state, action: PayloadAction<number>) {
            state.teamById = state.teams.find((team) => team.id === action.payload)
        },
        addTeams(state, action: PayloadAction<IformTeam>) {
            state.teams.push(action.payload)
        },
        // removeTeams(state, action: PayloadAction) {

        // },
        // updateTeams(state, action: PayloadAction) {

        // },
    }
})
    


export const {
    getPlayers,
    getPlayersById,
    addImagePlayer,
    addPlayer,
    // removePlayers,
    // updatePlayers,
    getTeams,
    getTeamId,
    addTeams,
    // removeTeams,
    // updateTeams
  } = mainSlice.actions;

export default mainSlice.reducer