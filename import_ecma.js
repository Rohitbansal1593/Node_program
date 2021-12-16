//different-2 ways to import in ECMA script

// 1
// import {data,data1} from "./ecmaFirst.mjs";
// data();
// data1();

// 2
import {data as simple} from "./ecmaFirst.mjs";
import {data1 as simple1} from "./ecmaFirst.mjs";
import simplefree from "./ecmaFirst.mjs";
simple();
simple1();
simplefree();