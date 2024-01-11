import { BaseUser } from "../models/User";

class AuthRepository {
  private static readonly ACCESS_KEY = "@NEXTHANDSON_AUTHENTICATION";

  public getLoggedUser() {
    const data = localStorage.getItem(AuthRepository.ACCESS_KEY);
    if (data) {
      const parsedData: BaseUser = JSON.parse(data);

      return parsedData;
    }
  }

  public setLoggedUser(user: BaseUser) {
    localStorage.setItem(AuthRepository.ACCESS_KEY, JSON.stringify(user));
  }

  public removeLoggedUser() {
    localStorage.removeItem(AuthRepository.ACCESS_KEY);
  }
}

export const authRepository = new AuthRepository();
