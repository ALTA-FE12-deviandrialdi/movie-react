import { createSlice } from "@reduxjs/toolkit";

import { MovieType } from "../../types/movie";

interface StateType {
  favorites: MovieType[];
  loading: boolean;
} // ini adalah type data dari state

const initialState: StateType = {
  favorites: [],
  loading: true,
}; // ini adalah nilai dasarnya.

const sliceState = createSlice({
  // create slice adalah macam2 fungsi
  name: "state", // Default value dari sebuah state, ini tempat inisialisasi state nya dilakukan

  initialState: initialState, // untuk daftarkan statenya
  reducers: {
    // reducer itu adalah fungsi atau function biasanya digunakan untuk merubah sebuah nilai atau updaternya.
    // Reducers => inisialisasi function untuk updater state
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    }, // ini adalah updaternya
    setLoading: (state, action) => {
      state.loading = action.payload; // ini adalah updaternya
    },
  },
}); // membuat potongan dari statenya

const reducers = {
  state: sliceState.reducer,
}; //Jika sudah didaftarkan tinggal dibuat const reducers. Nantinya di defined dalam bentuk objek. Kenapa dalam bentuk objek? Karena  bisa membuat reducer lebih dari satu. reducers disini untuk semua pada reducers: {} (semua komponen)

export const { setFavorites, setLoading } = sliceState.actions; // nanti di panggil di file lain.
export default reducers; // lebih tepatnya kayak didaftarkan ke data base
