import chalk from "chalk";
import { add } from "@scope/add";
import { subtract } from "@scope/subtract";

Deno.serve((_: Request) => {
	const plus = add(1, 2);
	const minus = subtract(2, 4);

	console.log("1 + 2 =", chalk.green(plus));
	console.log("2 - 4 =", chalk.red(minus));
	return new Response(`Hello World! 1 + 2 is ${plus} and 2 - 4 is ${minus}`);
});
