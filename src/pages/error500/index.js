import error from "../../components/error";

export default function() {
    return error({
        code: "500",
        text: "Мы уже фиксим"
    });
}