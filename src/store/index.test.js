import { it } from "date-fns/locale"
import { store } from "./index"

test("exists", () => {
  expect(store).not.toBe(null);
});