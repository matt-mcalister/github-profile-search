import * as actions from "../actions/types"

const searchStateDefault = {
  username: null,
  userObj: null,
}

export default function searchReducer( searchState = searchStateDefault, action ){
  switch (action.type){
    default:
      return { ...searchState }
  }
}
