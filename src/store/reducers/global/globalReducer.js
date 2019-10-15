import globalState from './globalState';
import globalActionType from '../../../constants/globalActionType';

const globalReducer = (state = globalState, action) => {
    switch (action.type) {
        case globalActionType.SET_STEP:
            return {
                ...state,
                step: action.payload,
            };
        default: return state;
    }
};

export default globalReducer;
