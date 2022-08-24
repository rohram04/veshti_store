export const actions = {
  DESTROY_SESSION: "DESTROY_SESSION",
};

export function clearState() {
  return { type: actions.DESTROY_SESSION };
}
