import { LogoutFlow } from "../shared/types/identity/LogoutFlow";
import { SessionResponse } from "../shared/types/identity/SessionResponse";

const baseUrl = import.meta.env.VITE_IDENTITY_URL;

export const GetSession = async (): Promise<SessionResponse> => {
  try {
    const response = await fetch(`${baseUrl}/sessions/whoami`, {
      credentials: "include",
    });
    const payload = await response.json();
    console.log(payload);
    const result = {
      result: response.ok,
    } as SessionResponse;

    response.ok ? (result.session = payload) : (result.error = payload);
    return result;
  } catch (exception) {
    return {
      result: false,
    };
  }
};

export const Logout = async (): Promise<boolean> => {
  try {
    const logoutFlowResponse = await fetch(
      `${baseUrl}/self-service/logout/browser`,
      {
        credentials: "include",
      }
    );
    const flow: LogoutFlow = await logoutFlowResponse.json();
    const response = await fetch(flow.logout_url, {
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    return response.ok;
  } catch (exception) {
    console.log("Unhandled exception: " + exception);
    return false;
  }
};
