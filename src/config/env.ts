import "dotenv/config";

export const env = {
  loginClinic: process.env.EC_LOGIN_CLINIC!,
  loginUsername: process.env.ECLINIC_USERNAME!,
  loginPassword: process.env.ECLINIC_PASSWORD!,
};
