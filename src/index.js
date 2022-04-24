// import 文を使って sub.js ファイルを読み込む。
import { greet } from "./sub";
import InputName, { inputName } from "./sub1";

// sub.jsに定義されたJavaScriptを実行する。
greet();

console.log(inputName('橋本純一'));
