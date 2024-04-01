import React, { createContext, useContext } from "react";
// import axios from "axios";

const UserContext = createContext();

export const usePageContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
// import React, { createContext, useContext, useState } from "react";

// const PageContext = createContext();
// use this
// export const usePageContext = () => useContext(PageContext);

// export const PageProvider = ({ children }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <PageContext.Provider
//       value={{
//         email,
//         setEmail,
//         password,
//         setPassword,
//       }}
//     >
//       {children}
//     </PageContext.Provider>
//   );
// };
