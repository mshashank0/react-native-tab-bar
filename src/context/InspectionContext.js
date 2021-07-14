import React, { useState } from 'react';

const InspectionContext = React.createContext();

export const InspectionProvider = ({ children }) => {
  const [inspection, setInspection] = useState(null);

  const selectInspection = (inspection) => {
    setInspection(inspection);
  };

  return (
    <InspectionContext.Provider value={{ inspection, selectInspection }}>
      {children}
    </InspectionContext.Provider>
  );
};

export default InspectionContext;
