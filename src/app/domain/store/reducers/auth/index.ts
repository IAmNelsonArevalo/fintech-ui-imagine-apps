import { createReducer, on } from "@ngrx/store";
/** Initial States */
import useInitialStates from "../../initialStates";
/** Actions */
import useActions from "../../actions";

const useAuthReducers = () => {
    /** Initial States */
    const { useAuthInitialStates } = useInitialStates();
    const { loginInitialState } = useAuthInitialStates();

    /** Actions */
    const { useAuthActions } = useActions();
    const { actLogin } = useAuthActions();

    const auth = createReducer(loginInitialState, on(actLogin, (state: any, payload) => ({...state, auth: payload})));
    
    return {
        auth
    };
}

export default useAuthReducers;