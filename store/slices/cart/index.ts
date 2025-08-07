export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartSlice {
  cart: {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalQuantity: () => number;
  };
}

export const createCartSlice = (
  set: (fn: (state: CartSlice) => CartSlice['cart']) => void,
  get: () => CartSlice
): CartSlice => ({
  cart: {
    items: [],

    addItem: (item) => {
      const existing = get().cart.items.find((i) => i.id === item.id);
      if (existing) {
        set((state) => ({
          ...state.cart,
          items: state.cart.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        }));
      } else {
        set((state) => ({
          ...state.cart,
          items: [...state.cart.items, item],
        }));
      }
    },

    removeItem: (id) => {
      set((state) => ({
        ...state.cart,
        items: state.cart.items.filter((i) => i.id !== id),
      }));
    },

    increaseQuantity: (id) => {
      set((state) => ({
        ...state.cart,
        items: state.cart.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }));
    },

    decreaseQuantity: (id) => {
      set((state) => ({
        ...state.cart,
        items: state.cart.items
          .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      }));
    },

    clearCart: () => {
      set(() => ({
        ...get().cart,
        items: [],
      }));
    },

    getTotalPrice: () =>
      get().cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    getTotalQuantity: () =>
      get().cart.items.reduce((sum, item) => sum + item.quantity, 0),
  },
});
