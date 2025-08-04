'use client'

import React, { createContext, useState, useContext, ReactNode } from "react";

// Context interface
interface DeleteModalContextType {
  openDeleteModal: (deleteFunction: () => void, entityName: string) => void;
  closeDeleteModal: () => void;
  isDeleteModalOpen: boolean;
  deleteFunction: (() => void) | null;
  entityName: string;
}

// Create the context
const DeleteModalContext = createContext<DeleteModalContextType | undefined>(undefined);

// Provider component
export const DeleteModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteFunction, setDeleteFunction] = useState<(() => void) | null>(null);
  const [entityName, setEntityName] = useState("");

  const openDeleteModal = (deleteFn: () => void, name: string) => {
    setDeleteFunction(() => deleteFn);
    setEntityName(name);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteFunction(null);
    setEntityName("");
    setIsDeleteModalOpen(false);
  };

  return (
    <DeleteModalContext.Provider
      value={{
        openDeleteModal,
        closeDeleteModal,
        isDeleteModalOpen,
        deleteFunction,
        entityName,
      }}
    >
      {children}
    </DeleteModalContext.Provider>
  );
};

// Custom hook to use the context
export const useDeleteModal = (): DeleteModalContextType => {
  const context = useContext(DeleteModalContext);
  if (!context) {
    throw new Error("useDeleteModal must be used within a DeleteModalProvider");
  }
  return context;
};
