import { create } from "zustand";

interface ToastOptions {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

interface ToastData extends ToastOptions {
  id: number;
}

interface StoreProps {
  data: ToastData | null;
  showToast: (data: ToastOptions) => void;
  clearToast: () => void;
}

export const useToast = create<StoreProps>((set) => ({
  data: null,
  showToast: (data: ToastOptions) => set({ data: { ...data, id: Date.now() } }),
  clearToast: () => set({ data: null }),
}));
