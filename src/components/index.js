import MakeLazy from "../lib/MakeLazy";

const UniCard = MakeLazy(() => import("./UniCard"));
const BillMenu = MakeLazy(() => import("./BillMenu"));
const MultiCard = MakeLazy(() => import("./MultiCard"));

export { UniCard, BillMenu, MultiCard };