import { uppercaseString, lowercaseString } from './export.js';

uppercaseString("hello");
lowercaseString("WORLD!");


import * as stringFunctions from "./export.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// default export - import
import add from "./export.js";
