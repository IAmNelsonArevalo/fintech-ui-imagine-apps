import { createAction, props } from "@ngrx/store";
/** Types */
import useTypes from "../../types";
/** Interfaces */
import { Auth } from "../../../interfaces/auth.interfaces";

const useAuthActions = () => {
    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    const actLogin = createAction(LOGIN, props<Auth>());

    return {
        actLogin,
    };
}

export default useAuthActions;