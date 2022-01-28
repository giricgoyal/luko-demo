import { validateEmail } from "@/endpoints/utils";

const validEmails: string[] = [];

const emailRegex = new RegExp(
  // eslint-disable-next-line prettier/prettier,no-useless-escape
  "^((([a-zA-Z0-9]+)|([a-zA-Z0-9]+[\_\.\-]{1}[a-zA-Z0-9]+))\@(([a-zA-Z0-9]+[\-]{1}[a-zA-Z0-9]+)|([a-zA-Z0-9]+))\.[a-zA-Z]{2,})$"
);

const validateWithRegex = (email: string): boolean => emailRegex.test(email);

const validateWithApi = async (email: string): Promise<string | null> => {
  const { success, error, format_valid, mx_found, smtp_check, domain } =
    await validateEmail(email);
  if ((!success && error) || !format_valid) {
    return `${email} is invalid`;
  }
  if (!mx_found) {
    return `${email} is invalid. ${domain} Domain is not configured to receive emails.`;
  }
  if (!smtp_check) {
    return `${email} does not exist.`;
  }

  return null;
};

export const validateEmails = async (
  emailList: string[]
): Promise<string[]> => {
  const errors = [];
  for (let counter = 0; counter < emailList.length; counter++) {
    const email = emailList[counter];
    if (!validEmails.includes(email)) {
      if (!validateWithRegex(email)) {
        errors.push(`${email} is invalid.`);
      } else {
        const error = await validateWithApi(email);

        if (error) {
          errors.push(error);
        } else {
          validEmails.push(email);
        }
      }
    }
  }

  return errors;
};
