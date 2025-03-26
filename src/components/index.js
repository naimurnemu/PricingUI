import MakeLazy from "../lib/MakeLazy";

const Card = MakeLazy(() => import("./Card"));

export { Card };