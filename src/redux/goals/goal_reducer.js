/* use the action constants create reducers to interact with the store */
import { ADD_GOAL } from "./goal_action_constants"
import GoalsDataModel from "../data_models/goal_data_models"

/* define the init state for the app. NOTE: this will be retreived from the firestore */
const initState = {

    goals: [
        new GoalsDataModel("haha", "nanan"),
        new GoalsDataModel("haha", "nanan"),
        new GoalsDataModel("haha", "nanan"),
        new GoalsDataModel("haha", "nanan"),
        new GoalsDataModel("haha", "nanan"),
        new GoalsDataModel("haha", "nanan")]

}

//add new goal items from the form
const goalReducer = (state = initState, action) => {
    switch (action.type) {
        /* using the action constants, return a modified state */
        case ADD_GOAL:
            return {
                ...state,
                goals: state.goals.concat(new GoalsDataModel("haha", "nanan"))
            }
        default:
            return state
    }
}

export default goalReducer;
