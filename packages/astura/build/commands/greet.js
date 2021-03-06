"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.description = exports.command = void 0;
exports.command = "greet <name>";
exports.description = "(Test Command) Greet <name> with Hello";
const builder = (yargs) => yargs
    .options({
    upper: {
        type: "boolean"
    }
})
    .positional("name", {
    type: "string",
    demandOption: true
});
exports.builder = builder;
const handler = (argv) => {
    const { name, upper } = argv;
    const greeting = `Hello, ${name}!`;
    process.stdout.write(upper ? greeting.toUpperCase() : greeting);
    process.exit(0);
};
exports.handler = handler;
