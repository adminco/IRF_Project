export const REQUEST = "REQUEST";

export const requests = request => {
  return {
    type: REQUEST,
    payload: { request }
  };
};
