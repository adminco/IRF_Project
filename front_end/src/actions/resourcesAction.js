export const RESOURCES = "RESOURCES";

export const resourcesAction = resource => {
  return {
    type: RESOURCES,
    payload: { resource }
  };
};
