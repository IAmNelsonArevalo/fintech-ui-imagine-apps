const useAuthInitialStates = () => {
    const loginInitialState = {
        token: '',
        user: {}
    };

    return {
        loginInitialState,
    }
}

export default useAuthInitialStates;