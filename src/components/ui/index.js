import MakeLazy from "../../lib/MakeLazy";

const Button = MakeLazy(() => import("./Button"));

export { Button };
