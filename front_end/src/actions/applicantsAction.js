export const APPLICANT_INFO = "APPLICANT_INFO";

export const applicantInfo = info => {
  return {
    type: APPLICANT_INFO,
    payload: { info }
  };
};
