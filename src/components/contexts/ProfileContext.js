import React from 'react'

const MyContext=React.createContext({})

const ContextProvider=MyContext.Provider;
const ContextConsumer=MyContext.Consumer;

export {ContextProvider,ContextConsumer}