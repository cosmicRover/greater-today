/*Using the goal_action_constants, create actions */

import { ADD_GOAL } from "./goal_action_constants"

export const addGoal = () => {
    return {
        type: ADD_GOAL
    }
}