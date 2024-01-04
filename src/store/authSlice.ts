import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "@/api/auth";
import { ILoginForm, IRegisterForm } from "@/types/interfaces/auth";
import { IUser } from "@/types/interfaces/user";

interface AuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const loginUser =
  (credentials: ILoginForm): any =>
  async (dispatch: any) => {
    try {
      dispatch(loginStart());
      const user: any = await login(credentials);
      dispatch(loginSuccess(user));
      
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export const registerUser =
  (credentials: IRegisterForm): any =>
  async (dispatch: any) => {
    try {
      dispatch(loginStart());
      const user: any = await register(credentials);
      dispatch(loginSuccess(user));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export default authSlice.reducer;
