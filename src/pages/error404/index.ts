import error from "../../components/error";

export default function () {
  return error({ code: "404", text: "Не туда попали" });
}
