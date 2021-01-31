// What will the output of the following statements be?
// Unary plus tries to convert the operand to a number
let log = console.log;

log(+"1");
log(+true);
log(+false);
log(+"");
log(+"hello");
log(+1);
log("[]", []);
log("+[]", +[]);
log("!+[]", !+[]);
log("![]", ![]);
log("!+[] * []", !+[] * []);
log("[] * []", [] * []);
log("!+[] + [] * []", !+[] + [] * []);
log(["a", "b"] == ["a", "b"]);
log(["a", "b"] == ["a", "b"] + []);
log(["a", "b", "c"] == ["a", "b"] + []);
log(["a", "b"] == ["b", "a"]);
log(["a", "b"] == "a,b");
