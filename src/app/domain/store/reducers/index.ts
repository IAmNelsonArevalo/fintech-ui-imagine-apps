import { MetaReducer } from "@ngrx/store";
import useAuthReducers from "./auth";
import { isDevMode } from "@angular/core";
/** Interfaces */
import { State } from "../../interfaces/reducers.interfaces";

export const metaReducers: any = isDevMode() ? [] : [];

const useReducers = () => {
    const authReducers = useAuthReducers();

    return {
        ...authReducers,    
    };
}

export default useReducers;