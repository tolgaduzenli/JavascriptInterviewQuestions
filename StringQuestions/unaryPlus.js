// What will the output of the following statements be?
// Unary plus tries to convert the operand to a number
let log = console.log;

log(+"1"); //1
log(+true); //1
log(+false); //0
log(+""); //0
log(+"hello"); //NaN
log(+1); //1
log("[]", []); // []  [...]
log("+[]", +[]); // +[] 0
log("!+[]", !+[]); //!+[] true
log("![]", ![]); // ![] false
log("!+[] * []", !+[] * []); //!+[] * [] 0
log("[] * []", [] * []); //[] * [] 0
log("!+[] + [] * []", !+[] + [] * []); // !+[] + [] * [] 1 => true + 0
log(["a", "b"] == ["a", "b"]); // false
log(["a", "b"] == ["a", "b"] + []); // true
log(["a", "b", "c"] == ["a", "b"] + []); // false
log(["a", "b"] == ["b", "a"]); // false
log(["a", "b"] == "a,b"); // true
