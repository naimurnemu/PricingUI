import MakeLazy from "../lib/MakeLazy";

const Card = MakeLazy(() => import("./Card"));
const BillMenu = MakeLazy(() => import("./BillMenu"));

export { Card, BillMenu };