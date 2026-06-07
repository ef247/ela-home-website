import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  image: string;
  fabric: string;
  /** dimensions in cm, optional for in-stock items */
  width?: number;
  length?: number;
  unitPrice: number;
  qty: number;
}

interface StoreState {
  items: CartItem[];
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; key: string }
  | { type: "QTY"; key: string; qty: number }
  | { type: "CLEAR" };

function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.key === action.item.key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === action.item.key
              ? { ...i, qty: i.qty + action.item.qty }
              : i,
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.key !== action.key) };
    case "QTY":
      return {
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, qty: Math.max(1, action.qty) } : i,
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

interface StoreContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: "ADD", item });
    setCartOpen(true);
  }, []);
  const removeItem = useCallback(
    (key: string) => dispatch({ type: "REMOVE", key }),
    [],
  );
  const setQty = useCallback(
    (key: string, qty: number) => dispatch({ type: "QTY", key, qty }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const count = useMemo(
    () => state.items.reduce((n, i) => n + i.qty, 0),
    [state.items],
  );
  const subtotal = useMemo(
    () => state.items.reduce((n, i) => n + i.unitPrice * i.qty, 0),
    [state.items],
  );

  const value: StoreContextValue = {
    items: state.items,
    count,
    subtotal,
    addItem,
    removeItem,
    setQty,
    clear,
    cartOpen,
    setCartOpen,
    menuOpen,
    setMenuOpen,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
