import axios from "axios";
import { APILAYERNET_ACCESS_KEY, APILAYERNET_ENDPOINT } from "./constants";

type VALIDATEEMAIL_DATA = {
  catch_all?: boolean;
  did_you_mean?: string;
  disposable?: boolean;
  domain?: string;
  email?: string;
  format_valid?: boolean;
  free?: boolean;
  mx_found?: boolean;
  role?: boolean;
  score?: number;
  smtp_check?: boolean;
  user?: string;
  success?: boolean;
  error?: {
    code?: string;
    type?: string;
  };
};

export const validateEmail = async (
  email: string
): Promise<VALIDATEEMAIL_DATA> => {
  const { data } = await axios.get(`${APILAYERNET_ENDPOINT}/check`, {
    params: {
      access_key: APILAYERNET_ACCESS_KEY,
      email,
      smtp: 1,
      format: 1,
    },
  });
  return data;
};
