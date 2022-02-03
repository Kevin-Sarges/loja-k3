import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
export const AuthContex = createContext();

export function AuthProvider({ children }) {
  const [categorySelect, setCategorySelect] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  function handleCategorySelect(categoryId) {
    categoryId === categorySelect
      ? setCategorySelect("")
      : setCategorySelect(categoryId);
  }

  useEffect(() => {
    async function listProduct() {
      try {
        const response = await api.get("/products");

        setLoading(false);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    listProduct();
  }, []);

  return (
    <AuthContex.Provider
      value={{ products, loading, categorySelect, handleCategorySelect }}
    >
      {children}
    </AuthContex.Provider>
  );
}
