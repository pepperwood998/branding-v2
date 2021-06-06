import { Role } from "@/app/shared/types/user.type";
import { AppAction } from "@/core/types/redux.type";
import { AuthState } from "./auth.type";

export default function authReducer(
  state = initialState,
  action: AppAction,
): AuthState {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState: AuthState = {
  role: Role.GUEST,
};
