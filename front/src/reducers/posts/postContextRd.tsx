import React from "react"
import { initialStatePostRedc } from "./postReducer"

export const PostContextRd = React.createContext({
    state: initialStatePostRedc,
    dispatch: () => null
  })
  