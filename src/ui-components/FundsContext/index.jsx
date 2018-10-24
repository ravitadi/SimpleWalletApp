import Funds from '../../backend/mockdata' // this is just for temporary
import React from 'react'

export const FundsContext = React.createContext({
  funds: Funds
});
