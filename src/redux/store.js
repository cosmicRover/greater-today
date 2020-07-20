/* ES6 import method, import createStore object from redux
and then import the reducers, then connect them both.
*/

import { createStore } from "redux"
import goalReducer from "./goals/goal_reducer"

const store = createStore(goalReducer)

export default store