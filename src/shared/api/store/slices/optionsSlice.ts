import { configLocalstorage, languages } from "@/shared/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface optionsState {
  language: keyof typeof languages;
}

const initialState: optionsState = {
  language: (localStorage.getItem(configLocalstorage.LANGUAGE) as keyof typeof languages) ?? "en"
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setLanguage: (state, { payload: language }: PayloadAction<keyof typeof languages>) => {
      state.language = language;
      localStorage.setItem(configLocalstorage.LANGUAGE, language);
    }
  }
});

export const { actions: optionsActions, reducer: optionsReducer } = optionsSlice;
