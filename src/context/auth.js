import React, { createContext, useState } from "react";

export const AuthContex = createContext();

export function AuthProvider({ children }) {
  const [categorySelect, setCategorySelect] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCategorySelect(categoryId) {
    categoryId === categorySelect
      ? setCategorySelect("")
      : setCategorySelect(categoryId);
  }

  return (
    <AuthContex.Provider
      value={{ loading, categorySelect, handleCategorySelect }}
    >
      {children}
    </AuthContex.Provider>
  );
}
