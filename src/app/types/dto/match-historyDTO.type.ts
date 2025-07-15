export type MatchHistoryDTO = {
    username: string;
    matchHistory:{
        id: string;
        word: string;
        guesses: string[];
        playedIn: string;
    }[];
}