// https://stackoverflow.com/questions/12742082/how-to-nodejs-require-inside-typescript-file
declare function require(name:string): any;
const promptSyncModule = require('prompt-sync');

// https://www.codecademy.com/articles/getting-user-input-in-node-js
// This is used directly as a function.
const promptLib = promptSyncModule()({sigint: true});

interface Player {
    name: string,
    health: number,
    money: number,
    isEliminated: boolean,

    // Purchaseable items
    megaBoom: number,
    boom: number,
    defenseLevel: number,
    attackLevel: number,
    incomeLevel: number,
}

function buildPlayer(name: string): Player {
    return {
        name,
        health: 20,
        money: 0,
        isEliminated: false,
        megaBoom: 0,
        boom: 0,
        defenseLevel: 1,
        attackLevel: 1,
        incomeLevel: 1
    };
}

namespace Io {
    type NotNull<T> = T extends null ? never : T;

    export function input<T>(prompt: string, validator: (entry: string) => NotNull<T> | null): NotNull<T> {
        const firstValidation = validator(rawInput(`${prompt}: `));

        if (firstValidation != null) {
            return firstValidation;
        }
        while (true) {
            const nextValidation = validator(rawInput(`ERROR: ${prompt}: `));
            if (nextValidation != null) {
                return nextValidation;
            }
        }
    }
    function rawInput(prompt: string): string {
        // TODO
        promptLib(prompt);
        return '123';
    }
    export function output(message: string) {
        console.log(message);
    }
}

async function runApp() {
    
}