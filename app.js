const out = (logs) => logs.join("\n");

// For "predict the output" lessons (Python / C++ / C#): compare the
// learner's typed answer to the expected output, ignoring case & spacing.
const expect = (answer, hint) => (a) =>
  a.toLowerCase() === normalize(answer).toLowerCase()
    ? { pass: true }
    : { pass: false, msg: hint || `Expected output: ${answer}` };

const courses = [

  // ======================= JS EASY =======================
  {
    name: "🟢 Easy",
    lessons: [
      {
        title: "1. Saying things (console.log)",
        body: `<p>🗣️ <code>console.log</code> is how the computer <strong>talks to you</strong>.
          Whatever you put inside the <code>( )</code>, it says out loud in the Output box.</p>
          <pre><code>console.log("Hello!");</code></pre>
          <p>Words go inside "quotes" — like putting them in a speech bubble.</p>`,
        prompt: 'Make the computer say:  Hello, JavaScript!',
        starter: 'console.log("");',
        solution: 'console.log("Hello, JavaScript!");',
        check: (l) => out(l).includes("Hello, JavaScript!")
          ? { pass: true } : { pass: false, msg: 'It should say "Hello, JavaScript!"' },
      },
      {
        title: "2. Secret notes (comments)",
        body: `<p>📝 A <strong>comment</strong> is a note for humans. The computer skips it.
          Start a note with two slashes <code>//</code>.</p>
          <pre><code>// this is a note, the computer ignores it
console.log("but this runs");</code></pre>`,
        prompt: 'Write a comment (any words), then make the computer say:  hi',
        starter: '// \nconsole.log("");',
        solution: '// my first note\nconsole.log("hi");',
        check: (l) => out(l).includes("hi")
          ? { pass: true } : { pass: false, msg: 'After your note, print "hi".' },
      },
      {
        title: "3. Labeled boxes (variables)",
        body: `<p>📦 A <strong>variable</strong> is a box with a name. You put a thing in
          the box, write a name on it, and grab it later by its name.</p>
          <pre><code>let pet = "cat";
console.log(pet);   // cat</code></pre>
          <p><code>let</code> = a box you can change. <code>const</code> = a box you lock shut.</p>`,
        prompt: 'Put  "Tokyo"  in a box called  city, then say what is in it.',
        starter: 'let city = ;\nconsole.log(city);',
        solution: 'let city = "Tokyo";\nconsole.log(city);',
        check: (l) => out(l).includes("Tokyo")
          ? { pass: true } : { pass: false, msg: 'Put "Tokyo" in `city` and print it.' },
      },
      {
        title: "4. Words (strings)",
        body: `<p>✍️ Any words inside "quotes" are called a <strong>string</strong> — like
          beads on a string of letters. You can glue strings together with <code>+</code>.</p>
          <pre><code>console.log("Hi " + "there");  // Hi there</code></pre>`,
        prompt: 'Glue  "Good"  and  "morning"  with a space, to say:  Good morning',
        starter: 'console.log( );',
        solution: 'console.log("Good" + " morning");',
        check: (l) => out(l).includes("Good morning")
          ? { pass: true } : { pass: false, msg: 'Glue the words to make "Good morning".' },
      },
      {
        title: "5. Counting (numbers & math)",
        body: `<p>🔢 Numbers don't need quotes. The computer is a great calculator:
          <code>+</code> add, <code>-</code> minus, <code>*</code> times, <code>/</code> divide.</p>
          <pre><code>console.log(2 + 3);   // 5
console.log(4 * 5);   // 20</code></pre>`,
        prompt: 'Make the computer work out  7 times 6  (the answer is 42).',
        starter: 'console.log( );',
        solution: 'console.log(7 * 6);',
        check: (l) => out(l).includes("42")
          ? { pass: true } : { pass: false, msg: "Use * to multiply 7 and 6." },
      },
      {
        title: "6. Yes or no (booleans)",
        body: `<p>✅❌ A <strong>boolean</strong> is just <code>true</code> or <code>false</code> —
          like a light switch that's ON or OFF. No quotes!</p>
          <pre><code>let isRaining = true;
console.log(isRaining);   // true</code></pre>`,
        prompt: 'Make a box  isHappy  that is  true, and print it.',
        starter: 'let isHappy = ;\nconsole.log(isHappy);',
        solution: 'let isHappy = true;\nconsole.log(isHappy);',
        check: (l) => out(l).includes("true")
          ? { pass: true } : { pass: false, msg: "Set isHappy to true (no quotes)." },
      },
      {
        title: "7. Comparing things",
        body: `<p>⚖️ You can ask the computer questions. It answers <code>true</code> or
          <code>false</code>.</p>
          <pre><code>console.log(5 > 3);    // true  (is 5 bigger?)
console.log(2 === 2);  // true  (are they equal?)</code></pre>
          <p><code>===</code> means "exactly equal". <code>&gt;</code> bigger, <code>&lt;</code> smaller.</p>`,
        prompt: 'Ask the computer: is  10  bigger than  4 ?  (should say true)',
        starter: 'console.log( );',
        solution: 'console.log(10 > 4);',
        check: (l) => out(l).includes("true")
          ? { pass: true } : { pass: false, msg: "Use 10 > 4." },
      },
      {
        title: "8. Making choices (if / else)",
        body: `<p>🤔 <code>if</code> does something only WHEN a question is true.
          <code>else</code> is the backup plan.</p>
          <pre><code>if (5 > 3) {
  console.log("yes!");
} else {
  console.log("no");
}</code></pre>`,
        prompt: 'score is 80. If score is 50 or more, say "pass", otherwise say "fail".',
        starter: 'let score = 80;\nif ( ) {\n\n} else {\n\n}',
        solution: 'let score = 80;\nif (score >= 50) {\n  console.log("pass");\n} else {\n  console.log("fail");\n}',
        check: (l) => out(l).includes("pass")
          ? { pass: true } : { pass: false, msg: 'With score 80 it should say "pass".' },
      },
      {
        title: "9. More choices (else if)",
        body: `<p>🪜 Need more than two paths? Stack them with <code>else if</code> —
          the computer checks each one from top to bottom and stops at the first true one.</p>
          <pre><code>if (age < 13) console.log("kid");
else if (age < 20) console.log("teen");
else console.log("grown-up");</code></pre>`,
        prompt: 'age is 15. Print "kid" if under 13, "teen" if under 20, else "grown-up".',
        starter: 'let age = 15;\nif (age < 13) console.log("kid");\nelse if ( ) console.log("teen");\nelse console.log("grown-up");',
        solution: 'let age = 15;\nif (age < 13) console.log("kid");\nelse if (age < 20) console.log("teen");\nelse console.log("grown-up");',
        check: (l) => out(l).includes("teen")
          ? { pass: true } : { pass: false, msg: "15 is under 20, so it should say teen." },
      },
      {
        title: "10. Repeating (for loop)",
        body: `<p>🔁 A <strong>for loop</strong> repeats something many times so you don't
          have to copy-paste. <code>i++</code> means "add 1 each time".</p>
          <pre><code>for (let i = 1; i <= 3; i++) {
  console.log(i);   // 1, then 2, then 3
}</code></pre>`,
        prompt: 'Count out loud from 1 to 5 (each number on its own line).',
        starter: 'for (let i = 1; i <= 5; i++) {\n\n}',
        solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
        check: (l) => ["1","2","3","4","5"].every((n) => out(l).includes(n))
          ? { pass: true } : { pass: false, msg: "Print 1, 2, 3, 4, and 5." },
      },
      {
        title: "11. Repeat until done (while loop)",
        body: `<p>♻️ A <strong>while loop</strong> keeps going as long as a question stays
          true — like "keep eating while there's cake left".</p>
          <pre><code>let n = 3;
while (n > 0) {
  console.log(n);
  n = n - 1;   // get closer to stopping!
}</code></pre>`,
        prompt: 'Start at 3 and count DOWN to 1 (print 3, 2, 1).',
        starter: 'let n = 3;\nwhile (n > 0) {\n\n}',
        solution: 'let n = 3;\nwhile (n > 0) {\n  console.log(n);\n  n = n - 1;\n}',
        check: (l) => out(l).includes("3") && out(l).includes("2") && out(l).includes("1")
          ? { pass: true } : { pass: false, msg: "Print 3, 2, 1 — and remember to make n smaller!" },
      },
      {
        title: "12. A list of things (arrays)",
        body: `<p>📚 An <strong>array</strong> is a list, like a shelf of books. Square
          brackets <code>[ ]</code>, items split by commas. Counting starts at <strong>0</strong>!</p>
          <pre><code>let fruits = ["apple", "pear", "kiwi"];
console.log(fruits[0]);   // apple  (the FIRST one)</code></pre>`,
        prompt: 'Make a list  colors  of "red","green","blue" and print the 2nd one (green).',
        starter: 'let colors = ["red", "green", "blue"];\nconsole.log( );',
        solution: 'let colors = ["red", "green", "blue"];\nconsole.log(colors[1]);',
        check: (l) => out(l).includes("green")
          ? { pass: true } : { pass: false, msg: "Counting starts at 0, so the 2nd item is [1]." },
      },
      {
        title: "13. Little machines (functions)",
        body: `<p>🏭 A <strong>function</strong> is a machine you build once and use again and
          again. You feed it something, it gives something back with <code>return</code>.</p>
          <pre><code>function double(n) {
  return n + n;
}
console.log(double(5));   // 10</code></pre>`,
        prompt: 'Build a machine  square(n)  that returns n times n. Print square(8) (64).',
        starter: 'function square(n) {\n  return ;\n}\nconsole.log(square(8));',
        solution: 'function square(n) {\n  return n * n;\n}\nconsole.log(square(8));',
        check: (l) => out(l).includes("64")
          ? { pass: true } : { pass: false, msg: "square(8) should give 64." },
      },
    ],
  },

  // ==================== JS INTERMEDIATE ====================
  {
    name: "🔵 Intermediate",
    lessons: [
      {
        title: "1. Backpacks (objects)",
        body: `<p>🎒 An <strong>object</strong> is a backpack with labeled pockets. Each
          pocket has a name (key) and a thing inside (value).</p>
          <pre><code>let person = { name: "Sam", age: 25 };
console.log(person.name);   // Sam</code></pre>
          <p>Use a dot <code>.</code> to open a pocket.</p>`,
        prompt: 'Make a  dog  with name "Rex" and legs 4. Print its name.',
        starter: 'let dog = { name: "Rex", legs: 4 };\nconsole.log( );',
        solution: 'let dog = { name: "Rex", legs: 4 };\nconsole.log(dog.name);',
        check: (l) => out(l).includes("Rex")
          ? { pass: true } : { pass: false, msg: "Open the name pocket with dog.name." },
      },
      {
        title: "2. Changing a pocket",
        body: `<p>🔧 You can change what's in a pocket, or add a new one.</p>
          <pre><code>let cat = { name: "Mimi" };
cat.age = 3;          // add a new pocket
console.log(cat.age); // 3</code></pre>`,
        prompt: 'Give the car a new pocket  color  = "red", then print it.',
        starter: 'let car = { wheels: 4 };\n\nconsole.log(car.color);',
        solution: 'let car = { wheels: 4 };\ncar.color = "red";\nconsole.log(car.color);',
        check: (l) => out(l).includes("red")
          ? { pass: true } : { pass: false, msg: "Set car.color = 'red' before printing." },
      },
      {
        title: "3. Adding to a list (push)",
        body: `<p>➕ <code>.push()</code> puts a new thing on the END of a list.</p>
          <pre><code>let nums = [1, 2];
nums.push(3);
console.log(nums.length);   // 3  (.length = how many)</code></pre>`,
        prompt: 'Start with [10, 20], push 30, then print the last item (30).',
        starter: 'let nums = [10, 20];\nnums.push(30);\nconsole.log( );',
        solution: 'let nums = [10, 20];\nnums.push(30);\nconsole.log(nums[2]);',
        check: (l) => out(l).includes("30")
          ? { pass: true } : { pass: false, msg: "After pushing, the last item is nums[2]." },
      },
      {
        title: "4. Fill-in-the-blanks (template literals)",
        body: `<p>🧩 Backticks <code>\`\`</code> let you drop variables right into a sentence
          using <code>\${ }</code> — like fill-in-the-blank.</p>
          <pre><code>let name = "Ada";
console.log(\`Hi \${name}!\`);   // Hi Ada!</code></pre>`,
        prompt: 'name="Lin", age=9. Print exactly:  Lin is 9  using backticks.',
        starter: 'let name = "Lin";\nlet age = 9;\nconsole.log(``);',
        solution: 'let name = "Lin";\nlet age = 9;\nconsole.log(`${name} is ${age}`);',
        check: (l) => out(l).includes("Lin is 9")
          ? { pass: true } : { pass: false, msg: 'Make it say "Lin is 9".' },
      },
      {
        title: "5. String tricks",
        body: `<p>🛠️ Words come with built-in helpers.</p>
          <pre><code>"hello".toUpperCase()    // "HELLO"  (SHOUTING)
"hello".length           // 5        (how many letters)
"hello".includes("ell")  // true     (is it inside?)</code></pre>`,
        prompt: 'Make the word  "cat"  SHOUT (turn it into CAT).',
        starter: 'console.log( );',
        solution: 'console.log("cat".toUpperCase());',
        check: (l) => out(l).includes("CAT")
          ? { pass: true } : { pass: false, msg: "Use .toUpperCase()." },
      },
      {
        title: "6. Going through a list (for...of)",
        body: `<p>🚶 <code>for...of</code> walks through a list one item at a time — no
          counting needed.</p>
          <pre><code>for (const item of ["a", "b"]) {
  console.log(item);   // a, then b
}</code></pre>`,
        prompt: 'Walk through [2, 4, 6] and print each number.',
        starter: 'for (const n of [2, 4, 6]) {\n\n}',
        solution: 'for (const n of [2, 4, 6]) {\n  console.log(n);\n}',
        check: (l) => out(l).includes("2") && out(l).includes("4") && out(l).includes("6")
          ? { pass: true } : { pass: false, msg: "Print 2, 4, and 6." },
      },
      {
        title: "7. Short machines (arrow functions)",
        body: `<p>🏹 An <strong>arrow function</strong> is a shorter way to write a machine.</p>
          <pre><code>const add = (a, b) => a + b;
console.log(add(2, 3));   // 5</code></pre>`,
        prompt: 'Make an arrow machine  triple = n => n*3. Print triple(5) (15).',
        starter: 'const triple = ;\nconsole.log(triple(5));',
        solution: 'const triple = n => n * 3;\nconsole.log(triple(5));',
        check: (l) => out(l).includes("15")
          ? { pass: true } : { pass: false, msg: "triple(5) should be 15." },
      },
      {
        title: "8. Backup values (default parameters)",
        body: `<p>🛟 Give a machine a backup value, used when nobody gives one.</p>
          <pre><code>function greet(name = "friend") {
  return "Hi " + name;
}
console.log(greet());   // Hi friend</code></pre>`,
        prompt: 'Make greet with a backup of "friend". Call greet() with nothing, print it.',
        starter: 'function greet(name = "friend") {\n  return ;\n}\nconsole.log(greet());',
        solution: 'function greet(name = "friend") {\n  return "Hi " + name;\n}\nconsole.log(greet());',
        check: (l) => out(l).includes("Hi friend")
          ? { pass: true } : { pass: false, msg: 'greet() should say "Hi friend".' },
      },
      {
        title: "9. Quick choice (the ? : trick)",
        body: `<p>⚡ The <strong>ternary</strong> is a tiny if/else on one line:
          <code>question ? yesAnswer : noAnswer</code>.</p>
          <pre><code>let age = 20;
let label = age >= 18 ? "adult" : "kid";
console.log(label);   // adult</code></pre>`,
        prompt: 'temp is 30. Use ? : to print "hot" if temp > 25, else "cool".',
        starter: 'let temp = 30;\nconsole.log( );',
        solution: 'let temp = 30;\nconsole.log(temp > 25 ? "hot" : "cool");',
        check: (l) => out(l).includes("hot")
          ? { pass: true } : { pass: false, msg: "With temp 30 it should say hot." },
      },
      {
        title: "10. Pick a path (switch)",
        body: `<p>🚦 <code>switch</code> picks one path out of many by matching a value.
          <code>break</code> stops it falling into the next one.</p>
          <pre><code>switch (day) {
  case "Sat": console.log("weekend"); break;
  case "Sun": console.log("weekend"); break;
  default:    console.log("weekday");
}</code></pre>`,
        prompt: 'light is "red". switch on it: "red" → print "stop", "green" → "go".',
        starter: 'let light = "red";\nswitch (light) {\n  case "red": console.log("stop"); break;\n  case "green":  break;\n}',
        solution: 'let light = "red";\nswitch (light) {\n  case "red": console.log("stop"); break;\n  case "green": console.log("go"); break;\n}',
        check: (l) => out(l).includes("stop")
          ? { pass: true } : { pass: false, msg: 'For "red" it should print "stop".' },
      },
      {
        title: "11. true AND false (&& || !)",
        body: `<p>🔗 Join questions: <code>&&</code> = AND (both true),
          <code>||</code> = OR (either true), <code>!</code> = NOT (flip it).</p>
          <pre><code>console.log(true && false);  // false
console.log(true || false);  // true</code></pre>`,
        prompt: 'age is 20. Print whether age >= 18 AND age < 65 (true).',
        starter: 'let age = 20;\nconsole.log( );',
        solution: 'let age = 20;\nconsole.log(age >= 18 && age < 65);',
        check: (l) => out(l).includes("true")
          ? { pass: true } : { pass: false, msg: "Join the two checks with &&." },
      },
    ],
  },

  // ======================= JS HARD =======================
  {
    name: "🟠 Hard",
    lessons: [
      {
        title: "1. Do it for each (forEach)",
        body: `<p>🔁 <code>forEach</code> runs your machine on every item in a list.</p>
          <pre><code>[1, 2, 3].forEach(n => console.log(n));</code></pre>`,
        prompt: 'Use forEach on [1, 2, 3] to print each number DOUBLED (2, 4, 6).',
        starter: '[1, 2, 3].forEach(n => {\n\n});',
        solution: '[1, 2, 3].forEach(n => console.log(n * 2));',
        check: (l) => out(l).includes("2") && out(l).includes("4") && out(l).includes("6")
          ? { pass: true } : { pass: false, msg: "Print n * 2 for each item." },
      },
      {
        title: "2. Make a new list (map)",
        body: `<p>🗺️ <code>map</code> makes a brand-new list by changing every item — like
          a cookie cutter on each one.</p>
          <pre><code>let doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);   // [2, 4, 6]</code></pre>`,
        prompt: 'Turn [1, 2, 3] into each times 10, then print it (10,20,30).',
        starter: 'let big = [1, 2, 3].map( );\nconsole.log(big);',
        solution: 'let big = [1, 2, 3].map(n => n * 10);\nconsole.log(big);',
        check: (l) => out(l).includes("10,20,30")
          ? { pass: true } : { pass: false, msg: "map each n to n * 10." },
      },
      {
        title: "3. Keep some (filter)",
        body: `<p>🧹 <code>filter</code> keeps only the items that pass a test, like a sieve.</p>
          <pre><code>let evens = [1,2,3,4].filter(n => n % 2 === 0);
console.log(evens);   // [2, 4]</code></pre>`,
        prompt: 'Keep only numbers bigger than 10 from [5, 12, 3, 20]. Print them (12,20).',
        starter: 'let big = [5, 12, 3, 20].filter( );\nconsole.log(big);',
        solution: 'let big = [5, 12, 3, 20].filter(n => n > 10);\nconsole.log(big);',
        check: (l) => out(l).includes("12,20")
          ? { pass: true } : { pass: false, msg: "Keep items where n > 10." },
      },
      {
        title: "4. Squish to one (reduce)",
        body: `<p>🫳 <code>reduce</code> squishes a whole list into ONE value — perfect for
          adding everything up.</p>
          <pre><code>let sum = [1,2,3,4].reduce((total, n) => total + n, 0);
console.log(sum);   // 10</code></pre>`,
        prompt: 'Add up [10, 20, 30] with reduce and print it (60).',
        starter: 'let sum = [10, 20, 30].reduce( , 0);\nconsole.log(sum);',
        solution: 'let sum = [10, 20, 30].reduce((t, n) => t + n, 0);\nconsole.log(sum);',
        check: (l) => out(l).includes("60")
          ? { pass: true } : { pass: false, msg: "Add each n to the running total." },
      },
      {
        title: "5. Find one (find)",
        body: `<p>🔎 <code>find</code> hands you the FIRST item that passes a test.</p>
          <pre><code>let firstBig = [2, 9, 4].find(n => n > 5);
console.log(firstBig);   // 9</code></pre>`,
        prompt: 'Find the first number over 100 in [40, 150, 200]. Print it (150).',
        starter: 'let r = [40, 150, 200].find( );\nconsole.log(r);',
        solution: 'let r = [40, 150, 200].find(n => n > 100);\nconsole.log(r);',
        check: (l) => out(l).includes("150")
          ? { pass: true } : { pass: false, msg: "150 is the first one over 100." },
      },
      {
        title: "6. A list of backpacks (array of objects)",
        body: `<p>🎒🎒 Real data is often a list of objects.</p>
          <pre><code>let users = [
  { name: "Al", age: 20 },
  { name: "Bo", age: 35 },
];
console.log(users[1].name);   // Bo</code></pre>`,
        prompt: 'Print the age of the user named "Bo" from the list.',
        starter: 'let users = [\n  { name: "Al", age: 20 },\n  { name: "Bo", age: 35 },\n];\nconsole.log( );',
        solution: 'let users = [\n  { name: "Al", age: 20 },\n  { name: "Bo", age: 35 },\n];\nconsole.log(users[1].age);',
        check: (l) => out(l).includes("35")
          ? { pass: true } : { pass: false, msg: "Bo is users[1], so users[1].age." },
      },
      {
        title: "7. Putting in order (sort)",
        body: `<p>📊 <code>sort</code> puts a list in order. For numbers, give it the little
          rule <code>(a, b) => a - b</code> (smallest first).</p>
          <pre><code>let n = [3, 1, 2].sort((a, b) => a - b);
console.log(n);   // [1, 2, 3]</code></pre>`,
        prompt: 'Sort [30, 4, 17] smallest to biggest. Print it (4,17,30).',
        starter: 'let s = [30, 4, 17].sort( );\nconsole.log(s);',
        solution: 'let s = [30, 4, 17].sort((a, b) => a - b);\nconsole.log(s);',
        check: (l) => out(l).includes("4,17,30")
          ? { pass: true } : { pass: false, msg: "Use .sort((a, b) => a - b)." },
      },
      {
        title: "8. Oops-catcher (try / catch)",
        body: `<p>🪤 <code>try</code> runs risky code. If it breaks, <code>catch</code> grabs
          the error so your program doesn't crash.</p>
          <pre><code>try {
  riskyThing();
} catch (err) {
  console.log("caught it!");
}</code></pre>`,
        prompt: 'In try, call a machine that does not exist. In catch, print "caught".',
        starter: 'try {\n  doesNotExist();\n} catch (err) {\n\n}',
        solution: 'try {\n  doesNotExist();\n} catch (err) {\n  console.log("caught");\n}',
        check: (l) => out(l).includes("caught")
          ? { pass: true } : { pass: false, msg: 'Print "caught" inside catch.' },
      },
      {
        title: "9. A machine that calls itself (recursion)",
        body: `<p>🪞 <strong>Recursion</strong> is a machine that uses itself, like two mirrors
          facing each other. Always needs a "stop" rule!</p>
          <pre><code>function countdown(n) {
  if (n === 0) return;       // stop rule
  console.log(n);
  countdown(n - 1);          // calls itself
}</code></pre>`,
        prompt: 'Finish factorial so fact(5) prints 120 (5×4×3×2×1).',
        starter: 'function fact(n) {\n  if (n <= 1) return 1;\n  return ;\n}\nconsole.log(fact(5));',
        solution: 'function fact(n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}\nconsole.log(fact(5));',
        check: (l) => out(l).includes("120")
          ? { pass: true } : { pass: false, msg: "Return n * fact(n - 1)." },
      },
    ],
  },

  // ====================== JS EXTREME ======================
  {
    name: "🔴 Extreme",
    lessons: [
      {
        title: "1. FizzBuzz (the famous puzzle)",
        body: `<p>🎯 Count 1–15. For multiples of 3 say "Fizz", of 5 say "Buzz", of BOTH say
          "FizzBuzz", otherwise the number. <code>i % 3 === 0</code> asks "divides by 3?".</p>`,
        prompt: 'Print 1 to 15 with FizzBuzz rules. (Must show Fizz, Buzz, and FizzBuzz.)',
        starter: 'for (let i = 1; i <= 15; i++) {\n  // your turn\n}',
        solution: 'for (let i = 1; i <= 15; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}',
        check: (l) => out(l).includes("FizzBuzz") && /\bFizz\b/.test(out(l)) && /\bBuzz\b/.test(out(l))
          ? { pass: true } : { pass: false, msg: "Need Fizz, Buzz, and FizzBuzz." },
      },
      {
        title: "2. Backwards words",
        body: `<p>🔄 Split a word into letters, flip them, glue back.</p>
          <pre><code>"abc".split("")         // ["a","b","c"]
[...].reverse().join("") // glue back</code></pre>`,
        prompt: 'Reverse "hello" and print it (olleh).',
        starter: 'let s = "hello";\nconsole.log( );',
        solution: 'let s = "hello";\nconsole.log(s.split("").reverse().join(""));',
        check: (l) => out(l).includes("olleh")
          ? { pass: true } : { pass: false, msg: "split → reverse → join." },
      },
      {
        title: "3. Same backwards? (palindrome)",
        body: `<p>🪞 A palindrome reads the same both ways, like "racecar".</p>`,
        prompt: 'Write isPal(s) that returns true if s equals its reverse. Print isPal("racecar").',
        starter: 'function isPal(s) {\n  return ;\n}\nconsole.log(isPal("racecar"));',
        solution: 'function isPal(s) {\n  return s === s.split("").reverse().join("");\n}\nconsole.log(isPal("racecar"));',
        check: (l) => out(l).includes("true")
          ? { pass: true } : { pass: false, msg: "Compare s to its reversed self." },
      },
      {
        title: "4. Find the biggest",
        body: `<p>🏔️ Walk the list, remember the biggest you've seen so far.</p>`,
        prompt: 'Find the largest number in [4, 9, 2, 7] with a loop. Print it (9).',
        starter: 'let nums = [4, 9, 2, 7];\nlet max = nums[0];\nfor (const n of nums) {\n\n}\nconsole.log(max);',
        solution: 'let nums = [4, 9, 2, 7];\nlet max = nums[0];\nfor (const n of nums) {\n  if (n > max) max = n;\n}\nconsole.log(max);',
        check: (l) => out(l).split("\n").includes("9")
          ? { pass: true } : { pass: false, msg: "If n > max, update max." },
      },
      {
        title: "5. Counting vowels",
        body: `<p>🔤 Go letter by letter; count it if it's a vowel.</p>
          <pre><code>"aeiou".includes(letter)   // is it a vowel?</code></pre>`,
        prompt: 'Count vowels in "education" and print the count (5).',
        starter: 'let word = "education";\nlet count = 0;\nfor (const ch of word) {\n\n}\nconsole.log(count);',
        solution: 'let word = "education";\nlet count = 0;\nfor (const ch of word) {\n  if ("aeiou".includes(ch)) count++;\n}\nconsole.log(count);',
        check: (l) => out(l).includes("5")
          ? { pass: true } : { pass: false, msg: "education has 5 vowels." },
      },
      {
        title: "6. The ... spread",
        body: `<p>✨ <code>...</code> spreads a list's items into a new list.</p>
          <pre><code>let a = [1, 2];
let b = [...a, 3];   // [1, 2, 3]</code></pre>`,
        prompt: 'Make a new list from [1, 2, 3] with 4 added by spread. Print its length (4).',
        starter: 'let nums = [1, 2, 3];\nlet more = ;\nconsole.log(more.length);',
        solution: 'let nums = [1, 2, 3];\nlet more = [...nums, 4];\nconsole.log(more.length);',
        check: (l) => out(l).includes("4")
          ? { pass: true } : { pass: false, msg: "Use [...nums, 4]." },
      },
      {
        title: "7. Fibonacci",
        body: `<p>🐚 Each number is the two before it added: 0,1,1,2,3,5,8,13...</p>`,
        prompt: 'Write fib(n) where fib(0)=0, fib(1)=1. Print fib(7) (13).',
        starter: 'function fib(n) {\n  if (n < 2) return n;\n  return ;\n}\nconsole.log(fib(7));',
        solution: 'function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n}\nconsole.log(fib(7));',
        check: (l) => out(l).split("\n").includes("13")
          ? { pass: true } : { pass: false, msg: "Return fib(n-1) + fib(n-2)." },
      },
    ],
  },

  // =================== JS FINAL PROJECT ===================
  {
    name: "🏆 Project: Shopping Cart",
    lessons: [
      {
        title: "Step 1 — The cart",
        body: `<p>🛒 Let's build a shopping cart! A cart is a <strong>list of backpacks</strong> —
          each item has a name and a price.</p>
          <pre><code>let cart = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
];</code></pre>`,
        prompt: 'Create the cart above and print how many items it has (2).',
        starter: 'let cart = [\n  { name: "Pen", price: 2 },\n  { name: "Book", price: 10 },\n];\nconsole.log( );',
        solution: 'let cart = [\n  { name: "Pen", price: 2 },\n  { name: "Book", price: 10 },\n];\nconsole.log(cart.length);',
        check: (l) => out(l).includes("2")
          ? { pass: true } : { pass: false, msg: "Print cart.length." },
      },
      {
        title: "Step 2 — Add an item",
        body: `<p>➕ A machine that drops a new item into the cart with <code>push</code>.</p>`,
        prompt: 'Write addItem(cart, name, price). Add "Mug" $7, print cart.length (3).',
        starter: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\nfunction addItem(cart, name, price) {\n\n}\n\naddItem(cart, "Mug", 7);\nconsole.log(cart.length);',
        solution: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\nfunction addItem(cart, name, price) {\n  cart.push({ name: name, price: price });\n}\n\naddItem(cart, "Mug", 7);\nconsole.log(cart.length);',
        check: (l) => out(l).includes("3")
          ? { pass: true } : { pass: false, msg: "push { name, price } onto cart." },
      },
      {
        title: "Step 3 — Add up the total",
        body: `<p>🧮 Use <code>reduce</code> to add every price together.</p>`,
        prompt: 'Write total(cart) returning the sum of prices. Print it (17).',
        starter: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }, { name: "Mug", price: 5 }];\n\nfunction total(cart) {\n  return ;\n}\n\nconsole.log(total(cart));',
        solution: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }, { name: "Mug", price: 5 }];\n\nfunction total(cart) {\n  return cart.reduce((sum, item) => sum + item.price, 0);\n}\n\nconsole.log(total(cart));',
        check: (l) => out(l).includes("17")
          ? { pass: true } : { pass: false, msg: "reduce, adding item.price each time." },
      },
      {
        title: "Step 4 — Find pricey items",
        body: `<p>💰 Use <code>filter</code> then <code>map</code> to get the names of pricey
          items.</p>`,
        prompt: 'Print the NAMES of items over $5 (Book, Mug).',
        starter: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }, { name: "Mug", price: 7 }];\n\nlet pricey = cart.filter(  ).map(  );\nconsole.log(pricey);',
        solution: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }, { name: "Mug", price: 7 }];\n\nlet pricey = cart.filter(i => i.price > 5).map(i => i.name);\nconsole.log(pricey);',
        check: (l) => out(l).includes("Book") && out(l).includes("Mug") && !out(l).includes("Pen")
          ? { pass: true } : { pass: false, msg: "filter price > 5, then map to .name." },
      },
      {
        title: "Step 5 — Print a receipt",
        body: `<p>🧾 Use <code>forEach</code> + a fill-in-the-blank string for each line.</p>`,
        prompt: 'For each item print:  Pen - $2  and  Book - $10',
        starter: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\ncart.forEach(item => {\n\n});',
        solution: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\ncart.forEach(item => {\n  console.log(`${item.name} - $${item.price}`);\n});',
        check: (l) => out(l).includes("Pen - $2") && out(l).includes("Book - $10")
          ? { pass: true } : { pass: false, msg: 'Format: `${item.name} - $${item.price}`' },
      },
      {
        title: "Step 6 — All together! 🎉",
        body: `<p>🌟 The finale! Add an item, print every line, then the grand total.
          This uses backpacks, machines, push, forEach, reduce, and fill-in strings —
          everything you learned!</p>`,
        prompt: 'Add "Lamp" $15, print each "name - $price", then  Total: $27.',
        starter: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\nfunction addItem(cart, name, price) {\n  cart.push({ name, price });\n}\n\nfunction total(cart) {\n  return cart.reduce((s, i) => s + i.price, 0);\n}\n\n// 1) add the Lamp ($15)\n// 2) forEach: print "name - $price"\n// 3) print "Total: $" + total(cart)\n',
        solution: 'let cart = [{ name: "Pen", price: 2 }, { name: "Book", price: 10 }];\n\nfunction addItem(cart, name, price) {\n  cart.push({ name, price });\n}\n\nfunction total(cart) {\n  return cart.reduce((s, i) => s + i.price, 0);\n}\n\naddItem(cart, "Lamp", 15);\ncart.forEach(i => console.log(`${i.name} - $${i.price}`));\nconsole.log("Total: $" + total(cart));',
        check: (l) => out(l).includes("Lamp - $15") && out(l).includes("Total: $27")
          ? { pass: true } : { pass: false, msg: "Add Lamp, print each item, then Total: $27." },
      },
    ],
  },

  // ======================== HTML ========================
  {
    name: "🌐 HTML",
    mode: "preview",
    lessons: [
      {
        title: "1. What is a tag?",
        body: `<p>🏷️ HTML is made of <strong>tags</strong> — labels wrapped in
          <code>&lt; &gt;</code>. They come in pairs: an opener and a closer with a slash.</p>
          <pre><code>&lt;h1&gt;  Big text here  &lt;/h1&gt;
opener            closer</code></pre>
          <p>Whatever you type shows up live in the preview below!</p>`,
        prompt: 'Make a big heading <h1> that says exactly:  Hi',
        starter: '<h1></h1>',
        solution: '<h1>Hi</h1>',
        check: (doc) => {
          const h = doc.querySelector("h1");
          return h && h.textContent.trim() === "Hi"
            ? { pass: true } : { pass: false, msg: "Need an <h1> saying Hi." };
        },
      },
      {
        title: "2. Big and small headings",
        body: `<p>📏 Headings go from <code>&lt;h1&gt;</code> (biggest) to
          <code>&lt;h6&gt;</code> (smallest) — like title sizes.</p>`,
        prompt: 'Make a medium heading <h2> that says:  Welcome',
        starter: '<h2></h2>',
        solution: '<h2>Welcome</h2>',
        check: (doc) => {
          const h = doc.querySelector("h2");
          return h && h.textContent.trim() === "Welcome"
            ? { pass: true } : { pass: false, msg: "Need an <h2> saying Welcome." };
        },
      },
      {
        title: "3. Paragraphs",
        body: `<p>📃 Normal sentences go in a paragraph tag <code>&lt;p&gt;</code>.</p>
          <pre><code>&lt;p&gt;This is a sentence.&lt;/p&gt;</code></pre>`,
        prompt: 'Make a <p> that says:  I love coding',
        starter: '<p></p>',
        solution: '<p>I love coding</p>',
        check: (doc) => {
          const p = doc.querySelector("p");
          return p && p.textContent.includes("I love coding")
            ? { pass: true } : { pass: false, msg: 'Put "I love coding" in a <p>.' };
        },
      },
      {
        title: "4. Bold words",
        body: `<p>💪 Wrap words in <code>&lt;strong&gt;</code> to make them bold and important.</p>`,
        prompt: 'Make a <p> with the word  wow  wrapped in <strong>.',
        starter: '<p>That is  cool.</p>',
        solution: '<p>That is <strong>wow</strong> cool.</p>',
        check: (doc) => {
          const s = doc.querySelector("strong");
          return s && s.textContent.includes("wow")
            ? { pass: true } : { pass: false, msg: "Put 'wow' inside <strong>." };
        },
      },
      {
        title: "5. Links (clickable words)",
        body: `<p>🔗 A link uses <code>&lt;a&gt;</code>. The <code>href</code> is where it
          jumps to; the words between are what you click.</p>
          <pre><code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code></pre>`,
        prompt: 'Make a link to  https://google.com  with the text  Google',
        starter: '<a href=""></a>',
        solution: '<a href="https://google.com">Google</a>',
        check: (doc) => {
          const a = doc.querySelector("a");
          return a && (a.getAttribute("href") || "").includes("google") &&
            a.textContent.includes("Google")
            ? { pass: true } : { pass: false, msg: "Need an <a> to google.com saying Google." };
        },
      },
      {
        title: "6. Pictures (images)",
        body: `<p>🖼️ <code>&lt;img&gt;</code> shows a picture. <code>src</code> is the picture
          file; <code>alt</code> is words shown if it can't load.</p>
          <pre><code>&lt;img src="cat.jpg" alt="a cat"&gt;</code></pre>`,
        prompt: 'Add an <img> whose alt text is exactly:  cat',
        starter: '<img src="" alt="">',
        solution: '<img src="cat.jpg" alt="cat">',
        check: (doc) => {
          const img = doc.querySelector("img");
          return img && img.getAttribute("alt") === "cat"
            ? { pass: true } : { pass: false, msg: 'The <img> needs alt="cat".' };
        },
      },
      {
        title: "7. Bullet lists",
        body: `<p>•  A bullet list is a <code>&lt;ul&gt;</code> holding items
          <code>&lt;li&gt;</code>.</p>
          <pre><code>&lt;ul&gt;
  &lt;li&gt;Milk&lt;/li&gt;
  &lt;li&gt;Eggs&lt;/li&gt;
&lt;/ul&gt;</code></pre>`,
        prompt: 'Make a <ul> with exactly 3 <li> items (any words).',
        starter: '<ul>\n  <li></li>\n</ul>',
        solution: '<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>',
        check: (doc) =>
          doc.querySelectorAll("ul li").length === 3
            ? { pass: true } : { pass: false, msg: "Need exactly 3 <li> inside a <ul>." },
      },
      {
        title: "8. Numbered lists",
        body: `<p>1️⃣ Want numbers instead of bullets? Use <code>&lt;ol&gt;</code> (ordered
          list) — same <code>&lt;li&gt;</code> items inside.</p>`,
        prompt: 'Make an <ol> (numbered list) with exactly 2 <li> items.',
        starter: '<ol>\n  <li></li>\n</ol>',
        solution: '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>',
        check: (doc) =>
          doc.querySelectorAll("ol li").length === 2
            ? { pass: true } : { pass: false, msg: "Need 2 <li> inside an <ol>." },
      },
      {
        title: "9. Buttons & boxes to type in",
        body: `<p>🔘 <code>&lt;button&gt;</code> makes a clickable button.
          <code>&lt;input&gt;</code> makes a box to type in.</p>
          <pre><code>&lt;input placeholder="name"&gt;
&lt;button&gt;Go&lt;/button&gt;</code></pre>`,
        prompt: 'Make one <input> AND one <button> (any text).',
        starter: '<input placeholder="">\n<button></button>',
        solution: '<input placeholder="name">\n<button>Go</button>',
        check: (doc) =>
          doc.querySelector("input") && doc.querySelector("button")
            ? { pass: true } : { pass: false, msg: "Need both an <input> and a <button>." },
      },
      {
        title: "10. Build a mini page 🎉",
        body: `<p>🏗️ Put it together: a heading, a paragraph, and a list.</p>`,
        prompt: 'Make a page with an <h1>, a <p>, and a <ul> with at least 2 <li>.',
        starter: '<h1></h1>\n<p></p>\n<ul>\n  <li></li>\n</ul>',
        solution: '<h1>My Page</h1>\n<p>Welcome!</p>\n<ul>\n  <li>First</li>\n  <li>Second</li>\n</ul>',
        check: (doc) =>
          doc.querySelector("h1") && doc.querySelector("p") &&
          doc.querySelectorAll("ul li").length >= 2
            ? { pass: true } : { pass: false, msg: "Need an h1, a p, and a ul with 2+ items." },
      },
    ],
  },

  // ========================= CSS =========================
  {
    name: "🎨 CSS",
    mode: "css",
    lessons: [
      {
        title: "1. What CSS does (color)",
        body: `<p>🎨 CSS makes HTML pretty. The preview has an element with
          <code>id="target"</code> — you write rules for it, picked with <code>#target</code>.</p>
          <pre><code>#target {
  color: red;
}</code></pre>`,
        template: '<p id="target">Style me!</p>',
        prompt: 'Make #target text  red.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  color: red;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).color === "rgb(255, 0, 0)"
            ? { pass: true } : { pass: false, msg: "Set color: red; on #target." },
      },
      {
        title: "2. Bigger text (font-size)",
        body: `<p>🔠 <code>font-size</code> sets how big text is, in pixels (px).</p>
          <pre><code>#target { font-size: 40px; }</code></pre>`,
        template: '<p id="target">Big or small?</p>',
        prompt: 'Make #target font-size exactly  30px.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  font-size: 30px;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).fontSize === "30px"
            ? { pass: true } : { pass: false, msg: "Set font-size: 30px;" },
      },
      {
        title: "3. Bold text (font-weight)",
        body: `<p>💪 <code>font-weight: bold</code> makes text thick and strong.</p>`,
        template: '<p id="target">Make me strong</p>',
        prompt: 'Make #target text  bold.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  font-weight: bold;\n}',
        check: (doc, code, win) => {
          const w = win.getComputedStyle(doc.getElementById("target")).fontWeight;
          return w === "700" || w === "bold"
            ? { pass: true } : { pass: false, msg: "Set font-weight: bold;" };
        },
      },
      {
        title: "4. Background color",
        body: `<p>🌈 <code>background-color</code> paints the box behind the element.</p>
          <pre><code>#target { background-color: yellow; }</code></pre>`,
        template: '<div id="target">A box</div>',
        prompt: 'Give #target a  blue  background.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  background-color: blue;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).backgroundColor === "rgb(0, 0, 255)"
            ? { pass: true } : { pass: false, msg: "Set background-color: blue;" },
      },
      {
        title: "5. Centering text",
        body: `<p>🎯 <code>text-align: center</code> puts the text in the middle.</p>`,
        template: '<div id="target">Center me</div>',
        prompt: 'Center the text of #target.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  text-align: center;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).textAlign === "center"
            ? { pass: true } : { pass: false, msg: "Set text-align: center;" },
      },
      {
        title: "6. Space inside (padding)",
        body: `<p>🛋️ <code>padding</code> adds cushion space INSIDE a box, between the edge
          and the text.</p>
          <pre><code>#target { padding: 20px; }</code></pre>`,
        template: '<div id="target" style="background:#eee">Roomy?</div>',
        prompt: 'Give #target  20px  of padding.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  padding: 20px;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).paddingTop === "20px"
            ? { pass: true } : { pass: false, msg: "Set padding: 20px;" },
      },
      {
        title: "7. An outline (border)",
        body: `<p>🖼️ <code>border</code> draws a line around the box. You give it a
          thickness, a style, and a color.</p>
          <pre><code>#target { border: 2px solid black; }</code></pre>`,
        template: '<div id="target">Frame me</div>',
        prompt: 'Give #target a border:  2px solid black.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  border: 2px solid black;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).borderTopWidth === "2px"
            ? { pass: true } : { pass: false, msg: "Set border: 2px solid black;" },
      },
      {
        title: "8. Space outside (margin)",
        body: `<p>🚀 <code>margin</code> pushes other things AWAY from the box (space on the
          outside).</p>
          <pre><code>#target { margin: 30px; }</code></pre>`,
        template: '<div id="target" style="background:#eee">Push away</div>',
        prompt: 'Give #target a  30px  margin.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  margin: 30px;\n}',
        check: (doc, code, win) =>
          win.getComputedStyle(doc.getElementById("target")).marginTop === "30px"
            ? { pass: true } : { pass: false, msg: "Set margin: 30px;" },
      },
      {
        title: "9. Style a card 🎉",
        body: `<p>🃏 Use several rules at once to make a nice card.</p>`,
        template: '<div id="target">My card</div>',
        prompt: 'On #target: background  lightgray, text-align  center, AND padding  20px.',
        starter: '#target {\n  \n}',
        solution: '#target {\n  background-color: lightgray;\n  text-align: center;\n  padding: 20px;\n}',
        check: (doc, code, win) => {
          const s = win.getComputedStyle(doc.getElementById("target"));
          return s.backgroundColor === "rgb(211, 211, 211)" && s.textAlign === "center" &&
            s.paddingTop === "20px"
            ? { pass: true } : { pass: false, msg: "Need lightgray bg, centered text, AND 20px padding." };
        },
      },
    ],
  },

  // ======================== PYTHON =======================
  {
    name: "🐍 Python",
    mode: "quiz",
    lessons: [
      {
        title: "1. Saying things (print)",
        body: `<p>🗣️ Python says things with <code>print()</code>. Read the code on the left
          and type what it would say.</p>`,
        prompt: "What does this print?",
        starter: 'print("Hello there")',
        solution: "Hello there",
        check: expect("Hello there"),
      },
      {
        title: "2. Secret notes (comments)",
        body: `<p>📝 In Python a note starts with <code>#</code>. The computer skips it.</p>`,
        prompt: "What does this print?",
        starter: '# this is just a note\nprint("ok")',
        solution: "ok",
        check: expect("ok", "The note is ignored — only 'ok' prints."),
      },
      {
        title: "3. Labeled boxes (variables)",
        body: `<p>📦 No <code>let</code> in Python — just a name and <code>=</code>.</p>`,
        prompt: "What does this print?",
        starter: "age = 7\nprint(age)",
        solution: "7",
        check: expect("7"),
      },
      {
        title: "4. Counting (math)",
        body: `<p>🔢 Python follows math rules — times before plus.</p>`,
        prompt: "What does this print?",
        starter: "print(2 + 3 * 4)",
        solution: "14",
        check: expect("14", "3 * 4 happens first (12), then + 2."),
      },
      {
        title: "5. Gluing words",
        body: `<p>✍️ Glue strings with <code>+</code> — no space is added for you.</p>`,
        prompt: "What does this print?",
        starter: 'print("cat" + "dog")',
        solution: "catdog",
        check: expect("catdog"),
      },
      {
        title: "6. Fill-in sentences (f-strings)",
        body: `<p>🧩 An <code>f"..."</code> string drops variables in with <code>{ }</code>.</p>`,
        prompt: "What does this print?",
        starter: 'name = "Bo"\nprint(f"Hi {name}")',
        solution: "Hi Bo",
        check: expect("Hi Bo"),
      },
      {
        title: "7. Yes or no (booleans)",
        body: `<p>✅ In Python, true/false are spelled with a capital letter:
          <code>True</code> and <code>False</code>.</p>`,
        prompt: "What does this print?",
        starter: "print(5 > 3)",
        solution: "True",
        check: expect("True", "5 is bigger than 3, so True (capital T)."),
      },
      {
        title: "8. Choices (if / elif / else)",
        body: `<p>🤔 Python uses a colon and <strong>indentation</strong> (spaces) instead of
          { }. <code>elif</code> means "else if".</p>`,
        prompt: "What does this print?",
        starter: 'x = 5\nif x > 10:\n    print("big")\nelif x > 3:\n    print("medium")\nelse:\n    print("small")',
        solution: "medium",
        check: expect("medium", "5 is not > 10, but it is > 3."),
      },
      {
        title: "9. Repeating (for + range)",
        body: `<p>🔁 <code>range(3)</code> gives 0, 1, 2. Type all the lines (spaces between
          is fine).</p>`,
        prompt: "What does this print? (all lines)",
        starter: "for i in range(3):\n    print(i)",
        solution: "0 1 2",
        check: expect("0 1 2", "range(3) is 0, then 1, then 2."),
      },
      {
        title: "10. Repeat until done (while)",
        body: `<p>♻️ A <code>while</code> loop keeps going while something is true.</p>`,
        prompt: "What does this print? (all lines)",
        starter: "n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1",
        solution: "3 2 1",
        check: expect("3 2 1", "Counts down: 3, 2, 1."),
      },
      {
        title: "11. Lists",
        body: `<p>📚 Lists use square brackets and count from 0.</p>`,
        prompt: "What does this print?",
        starter: 'nums = [10, 20, 30]\nprint(nums[1])',
        solution: "20",
        check: expect("20", "Index [1] is the SECOND item."),
      },
      {
        title: "12. Little machines (def)",
        body: `<p>🏭 Python makes functions with <code>def</code>.</p>`,
        prompt: "What does this print?",
        starter: "def double(n):\n    return n * 2\nprint(double(5))",
        solution: "10",
        check: expect("10"),
      },
      {
        title: "13. Backpacks (dictionaries)",
        body: `<p>🎒 A dictionary is Python's backpack: labeled keys with values.
          Open a pocket with <code>["key"]</code>.</p>`,
        prompt: "What does this print?",
        starter: 'person = {"name": "Sam", "age": 9}\nprint(person["name"])',
        solution: "Sam",
        check: expect("Sam"),
      },
    ],
  },

  // ========================= C++ =========================
  {
    name: "➕ C++",
    mode: "quiz",
    lessons: [
      {
        title: "1. Saying things (cout)",
        body: `<p>🗣️ C++ says things with <code>std::cout &lt;&lt; ...</code>. It's a
          <strong>compiled</strong> language, so here you read it and predict the output.</p>`,
        prompt: "What does this print?",
        starter: '#include <iostream>\nint main() {\n  std::cout << "Hi";\n}',
        solution: "Hi",
        check: expect("Hi"),
      },
      {
        title: "2. Secret notes (comments)",
        body: `<p>📝 A note in C++ starts with <code>//</code>.</p>`,
        prompt: "What does this print?",
        starter: '// this is a note\nstd::cout << "ok";',
        solution: "ok",
        check: expect("ok"),
      },
      {
        title: "3. Labeled boxes — with a type",
        body: `<p>📦 C++ boxes need a <strong>type</strong> label. <code>int</code> means a
          whole number.</p>`,
        prompt: "What does this print?",
        starter: "int x = 4;\nstd::cout << x;",
        solution: "4",
        check: expect("4"),
      },
      {
        title: "4. Different box types",
        body: `<p>🏷️ <code>int</code> = whole number, <code>double</code> = number with a
          dot, <code>string</code> = words, <code>bool</code> = true/false.</p>`,
        prompt: "What does this print?",
        starter: "double price = 3.5;\nstd::cout << price;",
        solution: "3.5",
        check: expect("3.5"),
      },
      {
        title: "5. Counting (math)",
        body: `<p>🔢 Same math rules — times before plus.</p>`,
        prompt: "What does this print?",
        starter: "std::cout << 2 + 3 * 4;",
        solution: "14",
        check: expect("14"),
      },
      {
        title: "6. Printing several things",
        body: `<p>🔗 Chain <code>&lt;&lt;</code> to print things one after another.</p>`,
        prompt: "What does this print?",
        starter: 'std::cout << "a" << "b" << "c";',
        solution: "abc",
        check: expect("abc"),
      },
      {
        title: "7. Making choices (if / else)",
        body: `<p>🤔 <code>%</code> gives the remainder. <code>n % 2</code> is 0 when n is
          even.</p>`,
        prompt: "What does this print?",
        starter: 'int n = 7;\nif (n % 2 == 0) std::cout << "even";\nelse std::cout << "odd";',
        solution: "odd",
        check: expect("odd", "7 is odd."),
      },
      {
        title: "8. Repeating (for loop)",
        body: `<p>🔁 Same counting loop as JavaScript.</p>`,
        prompt: "What does this print?",
        starter: 'for (int i = 1; i <= 3; i++) {\n  std::cout << i;\n}',
        solution: "123",
        check: expect("123"),
      },
      {
        title: "9. Repeat until done (while)",
        body: `<p>♻️ <code>n--</code> means "subtract 1 from n".</p>`,
        prompt: "What does this print?",
        starter: 'int n = 3;\nwhile (n > 0) {\n  std::cout << n;\n  n--;\n}',
        solution: "321",
        check: expect("321"),
      },
      {
        title: "10. Little machines (functions)",
        body: `<p>🏭 A C++ function says what type it gives back first (here, <code>int</code>).</p>`,
        prompt: "What does this print?",
        starter: "int square(int n) {\n  return n * n;\n}\n// ...\nstd::cout << square(4);",
        solution: "16",
        check: expect("16"),
      },
    ],
  },

  // ========================= C# =========================
  {
    name: "🟣 C#",
    mode: "quiz",
    lessons: [
      {
        title: "1. Saying things (WriteLine)",
        body: `<p>🗣️ C# (say "C-sharp") says things with
          <code>Console.WriteLine(...)</code>.</p>`,
        prompt: "What does this print?",
        starter: 'Console.WriteLine("Hi");',
        solution: "Hi",
        check: expect("Hi"),
      },
      {
        title: "2. Secret notes (comments)",
        body: `<p>📝 A note starts with <code>//</code>, just like JS and C++.</p>`,
        prompt: "What does this print?",
        starter: '// a note\nConsole.Write("ok");',
        solution: "ok",
        check: expect("ok"),
      },
      {
        title: "3. Labeled boxes — with a type",
        body: `<p>📦 Like C++, C# boxes have a type. <code>int</code> = whole number.</p>`,
        prompt: "What does this print?",
        starter: "int x = 6;\nConsole.Write(x);",
        solution: "6",
        check: expect("6"),
      },
      {
        title: "4. Word boxes (string)",
        body: `<p>🏷️ <code>string</code> holds words.</p>`,
        prompt: "What does this print?",
        starter: 'string greeting = "hey";\nConsole.Write(greeting);',
        solution: "hey",
        check: expect("hey"),
      },
      {
        title: "5. Counting (math)",
        body: `<p>🔢 Same math rules.</p>`,
        prompt: "What does this print?",
        starter: "Console.Write(2 + 3 * 4);",
        solution: "14",
        check: expect("14"),
      },
      {
        title: "6. Write vs WriteLine",
        body: `<p>↩️ <code>Write</code> stays on the same line; <code>WriteLine</code> jumps to
          a new line after.</p>`,
        prompt: "What does this print? (all on one line)",
        starter: "for (int i = 0; i < 3; i++) {\n  Console.Write(i);\n}",
        solution: "012",
        check: expect("012"),
      },
      {
        title: "7. Making choices (if)",
        body: `<p>🤔 Same <code>if</code> as JS and C++.</p>`,
        prompt: "What does this print?",
        starter: 'int n = 10;\nif (n > 5) Console.WriteLine("big");\nelse Console.WriteLine("small");',
        solution: "big",
        check: expect("big"),
      },
      {
        title: "8. Repeat until done (while)",
        body: `<p>♻️ <code>n--</code> subtracts 1 each time.</p>`,
        prompt: "What does this print?",
        starter: 'int n = 3;\nwhile (n > 0) {\n  Console.Write(n);\n  n--;\n}',
        solution: "321",
        check: expect("321"),
      },
      {
        title: "9. Fill-in sentences (interpolation)",
        body: `<p>🧩 A <code>$"..."</code> string drops variables in with <code>{ }</code>.</p>`,
        prompt: "What does this print?",
        starter: 'string name = "Sam";\nConsole.WriteLine($"Hi {name}");',
        solution: "Hi Sam",
        check: expect("Hi Sam"),
      },
      {
        title: "10. Little machines (methods)",
        body: `<p>🏭 In C# functions are called <strong>methods</strong>; they say their
          return type first.</p>`,
        prompt: "What does this print?",
        starter: "int Square(int n) {\n  return n * n;\n}\n// ...\nConsole.Write(Square(4));",
        solution: "16",
        check: expect("16"),
      },
    ],
  },

  // ===================== APP MAKING ======================
  {
    name: "📱 App Making",
    mode: "app",
    lessons: [
      {
        title: "1. A button that does something",
        body: `<p>🔘 An app is HTML + CSS + JavaScript working as a team. Here a button
          changes the page when clicked. The grader actually <strong>clicks your
          button</strong> to test it!</p>
          <pre><code>btn.addEventListener("click", () => {
  out.textContent = "Clicked!";
});</code></pre>`,
        prompt: 'When the button is clicked, set #out\'s text to exactly:  Clicked!',
        starter:
          '<p id="out">Not clicked yet</p>\n<button id="btn">Click me</button>\n\n<script>\n  const btn = document.getElementById("btn");\n  const out = document.getElementById("out");\n  btn.addEventListener("click", () => {\n    // your code here\n  });\n<\/script>',
        solution:
          '<p id="out">Not clicked yet</p>\n<button id="btn">Click me</button>\n\n<script>\n  const btn = document.getElementById("btn");\n  const out = document.getElementById("out");\n  btn.addEventListener("click", () => {\n    out.textContent = "Clicked!";\n  });\n<\/script>',
        check: (doc) => {
          const btn = doc.getElementById("btn");
          if (!btn) return { pass: false, msg: "Need a button with id 'btn'." };
          btn.click();
          return doc.getElementById("out") &&
            doc.getElementById("out").textContent.trim() === "Clicked!"
            ? { pass: true } : { pass: false, msg: 'After clicking, #out should say "Clicked!".' };
        },
      },
      {
        title: "2. A counter",
        body: `<p>🔢 Keep a number in a box, add 1 on each click, and show it.</p>`,
        prompt: "Make + increase #count (starts 0). Grader clicks it 3× and expects 3.",
        starter:
          '<p id="count">0</p>\n<button id="plus">+</button>\n\n<script>\n  let count = 0;\n  const plus = document.getElementById("plus");\n  const display = document.getElementById("count");\n  plus.addEventListener("click", () => {\n    // add 1 to count, then show it\n  });\n<\/script>',
        solution:
          '<p id="count">0</p>\n<button id="plus">+</button>\n\n<script>\n  let count = 0;\n  const plus = document.getElementById("plus");\n  const display = document.getElementById("count");\n  plus.addEventListener("click", () => {\n    count = count + 1;\n    display.textContent = count;\n  });\n<\/script>',
        check: (doc) => {
          const plus = doc.getElementById("plus");
          if (!plus) return { pass: false, msg: "Need a button with id 'plus'." };
          plus.click(); plus.click(); plus.click();
          return doc.getElementById("count") &&
            doc.getElementById("count").textContent.trim() === "3"
            ? { pass: true } : { pass: false, msg: "After 3 clicks #count should show 3." };
        },
      },
      {
        title: "3. Reading what someone typed",
        body: `<p>⌨️ Read a typing box with <code>input.value</code>.</p>`,
        prompt: 'Clicking #show puts the input\'s text into #out. (Grader types "Lin".)',
        starter:
          '<input id="name" placeholder="your name">\n<button id="show">Show</button>\n<p id="out"></p>\n\n<script>\n  const show = document.getElementById("show");\n  const name = document.getElementById("name");\n  const out = document.getElementById("out");\n  show.addEventListener("click", () => {\n    // put name.value into out\n  });\n<\/script>',
        solution:
          '<input id="name" placeholder="your name">\n<button id="show">Show</button>\n<p id="out"></p>\n\n<script>\n  const show = document.getElementById("show");\n  const name = document.getElementById("name");\n  const out = document.getElementById("out");\n  show.addEventListener("click", () => {\n    out.textContent = name.value;\n  });\n<\/script>',
        check: (doc) => {
          const input = doc.getElementById("name");
          const show = doc.getElementById("show");
          if (!input || !show) return { pass: false, msg: "Need #name input and #show button." };
          input.value = "Lin";
          show.click();
          return doc.getElementById("out") &&
            doc.getElementById("out").textContent.includes("Lin")
            ? { pass: true } : { pass: false, msg: "#out should show what was typed (Lin)." };
        },
      },
      {
        title: "4. Changing a color",
        body: `<p>🎨 You can change styles from JS:
          <code>box.style.background = "red"</code>.</p>`,
        prompt: "Clicking #redBtn should turn #box red.",
        starter:
          '<div id="box" style="width:80px;height:80px;background:gray"></div>\n<button id="redBtn">Make red</button>\n\n<script>\n  const box = document.getElementById("box");\n  document.getElementById("redBtn").addEventListener("click", () => {\n    // turn the box red\n  });\n<\/script>',
        solution:
          '<div id="box" style="width:80px;height:80px;background:gray"></div>\n<button id="redBtn">Make red</button>\n\n<script>\n  const box = document.getElementById("box");\n  document.getElementById("redBtn").addEventListener("click", () => {\n    box.style.background = "red";\n  });\n<\/script>',
        check: (doc, code, win) => {
          const btn = doc.getElementById("redBtn");
          if (!btn) return { pass: false, msg: "Need a button with id 'redBtn'." };
          btn.click();
          const bg = win.getComputedStyle(doc.getElementById("box")).backgroundColor;
          return bg === "rgb(255, 0, 0)"
            ? { pass: true } : { pass: false, msg: "After clicking, #box should be red." };
        },
      },
      {
        title: "5. A to-do app 🎉",
        body: `<p>📝 The big one! Read a box, make a new <code>&lt;li&gt;</code>, and add it to
          a list. This is a real app! (Grader adds 2 items.)</p>`,
        prompt: "Clicking #add should add an <li> with the input text to #list.",
        starter:
          '<input id="task" placeholder="new task">\n<button id="add">Add</button>\n<ul id="list"></ul>\n\n<script>\n  const add = document.getElementById("add");\n  const task = document.getElementById("task");\n  const list = document.getElementById("list");\n  add.addEventListener("click", () => {\n    // make an <li> with task.value and put it in the list\n  });\n<\/script>',
        solution:
          '<input id="task" placeholder="new task">\n<button id="add">Add</button>\n<ul id="list"></ul>\n\n<script>\n  const add = document.getElementById("add");\n  const task = document.getElementById("task");\n  const list = document.getElementById("list");\n  add.addEventListener("click", () => {\n    const li = document.createElement("li");\n    li.textContent = task.value;\n    list.appendChild(li);\n  });\n<\/script>',
        check: (doc) => {
          const add = doc.getElementById("add");
          const task = doc.getElementById("task");
          if (!add || !task) return { pass: false, msg: "Need #task input and #add button." };
          task.value = "Buy milk"; add.click();
          task.value = "Walk dog"; add.click();
          return doc.querySelectorAll("#list li").length === 2
            ? { pass: true } : { pass: false, msg: "Each Add should append one <li> to #list." };
        },
      },
    ],
  },

  // ================== FETCH & SOCKETS ====================
  {
    name: "🔌 Fetch & Sockets",
    mode: "async",
    lessons: [
      {
        title: "1. Waiting for things (async / await)",
        body: `<p>🍕 Some things take time — like ordering pizza. You don't freeze while
          you wait; you carry on and grab it when it's ready.</p>
          <p><code>fetch</code> asks the internet for data. <code>await</code> means
          "wait right here until it arrives". <code>.json()</code> unwraps the data.</p>
          <pre><code>const res = await fetch("/user");
const data = await res.json();
console.log(data.name);   // Sam</code></pre>
          <p>(This lesson uses a pretend internet, so it always works!)</p>`,
        prompt: 'fetch "/user", unwrap it with .json(), and print the name (Sam).',
        starter: 'const res = await fetch("/user");\nconst data = await res.json();\nconsole.log( );',
        solution: 'const res = await fetch("/user");\nconst data = await res.json();\nconsole.log(data.name);',
        check: (l) => out(l).includes("Sam")
          ? { pass: true } : { pass: false, msg: "Print data.name after awaiting the json." },
      },
      {
        title: "2. Using the data",
        body: `<p>📦 Once the data arrives it's just an object (a backpack!). Open any
          pocket you want.</p>`,
        prompt: 'fetch "/user" and print the  age  (9).',
        starter: 'const res = await fetch("/user");\nconst data = await res.json();\nconsole.log( );',
        solution: 'const res = await fetch("/user");\nconst data = await res.json();\nconsole.log(data.age);',
        check: (l) => out(l).includes("9")
          ? { pass: true } : { pass: false, msg: "Print data.age." },
      },
      {
        title: "3. Fetching a list",
        body: `<p>📚 Data from the internet is often a list. Here "/todos" gives back a
          list of things to do.</p>`,
        prompt: 'fetch "/todos", unwrap it, and print how MANY there are (3).',
        starter: 'const res = await fetch("/todos");\nconst todos = await res.json();\nconsole.log( );',
        solution: 'const res = await fetch("/todos");\nconst todos = await res.json();\nconsole.log(todos.length);',
        check: (l) => out(l).includes("3")
          ? { pass: true } : { pass: false, msg: "Print todos.length." },
      },
      {
        title: "4. Show each thing",
        body: `<p>🔁 Got a list? Walk through it with <code>forEach</code> and print each one.</p>`,
        prompt: 'fetch "/todos" and print each todo on its own line.',
        starter: 'const res = await fetch("/todos");\nconst todos = await res.json();\ntodos.forEach( );',
        solution: 'const res = await fetch("/todos");\nconst todos = await res.json();\ntodos.forEach(t => console.log(t));',
        check: (l) => out(l).includes("Learn JS") && out(l).includes("Have fun")
          ? { pass: true } : { pass: false, msg: "forEach todo, console.log it." },
      },
      {
        title: "5. WebSockets — an open phone line",
        body: `<p>☎️ <code>fetch</code> is like sending a letter: ask once, get one reply.
          A <strong>WebSocket</strong> is like a phone call that stays open — both sides
          can talk anytime!</p>
          <pre><code>const ws = new WebSocket("wss://chat");
ws.onopen = () => console.log("connected!");</code></pre>
          <p><code>onopen</code> runs the moment the call connects.</p>`,
        prompt: 'Open a WebSocket and, when it connects, print:  connected',
        starter: 'const ws = new WebSocket("wss://chat");\nws.onopen = () => {\n\n};',
        solution: 'const ws = new WebSocket("wss://chat");\nws.onopen = () => {\n  console.log("connected");\n};',
        check: (l) => out(l).includes("connected")
          ? { pass: true } : { pass: false, msg: "Print 'connected' inside ws.onopen." },
      },
      {
        title: "6. Send a message, hear back",
        body: `<p>💬 Use <code>ws.send(...)</code> to talk, and <code>ws.onmessage</code> to
          listen. Our pretend server <strong>echoes</strong> whatever you send.</p>
          <pre><code>ws.onmessage = (e) => console.log(e.data);
ws.onopen = () => ws.send("hi");   // server says: echo: hi</code></pre>`,
        prompt: 'When connected, send "ping". Print whatever the server sends back (echo: ping).',
        starter: 'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => console.log(e.data);\nws.onopen = () => {\n\n};',
        solution: 'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => console.log(e.data);\nws.onopen = () => {\n  ws.send("ping");\n};',
        check: (l) => out(l).includes("echo: ping")
          ? { pass: true } : { pass: false, msg: 'Call ws.send("ping") when it opens.' },
      },
      {
        title: "7. A tiny chat 🎉",
        body: `<p>🗨️ Put it together: connect, send your name, and print the reply.
          That's the heart of every chat app!</p>`,
        prompt: 'Send "Lin" when connected, and print the reply (echo: Lin).',
        starter: 'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => {\n\n};\nws.onopen = () => {\n\n};',
        solution: 'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => {\n  console.log(e.data);\n};\nws.onopen = () => {\n  ws.send("Lin");\n};',
        check: (l) => out(l).includes("Lin")
          ? { pass: true } : { pass: false, msg: "Send 'Lin' on open, and print e.data on message." },
      },
    ],
  },

  // ================= PROJECT: CHAT APP ===================
  {
    name: "💬 Chat App",
    mode: "app",
    lessons: [
      {
        title: "Step 1 — Sign Up",
        body: `<p><strong>🎬 Here's what you'll build by the end:</strong></p>
          <div style="background:#f0f2f5;border-radius:12px;padding:12px;max-width:300px;margin:8px 0;font-family:sans-serif">
            <div style="background:#fff;border-radius:8px;padding:8px;min-height:90px">
              <div style="background:#e4e6eb;color:#000;border-radius:14px;padding:6px 11px;display:inline-block;margin:3px 0;font-size:13px">Hi there! 👋</div><br>
              <div style="background:#0084ff;color:#fff;border-radius:14px;padding:6px 11px;display:inline-block;margin:3px 0;font-size:13px;float:right;clear:both">Hey! I'm Lin 😄</div><br>
              <div style="background:#e4e6eb;color:#000;border-radius:14px;padding:6px 11px;display:inline-block;margin:3px 0;font-size:13px;clear:both">Cool! 😎</div>
            </div>
            <div style="display:flex;gap:5px;margin-top:6px">
              <div style="flex:1;background:#fff;border-radius:14px;padding:6px 11px;font-size:13px;color:#999">Say something...</div>
              <div style="background:#0084ff;color:#fff;border-radius:14px;padding:6px 14px;font-size:13px">Send</div>
            </div>
          </div>
          <p>You'll build this real chat — with a friend who talks back — one step at a
          time. <strong>You</strong> write the code; I'll just guide you. 💪</p>
          <hr>
          <p>👋 Every chat starts by asking <strong>who you are</strong>. We'll read a
          name from a box and show a welcome.</p>
          <p><strong>How to do it:</strong></p>
          <ol>
            <li>There's a box <code>#name</code> and a <code>#join</code> button.</li>
            <li>When Join is clicked, read the typed name with <code>name.value</code>.</li>
            <li>Show it in <code>#welcome</code> with <code>.textContent</code>.</li>
          </ol>`,
        prompt: 'When #join is clicked, set #welcome to:  Welcome, (the typed name)!',
        starter:
          '<input id="name" placeholder="your name">\n<button id="join">Join chat</button>\n<p id="welcome"></p>\n\n<script>\n  const join = document.getElementById("join");\n  const name = document.getElementById("name");\n  const welcome = document.getElementById("welcome");\n  join.addEventListener("click", () => {\n    // show: Welcome, <name>!\n  });\n<\/script>',
        solution:
          '<input id="name" placeholder="your name">\n<button id="join">Join chat</button>\n<p id="welcome"></p>\n\n<script>\n  const join = document.getElementById("join");\n  const name = document.getElementById("name");\n  const welcome = document.getElementById("welcome");\n  join.addEventListener("click", () => {\n    welcome.textContent = "Welcome, " + name.value + "!";\n  });\n<\/script>',
        check: (doc) => {
          const join = doc.getElementById("join");
          if (!join) return { pass: false, msg: "Need a #join button." };
          doc.getElementById("name").value = "Lin";
          join.click();
          const w = doc.getElementById("welcome");
          return w && w.textContent.includes("Welcome") && w.textContent.includes("Lin")
            ? { pass: true } : { pass: false, msg: 'After clicking, #welcome should say "Welcome, Lin!".' };
        },
      },
      {
        title: "Step 2 — The UI (what it looks like)",
        body: `<p>🎨 Now build the chat's body: a place for messages, a box to type, and a
          Send button.</p>
          <p><strong>How to do it:</strong> below the messages box, add an
          <code>&lt;input&gt;</code> with <code>id="msg"</code> and a
          <code>&lt;button&gt;</code> with <code>id="send"</code>.</p>`,
        prompt: 'Add an input with id="msg" and a button with id="send".',
        starter:
          '<div id="messages" style="border:1px solid #ccc;height:70px;padding:6px">messages appear here</div>\n\n<!-- add your input#msg and button#send below -->\n',
        solution:
          '<div id="messages" style="border:1px solid #ccc;height:70px;padding:6px">messages appear here</div>\n\n<input id="msg" placeholder="type a message">\n<button id="send">Send</button>\n',
        check: (doc) =>
          doc.getElementById("messages") &&
          doc.querySelector("input#msg") &&
          doc.querySelector("button#send")
            ? { pass: true } : { pass: false, msg: "Need #messages, an input#msg, and a button#send." },
      },
      {
        title: "Step 3 — WebSockets (talking to others)",
        mode: "async",
        body: `<p>☎️ A real chat sends your words to other people instantly. That's a
          <strong>WebSocket</strong> — an open phone line. (Here a pretend server echoes
          you back.)</p>
          <p><strong>How to do it:</strong></p>
          <ol>
            <li>Open the line: <code>new WebSocket(...)</code>.</li>
            <li>Listen for replies with <code>ws.onmessage</code>.</li>
            <li>When it opens, <code>ws.send("Hello everyone!")</code>.</li>
          </ol>`,
        prompt: 'Connect, send "Hello everyone!" when open, and print the reply.',
        starter:
          'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => console.log(e.data);\nws.onopen = () => {\n  // send "Hello everyone!"\n};',
        solution:
          'const ws = new WebSocket("wss://chat");\nws.onmessage = (e) => console.log(e.data);\nws.onopen = () => {\n  ws.send("Hello everyone!");\n};',
        check: (l) => out(l).includes("Hello everyone")
          ? { pass: true } : { pass: false, msg: 'Call ws.send("Hello everyone!") inside onopen.' },
      },
      {
        title: "Step 4 — Behavior (make it chat!)",
        body: `<p>⚡ Time to make Send actually work. When clicked, take what you typed and
          add it as a new line in the messages box.</p>
          <p><strong>How to do it</strong> (same trick as the to-do list!):</p>
          <ol>
            <li>Make a new line: <code>document.createElement("div")</code>.</li>
            <li>Put your text in it: <code>line.textContent = msg.value</code>.</li>
            <li>Add it: <code>messages.appendChild(line)</code>.</li>
          </ol>`,
        prompt: "Clicking #send should add your typed message as a new line in #messages.",
        starter:
          '<div id="messages"></div>\n<input id="msg" placeholder="type a message">\n<button id="send">Send</button>\n\n<script>\n  const send = document.getElementById("send");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  send.addEventListener("click", () => {\n    // make a <div> with msg.value and add it to messages\n  });\n<\/script>',
        solution:
          '<div id="messages"></div>\n<input id="msg" placeholder="type a message">\n<button id="send">Send</button>\n\n<script>\n  const send = document.getElementById("send");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  send.addEventListener("click", () => {\n    const line = document.createElement("div");\n    line.textContent = msg.value;\n    messages.appendChild(line);\n  });\n<\/script>',
        check: (doc) => {
          const send = doc.getElementById("send");
          const msg = doc.getElementById("msg");
          if (!send || !msg) return { pass: false, msg: "Need #msg and #send." };
          msg.value = "hi"; send.click();
          msg.value = "bye"; send.click();
          return doc.getElementById("messages") &&
            doc.getElementById("messages").children.length === 2
            ? { pass: true } : { pass: false, msg: "Each Send should add one new line to #messages." };
        },
      },
      {
        title: "Step 5 — Databases (remember the chat!) 🎉",
        body: `<p>💾 Refresh the page and the messages vanish! A <strong>database</strong>
          remembers them. The easiest one is the browser's <code>localStorage</code> — a
          tiny box that keeps things even after you close the page (it's how your login
          here is saved!).</p>
          <p><strong>How to do it:</strong> when #save is clicked, store the messages text:
          <code>localStorage.setItem("chatlog", messages.textContent)</code>. Later you'd
          load it back with <code>localStorage.getItem("chatlog")</code>.</p>`,
        prompt: 'When #save is clicked, save the messages into localStorage under the key "chatlog".',
        starter:
          '<div id="messages"></div>\n<input id="msg">\n<button id="send">Send</button>\n<button id="save">💾 Save</button>\n\n<script>\n  const send = document.getElementById("send");\n  const save = document.getElementById("save");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  send.addEventListener("click", () => {\n    const line = document.createElement("div");\n    line.textContent = msg.value;\n    messages.appendChild(line);\n  });\n  save.addEventListener("click", () => {\n    // save messages.textContent into localStorage as "chatlog"\n  });\n<\/script>',
        solution:
          '<div id="messages"></div>\n<input id="msg">\n<button id="send">Send</button>\n<button id="save">💾 Save</button>\n\n<script>\n  const send = document.getElementById("send");\n  const save = document.getElementById("save");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  send.addEventListener("click", () => {\n    const line = document.createElement("div");\n    line.textContent = msg.value;\n    messages.appendChild(line);\n  });\n  save.addEventListener("click", () => {\n    localStorage.setItem("chatlog", messages.textContent);\n  });\n<\/script>',
        check: (doc, code, win) => {
          const send = doc.getElementById("send");
          const save = doc.getElementById("save");
          const msg = doc.getElementById("msg");
          if (!send || !save || !msg) return { pass: false, msg: "Need #msg, #send, and #save." };
          msg.value = "remember me"; send.click();
          save.click();
          let stored = "";
          try { stored = win.localStorage.getItem("chatlog") || ""; } catch (e) {}
          return stored.includes("remember me")
            ? { pass: true } : { pass: false, msg: 'Save messages.textContent to localStorage key "chatlog".' };
        },
      },
      {
        title: "Step 6 — A friend who talks back 🤖🎉",
        body: `<p>🥳 The finale! Right now you're chatting alone. Let's add a
          <strong>pretend friend</strong> who replies every time you send a message — and
          make it all look like a real chat app with colors and bubbles.</p>
          <p>The styling is already done for you (look at the <code>&lt;style&gt;</code> at
          the top). Your job is the fun part: <strong>make the friend reply</strong>.</p>
          <p><strong>How to do it:</strong> after your own bubble is added, pick a line from
          the <code>replies</code> list and add it as a <code>"friend"</code> bubble using
          <code>addBubble(theReply, "friend")</code>.</p>`,
        prompt: "After your message is added, make the friend reply with a line from `replies`.",
        starter:
          '<style>\n  body{font-family:sans-serif;margin:0;background:#f0f2f5}\n  #messages{height:200px;overflow-y:auto;padding:10px;background:#fff}\n  .me{background:#0084ff;color:#fff;padding:8px 12px;border-radius:16px;margin:4px 0;max-width:70%;margin-left:auto;width:fit-content}\n  .friend{background:#e4e6eb;color:#000;padding:8px 12px;border-radius:16px;margin:4px 0;max-width:70%;width:fit-content}\n  .bar{display:flex;gap:6px;padding:8px;background:#fff}\n  .bar input{flex:1;padding:8px;border-radius:16px;border:1px solid #ccc}\n  .bar button{border:none;background:#0084ff;color:#fff;padding:8px 16px;border-radius:16px;cursor:pointer}\n</style>\n<div id="messages"></div>\n<div class="bar">\n  <input id="msg" placeholder="Say something...">\n  <button id="send">Send</button>\n</div>\n\n<script>\n  const replies = ["Hi there! 👋", "Cool! 😎", "Haha 😄", "Tell me more!", "Nice one!"];\n  const send = document.getElementById("send");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  function addBubble(text, who) {\n    const b = document.createElement("div");\n    b.className = who;\n    b.textContent = text;\n    messages.appendChild(b);\n  }\n  send.addEventListener("click", () => {\n    addBubble(msg.value, "me");\n    // YOUR TURN: make the friend reply with a line from `replies`\n  });\n<\/script>',
        solution:
          '<style>\n  body{font-family:sans-serif;margin:0;background:#f0f2f5}\n  #messages{height:200px;overflow-y:auto;padding:10px;background:#fff}\n  .me{background:#0084ff;color:#fff;padding:8px 12px;border-radius:16px;margin:4px 0;max-width:70%;margin-left:auto;width:fit-content}\n  .friend{background:#e4e6eb;color:#000;padding:8px 12px;border-radius:16px;margin:4px 0;max-width:70%;width:fit-content}\n  .bar{display:flex;gap:6px;padding:8px;background:#fff}\n  .bar input{flex:1;padding:8px;border-radius:16px;border:1px solid #ccc}\n  .bar button{border:none;background:#0084ff;color:#fff;padding:8px 16px;border-radius:16px;cursor:pointer}\n</style>\n<div id="messages"></div>\n<div class="bar">\n  <input id="msg" placeholder="Say something...">\n  <button id="send">Send</button>\n</div>\n\n<script>\n  const replies = ["Hi there! 👋", "Cool! 😎", "Haha 😄", "Tell me more!", "Nice one!"];\n  const send = document.getElementById("send");\n  const msg = document.getElementById("msg");\n  const messages = document.getElementById("messages");\n  function addBubble(text, who) {\n    const b = document.createElement("div");\n    b.className = who;\n    b.textContent = text;\n    messages.appendChild(b);\n  }\n  send.addEventListener("click", () => {\n    addBubble(msg.value, "me");\n    const reply = replies[messages.children.length % replies.length];\n    addBubble(reply, "friend");\n  });\n<\/script>',
        check: (doc) => {
          const send = doc.getElementById("send");
          const msg = doc.getElementById("msg");
          if (!send || !msg) return { pass: false, msg: "Need #msg and #send." };
          msg.value = "hello"; send.click();
          const friend = doc.querySelector("#messages .friend");
          return doc.querySelectorAll("#messages > div").length >= 2 &&
            friend && friend.textContent.trim().length > 0
            ? { pass: true } : { pass: false, msg: "After you send, a friend bubble (a reply) should appear." };
        },
      },
    ],
  },

  // ================ PROJECT: TO-DO LIST ==================
  {
    name: "✅ To-Do List",
    mode: "app",
    lessons: [
      {
        title: "Step 1 — The UI",
        body: `<p><strong>🎬 Here's the finished to-do list:</strong></p>
          <div style="background:#fff;color:#222;border-radius:10px;padding:12px;max-width:280px;margin:8px 0;font-family:sans-serif;border:1px solid #ddd">
            <div style="display:flex;gap:5px;margin-bottom:8px">
              <div style="flex:1;border:1px solid #ccc;border-radius:6px;padding:6px;font-size:13px;color:#999">new to-do</div>
              <div style="background:#4caf50;color:#fff;border-radius:6px;padding:6px 12px;font-size:13px">Add</div>
            </div>
            <div style="font-size:14px">• Walk the dog<br>• Do homework<br>• Feed the cat</div>
          </div>
          <p><strong>You'll</strong> build it — I'm just the guide. 💪</p><hr>
          <p>📝 A to-do list needs a box to type a task, an Add button, and a list to
          hold them.</p>
          <p><strong>How to do it:</strong> add an <code>&lt;input id="task"&gt;</code>, a
          <code>&lt;button id="add"&gt;</code>, and a <code>&lt;ul id="list"&gt;</code>.</p>`,
        prompt: 'Make an input#task, a button#add, and a ul#list.',
        starter: '<!-- build the to-do UI here -->\n',
        solution: '<input id="task" placeholder="new to-do">\n<button id="add">Add</button>\n<ul id="list"></ul>',
        check: (doc) =>
          doc.querySelector("input#task") && doc.querySelector("button#add") &&
          doc.querySelector("ul#list")
            ? { pass: true } : { pass: false, msg: "Need input#task, button#add, and ul#list." },
      },
      {
        title: "Step 2 — Add tasks",
        body: `<p>➕ Wire the Add button so it puts your task into the list.</p>
          <p><strong>How to do it:</strong> on click — make an
          <code>&lt;li&gt;</code>, set its text to <code>task.value</code>, and
          <code>list.appendChild(li)</code>.</p>`,
        prompt: "Clicking #add should add the typed task as a new <li> in #list.",
        starter:
          '<input id="task" placeholder="new to-do">\n<button id="add">Add</button>\n<ul id="list"></ul>\n\n<script>\n  const add = document.getElementById("add");\n  const task = document.getElementById("task");\n  const list = document.getElementById("list");\n  add.addEventListener("click", () => {\n    // make an <li> with task.value and add it to list\n  });\n<\/script>',
        solution:
          '<input id="task" placeholder="new to-do">\n<button id="add">Add</button>\n<ul id="list"></ul>\n\n<script>\n  const add = document.getElementById("add");\n  const task = document.getElementById("task");\n  const list = document.getElementById("list");\n  add.addEventListener("click", () => {\n    const li = document.createElement("li");\n    li.textContent = task.value;\n    list.appendChild(li);\n  });\n<\/script>',
        check: (doc) => {
          const add = doc.getElementById("add");
          const task = doc.getElementById("task");
          if (!add || !task) return { pass: false, msg: "Need #task and #add." };
          task.value = "Walk dog"; add.click();
          task.value = "Do homework"; add.click();
          return doc.querySelectorAll("#list li").length === 2
            ? { pass: true } : { pass: false, msg: "Each Add should append one <li>." };
        },
      },
      {
        title: "Step 3 — Clear all 🎉",
        body: `<p>🧹 Add a Clear button that empties the whole list at once.</p>
          <p><strong>How to do it:</strong> the quickest way to empty a list is
          <code>list.innerHTML = ""</code> — it removes everything inside.</p>`,
        prompt: "Clicking #clear should empty #list completely.",
        starter:
          '<input id="task">\n<button id="add">Add</button>\n<button id="clear">Clear all</button>\n<ul id="list"></ul>\n\n<script>\n  const list = document.getElementById("list");\n  const task = document.getElementById("task");\n  document.getElementById("add").addEventListener("click", () => {\n    const li = document.createElement("li");\n    li.textContent = task.value;\n    list.appendChild(li);\n  });\n  document.getElementById("clear").addEventListener("click", () => {\n    // empty the list\n  });\n<\/script>',
        solution:
          '<input id="task">\n<button id="add">Add</button>\n<button id="clear">Clear all</button>\n<ul id="list"></ul>\n\n<script>\n  const list = document.getElementById("list");\n  const task = document.getElementById("task");\n  document.getElementById("add").addEventListener("click", () => {\n    const li = document.createElement("li");\n    li.textContent = task.value;\n    list.appendChild(li);\n  });\n  document.getElementById("clear").addEventListener("click", () => {\n    list.innerHTML = "";\n  });\n<\/script>',
        check: (doc) => {
          const add = doc.getElementById("add");
          const clear = doc.getElementById("clear");
          const task = doc.getElementById("task");
          if (!add || !clear || !task) return { pass: false, msg: "Need #add, #clear, #task." };
          task.value = "one"; add.click();
          task.value = "two"; add.click();
          clear.click();
          return doc.querySelectorAll("#list li").length === 0
            ? { pass: true } : { pass: false, msg: "Clear should empty the list (0 items)." };
        },
      },
    ],
  },

  // ============= PROJECT: GUESSING GAME ==================
  {
    name: "🎯 Guessing Game",
    mode: "app",
    lessons: [
      {
        title: "Step 1 — The UI",
        body: `<p><strong>🎬 Here's the finished game:</strong></p>
          <div style="background:#fff;color:#222;border-radius:10px;padding:14px;max-width:260px;margin:8px 0;font-family:sans-serif;border:1px solid #ddd;text-align:center">
            <div style="display:flex;gap:5px;justify-content:center">
              <div style="border:1px solid #ccc;border-radius:6px;padding:6px 10px;font-size:13px;color:#999">5</div>
              <div style="background:#673ab7;color:#fff;border-radius:6px;padding:6px 12px;font-size:13px">Guess</div>
            </div>
            <div style="margin-top:10px;font-size:15px;font-weight:bold;color:#673ab7">Too low! 👇</div>
            <div style="margin-top:4px;font-size:12px;color:#777">Tries: 3</div>
          </div>
          <p><strong>You'll</strong> build it — I'm just the guide. 💪</p><hr>
          <p>🎲 A number-guessing game: type a guess, press a button, get a hint.</p>
          <p><strong>How to do it:</strong> add an
          <code>&lt;input id="guess"&gt;</code>, a <code>&lt;button id="go"&gt;</code>,
          and a <code>&lt;p id="hint"&gt;</code> for the message.</p>`,
        prompt: 'Make an input#guess, a button#go, and a p#hint.',
        starter: '<!-- build the game UI here -->\n',
        solution: '<input id="guess" type="number" placeholder="1-10">\n<button id="go">Guess</button>\n<p id="hint"></p>',
        check: (doc) =>
          doc.querySelector("input#guess") && doc.querySelector("button#go") &&
          doc.querySelector("#hint")
            ? { pass: true } : { pass: false, msg: "Need input#guess, button#go, and #hint." },
      },
      {
        title: "Step 2 — Check the guess",
        body: `<p>🤔 The secret number is <strong>7</strong>. Compare the guess and give a
          hint.</p>
          <p><strong>How to do it:</strong> read the number with
          <code>Number(guess.value)</code>, then:</p>
          <ol>
            <li>smaller than 7 → "too low"</li>
            <li>bigger than 7 → "too high"</li>
            <li>exactly 7 → "correct!"</li>
          </ol>`,
        prompt: 'Wire #go: show "too low", "too high", or "correct!" in #hint (secret is 7).',
        starter:
          '<input id="guess" type="number">\n<button id="go">Guess</button>\n<p id="hint"></p>\n\n<script>\n  const secret = 7;\n  const guess = document.getElementById("guess");\n  const hint = document.getElementById("hint");\n  document.getElementById("go").addEventListener("click", () => {\n    const n = Number(guess.value);\n    // compare n with secret and set hint.textContent\n  });\n<\/script>',
        solution:
          '<input id="guess" type="number">\n<button id="go">Guess</button>\n<p id="hint"></p>\n\n<script>\n  const secret = 7;\n  const guess = document.getElementById("guess");\n  const hint = document.getElementById("hint");\n  document.getElementById("go").addEventListener("click", () => {\n    const n = Number(guess.value);\n    if (n < secret) hint.textContent = "too low";\n    else if (n > secret) hint.textContent = "too high";\n    else hint.textContent = "correct!";\n  });\n<\/script>',
        check: (doc) => {
          const go = doc.getElementById("go");
          const guess = doc.getElementById("guess");
          const hint = doc.getElementById("hint");
          if (!go || !guess || !hint) return { pass: false, msg: "Need #guess, #go, #hint." };
          guess.value = "3"; go.click();
          const low = hint.textContent.toLowerCase().includes("low");
          guess.value = "7"; go.click();
          const correct = hint.textContent.toLowerCase().includes("correct");
          return low && correct
            ? { pass: true } : { pass: false, msg: "3 should say too low, 7 should say correct!." };
        },
      },
      {
        title: "Step 3 — Count the tries 🎉",
        body: `<p>🔢 Let's count how many guesses it takes. Keep a number that goes up by 1
          each guess and show it.</p>
          <p><strong>How to do it:</strong> there's a <code>let tries = 0</code> and a
          <code>#tries</code> spot. Each click: <code>tries = tries + 1</code> then show it
          in <code>#tries</code>.</p>`,
        prompt: "Make #tries count up by 1 every time #go is clicked.",
        starter:
          '<input id="guess" type="number">\n<button id="go">Guess</button>\n<p id="hint"></p>\n<p>Tries: <span id="tries">0</span></p>\n\n<script>\n  const secret = 7;\n  let tries = 0;\n  const guess = document.getElementById("guess");\n  const hint = document.getElementById("hint");\n  const triesEl = document.getElementById("tries");\n  document.getElementById("go").addEventListener("click", () => {\n    const n = Number(guess.value);\n    if (n < secret) hint.textContent = "too low";\n    else if (n > secret) hint.textContent = "too high";\n    else hint.textContent = "correct!";\n    // add 1 to tries and show it in triesEl\n  });\n<\/script>',
        solution:
          '<input id="guess" type="number">\n<button id="go">Guess</button>\n<p id="hint"></p>\n<p>Tries: <span id="tries">0</span></p>\n\n<script>\n  const secret = 7;\n  let tries = 0;\n  const guess = document.getElementById("guess");\n  const hint = document.getElementById("hint");\n  const triesEl = document.getElementById("tries");\n  document.getElementById("go").addEventListener("click", () => {\n    const n = Number(guess.value);\n    if (n < secret) hint.textContent = "too low";\n    else if (n > secret) hint.textContent = "too high";\n    else hint.textContent = "correct!";\n    tries = tries + 1;\n    triesEl.textContent = tries;\n  });\n<\/script>',
        check: (doc) => {
          const go = doc.getElementById("go");
          const guess = doc.getElementById("guess");
          if (!go || !guess) return { pass: false, msg: "Need #guess and #go." };
          guess.value = "3"; go.click();
          guess.value = "5"; go.click();
          return doc.getElementById("tries") &&
            doc.getElementById("tries").textContent.trim() === "2"
            ? { pass: true } : { pass: false, msg: "After 2 guesses, #tries should show 2." };
        },
      },
    ],
  },
];


// ============================================================
//  App logic
// ============================================================

let courseIndex = 0;
let lessonIndex = 0;
const done = new Set(); // keys like "0:3"

const $ = (id) => document.getElementById(id);
const key = (c, l) => `${c}:${l}`;

// Courses grouped into sections for the sidebar. Numbers are indexes
// into the `courses` array above.
const courseGroups = [
  { label: "JavaScript Path", indexes: [0, 1, 2, 3] },
  { label: "Web & Apps", indexes: [5, 6, 10] },
  { label: "Networking", indexes: [11] },
  { label: "Other Languages", indexes: [7, 8, 9] },
  { label: "🚀 Projects", indexes: [4, 13] },
];

// How many lessons in course `c` are done?
function courseProgress(c) {
  let n = 0;
  for (const k of done) if (k.startsWith(c + ":")) n++;
  return n;
}

function renderCourseTabs() {
  const wrap = $("courseTabs");
  wrap.innerHTML = "";

  courseGroups.forEach((group) => {
    const header = document.createElement("div");
    header.className = "group-header";
    header.textContent = group.label;
    wrap.appendChild(header);

    group.indexes.forEach((c) => {
      const course = courses[c];
      const total = course.lessons.length;
      const doneCount = courseProgress(c);

      const btn = document.createElement("button");
      btn.className = "course-btn";
      if (c === courseIndex) btn.classList.add("active");
      if (doneCount === total) btn.classList.add("complete");

      const name = document.createElement("span");
      name.textContent = course.name;
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = doneCount === total ? "✓" : `${doneCount}/${total}`;

      btn.appendChild(name);
      btn.appendChild(badge);
      btn.addEventListener("click", () => {
        courseIndex = c;
        loadLesson(0);
      });
      wrap.appendChild(btn);
    });
  });
}

function renderLessonList() {
  const list = $("lessonList");
  list.innerHTML = "";
  courses[courseIndex].lessons.forEach((lesson, i) => {
    const li = document.createElement("li");
    li.textContent = lesson.title;
    if (i === lessonIndex) li.classList.add("active");
    if (done.has(key(courseIndex, i))) li.classList.add("done");
    li.addEventListener("click", () => loadLesson(i));
    list.appendChild(li);
  });
  const total = courseGroups.reduce(
    (s, g) => s + g.indexes.reduce((a, c) => a + courses[c].lessons.length, 0), 0);
  $("progress").textContent = `Completed ${done.size} / ${total} lessons`;
}

// Show/hide the output area, preview iframe, and quiz box depending on
// what kind of course this is.
function setupModeUI(mode) {
  const isJs = mode === "js" || mode === "async";
  const isPreview = mode === "preview" || mode === "css" || mode === "app";
  const isQuiz = mode === "quiz";
  $("outputLabel").style.display = isJs ? "" : "none";
  $("output").style.display = isJs ? "" : "none";
  $("previewLabel").style.display = isPreview ? "" : "none";
  $("preview").style.display = isPreview ? "" : "none";
  $("quizArea").style.display = isQuiz ? "" : "none";
  // In quiz mode the codeboard just shows code to read — lock it.
  $("codeboard").readOnly = isQuiz;
}

function loadLesson(i) {
  lessonIndex = i;
  const lesson = courses[courseIndex].lessons[i];
  $("lessonTitle").textContent = lesson.title;
  $("lessonBody").innerHTML = lesson.body;
  $("exercisePrompt").textContent = lesson.prompt;
  $("codeboard").value = lesson.starter;
  $("output").textContent = "";
  $("quizAnswer").value = "";
  $("preview").onload = null;   // drop any leftover checker before clearing
  $("preview").srcdoc = "";
  $("result").textContent = "";
  $("result").className = "";
  setupModeUI(lesson.mode || courses[courseIndex].mode || "js");
  renderCourseTabs();
  renderLessonList();
}

// --- JavaScript runner: run code, capture console.log ---
function runJs(code) {
  const logs = [];
  const fakeConsole = {
    log: (...args) => logs.push(args.map((a) => String(a)).join(" ")),
  };
  try {
    new Function("console", code)(fakeConsole);
  } catch (err) {
    $("output").textContent = "⚠️ Error: " + err.message;
    $("result").textContent = "";
    $("result").className = "";
    return null;
  }
  $("output").textContent = logs.length ? logs.join("\n") : "(nothing printed)";
  return logs;
}

// --- A pretend internet for the Fetch & Sockets lessons ---
// Real fetch/WebSocket need a network we can't safely use here, so we hand
// the code a friendly fake that returns made-up data.
function mockFetch(url) {
  const u = String(url);
  let data;
  if (u.includes("todos")) data = ["Learn JS", "Build an app", "Have fun"];
  else data = { name: "Sam", age: 9 };
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data)),
  });
}

class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.onopen = null;
    this.onmessage = null;
    this.onclose = null;
    // "connect" on the next tick, after the learner sets onopen
    queueMicrotask(() => {
      if (typeof this.onopen === "function") this.onopen({});
    });
  }
  send(msg) {
    // the fake server just echoes whatever you send back to you
    queueMicrotask(() => {
      if (typeof this.onmessage === "function")
        this.onmessage({ data: "echo: " + msg });
    });
  }
  addEventListener(type, fn) {
    if (type === "open") this.onopen = fn;
    if (type === "message") this.onmessage = fn;
    if (type === "close") this.onclose = fn;
  }
  close() {
    if (typeof this.onclose === "function") this.onclose({});
  }
}

// Runs async code (await/fetch/WebSocket), waits for it to settle, returns logs
async function runAsync(code) {
  const logs = [];
  const fakeConsole = {
    log: (...args) => logs.push(args.map((a) => String(a)).join(" ")),
  };
  try {
    const fn = new Function(
      "console", "fetch", "WebSocket",
      "return (async () => {\n" + code + "\n})();"
    );
    await fn(fakeConsole, mockFetch, MockWebSocket);
  } catch (err) {
    $("output").textContent = "⚠️ Error: " + err.message;
    $("result").textContent = "";
    $("result").className = "";
    return null;
  }
  // give socket callbacks a moment to fire before we check
  await new Promise((r) => setTimeout(r, 40));
  $("output").textContent = logs.length ? logs.join("\n") : "(nothing printed)";
  return logs;
}

// Quiz answers: ignore case-less differences in spacing/newlines
function normalize(s) {
  return String(s).trim().replace(/\s+/g, " ");
}

function showResult(result) {
  const el = $("result");
  if (result.pass) {
    el.textContent = "✅ Correct! Nice work.";
    el.className = "pass";
    done.add(key(courseIndex, lessonIndex));
    saveProgress();
    renderLessonList();
  } else {
    el.textContent = "❌ Not yet — " + result.msg;
    el.className = "fail";
  }
}

let renderCount = 0; // forces the iframe to reload even on identical code

function checkExercise() {
  const course = courses[courseIndex];
  const lesson = course.lessons[lessonIndex];
  const mode = lesson.mode || course.mode || "js";
  const code = $("codeboard").value;

  if (mode === "js") {
    const logs = runJs(code);
    if (logs === null) return;
    showResult(lesson.check(logs));

  } else if (mode === "async") {
    // fetch / WebSocket lessons — run, wait for it to finish, then check
    runAsync(code).then((logs) => {
      if (logs === null) return;
      showResult(lesson.check(logs));
    });

  } else if (mode === "quiz") {
    showResult(lesson.check(normalize($("quizAnswer").value), code));

  } else {
    // preview / css / app — render in the iframe, then check once it loads
    const html =
      mode === "css"
        ? `${lesson.template || ""}<style>${code}</style>`
        : code;
    const iframe = $("preview");
    iframe.onload = () => {
      iframe.onload = null;   // run this check once, never let it re-fire
      try {
        const doc = iframe.contentDocument;
        showResult(lesson.check(doc, code, iframe.contentWindow));
      } catch (err) {
        $("result").textContent = "⚠️ " + err.message;
        $("result").className = "fail";
      }
    };
    iframe.srcdoc = html + `<!--${++renderCount}-->`;
  }
}

$("runBtn").addEventListener("click", checkExercise);
$("resetBtn").addEventListener("click", () => loadLesson(lessonIndex));
$("solutionBtn").addEventListener("click", () => {
  const lesson = courses[courseIndex].lessons[lessonIndex];
  const mode = lesson.mode || courses[courseIndex].mode || "js";
  if (mode === "quiz") {
    $("quizAnswer").value = lesson.solution;
  } else {
    $("codeboard").value = lesson.solution;
  }
});
$("nextBtn").addEventListener("click", () => {
  const lessons = courses[courseIndex].lessons;
  if (lessonIndex < lessons.length - 1) {
    loadLesson(lessonIndex + 1);
  } else if (courseIndex < courses.length - 1) {
    courseIndex++;          // roll over into the next course
    loadLesson(0);
  }
});
$("prevBtn").addEventListener("click", () => {
  if (lessonIndex > 0) {
    loadLesson(lessonIndex - 1);
  } else if (courseIndex > 0) {
    courseIndex--;
    loadLesson(courses[courseIndex].lessons.length - 1);
  }
});

// ============================================================
//  Login + saved progress  (stored in the browser's localStorage —
//  a tiny built-in database that survives closing the browser)
// ============================================================

const USERS_KEY = "jsLearner_users";
const CURRENT_KEY = "jsLearner_currentUser";
let currentUser = null;

// Read/write the whole "users table" as JSON
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function signup(name, pass) {
  const users = getUsers();
  if (!name || !pass) return "Enter a username and password.";
  if (users[name]) return "That username is taken — try logging in.";
  users[name] = { password: pass, progress: [] };
  saveUsers(users);
  return null; // null = success
}

function login(name, pass) {
  const users = getUsers();
  if (!users[name]) return "No such user — hit Sign Up first.";
  if (users[name].password !== pass) return "Wrong password.";
  return null; // success
}

// Save the current user's completed-lesson set back into the database
function saveProgress() {
  if (!currentUser) return;
  const users = getUsers();
  users[currentUser].progress = [...done];
  saveUsers(users);
}

// Called after a successful login/signup: load their progress + show app
function startSession(name) {
  currentUser = name;
  localStorage.setItem(CURRENT_KEY, name);
  done.clear();
  const users = getUsers();
  (users[name].progress || []).forEach((k) => done.add(k));
  $("userLabel").textContent = "👤 " + name;
  $("loginScreen").style.display = "none";
  $("app").style.display = "flex";
  courseIndex = 0;
  loadLesson(0);
  resetBuilder();      // each login starts with a clean playground
  showLearnMode();
}

function logout() {
  saveProgress();
  currentUser = null;
  localStorage.removeItem(CURRENT_KEY);
  $("password").value = "";
  $("app").style.display = "none";
  $("loginScreen").style.display = "flex";
}

function attemptLogin() {
  const name = $("username").value.trim();
  const pass = $("password").value;
  const err = login(name, pass);
  if (err) { $("loginMsg").textContent = err; return; }
  startSession(name);
}

function attemptSignup() {
  const name = $("username").value.trim();
  const pass = $("password").value;
  const err = signup(name, pass);
  if (err) { $("loginMsg").textContent = err; return; }
  startSession(name); // log them straight in
}

$("loginBtn").addEventListener("click", attemptLogin);
$("signupBtn").addEventListener("click", attemptSignup);
$("logoutBtn").addEventListener("click", logout);
$("password").addEventListener("keydown", (e) => {
  if (e.key === "Enter") attemptLogin();
});

// ============================================================
//  Build mode — your own HTML/CSS/JS playground
//  Projects are saved per user, right alongside their progress.
// ============================================================

const STARTER = {
  html: '<h1>My Project</h1>\n<button id="btn">Click me</button>\n<p id="out"></p>',
  css: 'body { font-family: sans-serif; padding: 20px; }\nh1 { color: purple; }',
  js: 'document.getElementById("btn").addEventListener("click", () => {\n  document.getElementById("out").textContent = "Hello! 👋";\n});',
};

let project = { ...STARTER };
let currentEd = "html";
let currentProjName = "";

function getProjects() {
  const users = getUsers();
  return (users[currentUser] && users[currentUser].projects) || {};
}
function saveProjects(projects) {
  const users = getUsers();
  if (!users[currentUser]) return;
  users[currentUser].projects = projects;
  saveUsers(users);
}

// Load an editor tab's text WITHOUT saving the current one (used on reset)
function showEditor(ed) {
  currentEd = ed;
  $("builderEditor").value = project[ed];
  document.querySelectorAll(".ed-tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.ed === ed));
}

// Switch tabs: stash what's in the editor, then show the new tab
function selectEditor(ed) {
  project[currentEd] = $("builderEditor").value;
  showEditor(ed);
}

// Combine the three parts into one page and render it
function runProject() {
  project[currentEd] = $("builderEditor").value;
  const { html, css, js } = project;
  $("builderPreview").srcdoc =
    `${html}<style>${css}<\/style><script>${js}<\/script><!--${++renderCount}-->`;
}

function flashSave(msg, isError) {
  const el = $("saveMsg");
  el.textContent = msg;
  el.style.color = isError ? "#f38ba8" : "#a6e3a1";
}

function saveProject() {
  project[currentEd] = $("builderEditor").value;
  const name = $("projName").value.trim();
  if (!name) { flashSave("Name your project first.", true); return; }
  const projects = getProjects();
  projects[name] = { ...project };
  saveProjects(projects);
  currentProjName = name;
  flashSave("Saved ✓");
  renderProjectList();
}

function loadProject(name) {
  const projects = getProjects();
  if (!projects[name]) return;
  project = { ...projects[name] };
  currentProjName = name;
  $("projName").value = name;
  showEditor("html");
  runProject();
  renderProjectList();
}

function deleteProject(name) {
  const projects = getProjects();
  delete projects[name];
  saveProjects(projects);
  if (currentProjName === name) resetBuilder();
  renderProjectList();
}

function resetBuilder() {
  project = { ...STARTER };
  currentProjName = "";
  currentEd = "html";
  $("projName").value = "";
  $("saveMsg").textContent = "";
  showEditor("html");
}

function renderProjectList() {
  const list = $("projListSidebar");
  list.innerHTML = "";
  const names = Object.keys(getProjects());
  if (names.length === 0) {
    const li = document.createElement("li");
    li.textContent = "(none yet)";
    li.style.cursor = "default";
    list.appendChild(li);
    return;
  }
  names.forEach((name) => {
    const li = document.createElement("li");
    if (name === currentProjName) li.classList.add("active");
    const label = document.createElement("span");
    label.textContent = name;
    label.addEventListener("click", () => loadProject(name));
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "🗑";
    del.title = "Delete";
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(name);
    });
    li.appendChild(label);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function hideAllModes() {
  ["learnTab", "tutorialTab", "buildTab"].forEach((id) => $(id).classList.remove("active"));
  ["learnSidebar", "buildSidebar", "tutSidebar"].forEach((id) => $(id).style.display = "none");
  ["learnView", "builderView", "tutorialView"].forEach((id) => $(id).style.display = "none");
}

function showLearnMode() {
  hideAllModes();
  $("learnTab").classList.add("active");
  $("learnSidebar").style.display = "";
  $("learnView").style.display = "";
}

function showBuildMode() {
  hideAllModes();
  $("buildTab").classList.add("active");
  $("buildSidebar").style.display = "";
  $("builderView").style.display = "";
  showEditor(currentEd);
  renderProjectList();
  runProject();
}

// ============================================================
//  Tutorial mode — a MakeCode-style, build-one-real-chat-app
//  walkthrough. The code grows step by step in ONE editor, with a
//  live preview. By the end you have a styled chat with a friend
//  that actually reacts to your words.
// ============================================================

const CHAT_STYLE =
`<style>
  body { font-family: sans-serif; margin: 0; background: #f0f2f5; }
  #chat { max-width: 380px; margin: 10px auto; }
  .warning { background: #fff3cd; color: #856404; font-size: 12px; padding: 7px 10px; border-radius: 8px; margin-bottom: 8px; text-align: center; font-weight: bold; }
  #messages { height: 230px; overflow-y: auto; padding: 12px; background: #fff; border-radius: 10px; }
  .me, .friend { padding: 8px 13px; border-radius: 16px; margin: 6px 0; max-width: 75%; width: fit-content; }
  .me { background: #0084ff; color: #fff; margin-left: auto; }
  .friend { background: #e4e6eb; color: #111; }
  .bar { display: flex; gap: 6px; margin-top: 8px; }
  .bar input { flex: 1; padding: 10px; border-radius: 18px; border: 1px solid #ccc; }
  .bar button { border: none; background: #0084ff; color: #fff; padding: 10px 18px; border-radius: 18px; cursor: pointer; }
</style>`;

const CHAT_STRUCTURE =
`<div id="chat">
  <div class="warning">⚠️ Warning: this is a bot, not a real person!</div>
  <div id="messages"></div>
  <div class="bar">
    <input id="msg" placeholder="Type a message...">
    <button id="send">Send</button>
  </div>
</div>`;

const CHAT_SEND_SCRIPT =
`<script>
  const messages = document.getElementById("messages");
  const msg = document.getElementById("msg");

  function addBubble(text, who) {
    const bubble = document.createElement("div");
    bubble.className = who;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  document.getElementById("send").addEventListener("click", function () {
    if (msg.value === "") return;
    addBubble(msg.value, "me");
    msg.value = "";
  });
<\/script>`;

const CHAT_FULL_SCRIPT =
`<script>
  const messages = document.getElementById("messages");
  const msg = document.getElementById("msg");

  function addBubble(text, who) {
    const bubble = document.createElement("div");
    bubble.className = who;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  // The friend reads your words and picks a reply that fits
  function friendReply(yourWords) {
    const text = yourWords.toLowerCase();
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) return "Hey there! 👋";
    if (text.includes("how are you")) return "I'm great, thanks! 😄 How are you?";
    if (text.includes("name")) return "I'm Robo, your chat buddy! 🤖";
    if (text.includes("quiz")) return "Sure! 🧠 Quick quiz: what is 6 + 7?";
    if (text.includes("13")) return "Yes! 6 + 7 = 13. You're a genius! 🎉";
    if (text.includes("joke")) return "Why was the computer cold? It left its Windows open! 😂";
    if (text.includes("knock")) return "Who's there? 😄";
    if (text.includes("poop") || text.includes("fart") || text.includes("butt") || text.includes("silly"))
      return "Hahaha! 😆 You're so silly, I love it!";
    if (text.includes("pizza") || text.includes("food")) return "Yum, I LOVE pizza! 🍕";
    if (text.includes("game") || text.includes("play")) return "Ooh, games! 🎮 What's your favorite?";
    if (text.includes("love")) return "Aww, that's so sweet! 💖";
    if (text.includes("idiot") || text.includes("dumb") || text.includes("stupid"))
      return "Hey, don't say that! 🌟 You're learning to CODE — that's awesome and you're doing great!";
    if (text.includes("sad")) return "Oh no, I hope you feel better soon. 🤗";
    if (text.includes("happy")) return "Yay! Happiness is the best! 😁";
    if (text.includes("thank")) return "You're welcome! 😊";
    if (text.includes("bye")) return "Bye! Talk soon! 👋";
    if (text.includes("?")) return "Hmm, good question! 🤔";
    // For anything else, pick a random reply so I never repeat myself
    const replies = [
      "Oh really? Tell me more! 😄",
      "That's interesting! 🤔",
      "Haha, nice one! 😎",
      "Cool! What else is up? 🙌",
      "Ooh I see! Keep going! 👀",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  document.getElementById("send").addEventListener("click", function () {
    if (msg.value === "") return;
    const yourWords = msg.value;
    addBubble(yourWords, "me");
    msg.value = "";
    addBubble(friendReply(yourWords), "friend");
  });
<\/script>`;

const chatTutorial = [
  {
    title: "Step 1 — The bones (HTML)",
    instruction:
      `Every app starts with its <b>bones</b> — the HTML. A chat needs three things: a
       box to show <b>messages</b>, a box to <b>type</b> in, and a <b>Send</b> button.
       <br><br>Click <b>➕ Put this code in my editor</b>, then hit <b>▶ Run it!</b>.
       It'll look plain and boring — that's okay, we make it pretty next! 🎨`,
    code:
`<div id="chat">
  <div class="warning">⚠️ Warning: this is a bot, not a real person!</div>
  <div id="messages">
    (your messages will appear here)
  </div>
  <input id="msg" placeholder="Type a message...">
  <button id="send">Send</button>
</div>`,
  },
  {
    title: "Step 2 — Make it pretty (CSS)",
    instruction:
      `Now the fun part — making it look like a <b>real</b> chat app! 🎨 A
       <code>&lt;style&gt;</code> block adds blue bubbles, rounded corners and colors.
       <br><br>Add it to the <b>top</b> of your code, then Run. Big difference, right?`,
    code: CHAT_STYLE + "\n\n" + CHAT_STRUCTURE,
  },
  {
    title: "Step 3 — Make Send work (real code!)",
    instruction:
      `Time for <b>real JavaScript</b>! 💪 This <code>&lt;script&gt;</code> makes the
       Send button grab your words and show them as a blue bubble.
       <br><br>Add it, Run, then <b>type a message and click Send</b> — your words
       appear! (No friend yet — that's the next step.)`,
    code: CHAT_STYLE + "\n\n" + CHAT_STRUCTURE + "\n\n" + CHAT_SEND_SCRIPT,
  },
  {
    title: "Step 4 — A friend who understands you 🤖",
    instruction:
      `The best part! Now we add a friend who <b>reads what you say</b> and replies to
       fit — it understands lots of words now. 🤖
       <br><br>Add this, Run, then try saying: <b>hello</b> · <b>what's your name?</b> ·
       <b>tell me a joke</b> · <b>give me a quiz</b> · <b>I love pizza</b> · <b>let's play a game</b>.
       Each one gets a different reply — and random things get a surprise answer!`,
    code: CHAT_STYLE + "\n\n" + CHAT_STRUCTURE + "\n\n" + CHAT_FULL_SCRIPT,
  },
  {
    title: "Step 5 — Make it YOURS! 🎉",
    instruction:
      `You built a real chat app — nice work! 🥳 Now make it your own:
       <br><br>• Find <code>friendReply</code> and change the words in the quotes to make
       the friend say anything you like.<br>
       • Add a new line like <code>if (text.includes("pizza")) return "Yum! 🍕";</code><br>
       • Change the colors in the <code>&lt;style&gt;</code> at the top.
       <br><br>Change something, hit Run, and watch it update. This is how real coders work!`,
    code: CHAT_STYLE + "\n\n" + CHAT_STRUCTURE + "\n\n" + CHAT_FULL_SCRIPT,
  },
];

// ---- Guessing Game tutorial: a real, random, styled game ----
const GAME_STYLE =
`<style>
  body { font-family: sans-serif; text-align: center; background: #f0f2f5; padding: 20px; }
  #game { max-width: 320px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 14px; box-shadow: 0 2px 8px rgba(0,0,0,.1); }
  h2 { color: #673ab7; margin-top: 0; }
  #guess { padding: 10px; font-size: 16px; width: 90px; text-align: center; border: 2px solid #ccc; border-radius: 8px; }
  #go { padding: 10px 18px; font-size: 16px; background: #673ab7; color: #fff; border: none; border-radius: 8px; cursor: pointer; margin-left: 6px; }
  #hint { font-size: 20px; font-weight: bold; margin: 18px 0 6px; min-height: 26px; }
  #tries { color: #777; font-size: 14px; }
</style>`;

const GAME_STRUCTURE =
`<div id="game">
  <h2>🎯 Guess My Number!</h2>
  <p>I'm thinking of a number from 1 to 20.</p>
  <input id="guess" type="number" placeholder="?">
  <button id="go">Guess</button>
  <div id="hint"></div>
  <div id="tries">Tries: 0</div>
</div>`;

const GAME_SCRIPT_COMPARE =
`<script>
  // The computer picks a SECRET random number 1-20 — a new one every game!
  const secret = Math.floor(Math.random() * 20) + 1;
  const guess = document.getElementById("guess");
  const hint = document.getElementById("hint");

  document.getElementById("go").addEventListener("click", function () {
    const n = Number(guess.value);
    if (n < secret) hint.textContent = "Too low! 👇";
    else if (n > secret) hint.textContent = "Too high! 👆";
    else hint.textContent = "🎉 You got it!";
  });
<\/script>`;

const GAME_SCRIPT_FULL =
`<script>
  const secret = Math.floor(Math.random() * 20) + 1;
  let tries = 0;
  const guess = document.getElementById("guess");
  const hint = document.getElementById("hint");
  const triesEl = document.getElementById("tries");

  document.getElementById("go").addEventListener("click", function () {
    const n = Number(guess.value);
    tries = tries + 1;
    triesEl.textContent = "Tries: " + tries;
    if (n < secret) hint.textContent = "Too low! 👇";
    else if (n > secret) hint.textContent = "Too high! 👆";
    else hint.textContent = "🎉 Correct in " + tries + " tries!";
  });
<\/script>`;

const guessingTutorial = [
  {
    title: "Step 1 — The game board (look)",
    instruction:
      `First the <b>look</b>! 🎨 This is the game board: a title, a box to type your
       guess, a Guess button, and a spot for the hint.
       <br><br>Add it and Run. It won't <i>do</i> anything yet — but it'll look like a
       real game!`,
    code: GAME_STYLE + "\n\n" + GAME_STRUCTURE,
  },
  {
    title: "Step 2 — The secret number (the brain!)",
    instruction:
      `Now the <b>brain</b>! 🧠 The computer picks a <b>secret random number</b> from
       1 to 20 — a NEW one every time, so it's a real game you can't cheat at!
       <br><br>When you guess, it says <b>too low</b>, <b>too high</b>, or <b>you got it</b>.
       Add it, Run, and actually <b>play</b>! 🎮`,
    code: GAME_STYLE + "\n\n" + GAME_STRUCTURE + "\n\n" + GAME_SCRIPT_COMPARE,
  },
  {
    title: "Step 3 — Count your tries",
    instruction:
      `Let's keep score! 🔢 Now the game counts how many guesses you take and shows it
       when you win.
       <br><br>Add it and Run — then try to win in as <b>few tries</b> as you can!`,
    code: GAME_STYLE + "\n\n" + GAME_STRUCTURE + "\n\n" + GAME_SCRIPT_FULL,
  },
  {
    title: "Step 4 — Make it YOURS! 🎉",
    instruction:
      `You built a real game — awesome! 🥳 Now make it your own:
       <br><br>• Find <code>Math.random() * 20</code> and change <b>20</b> to <b>100</b>
       for a harder 1–100 game!<br>
       • Change the title text in the <code>&lt;h2&gt;</code>.<br>
       • Change the purple color in the <code>&lt;style&gt;</code>.
       <br><br>Change something, Run, and play your own version!`,
    code: GAME_STYLE + "\n\n" + GAME_STRUCTURE + "\n\n" + GAME_SCRIPT_FULL,
  },
];

// All tutorials live here. Add more any time!
const tutorials = [
  { name: "💬 Chat App", steps: chatTutorial },
  { name: "🎯 Guessing Game", steps: guessingTutorial },
];

let currentTutorial = 0;
let tutIndex = 0;
const tutDone = new Set(); // keys like "0:2"

const tutKey = (t, i) => t + ":" + i;
const curSteps = () => tutorials[currentTutorial].steps;

function renderTutPicker() {
  const wrap = $("tutPicker");
  wrap.innerHTML = "";
  tutorials.forEach((tut, t) => {
    const btn = document.createElement("button");
    btn.className = "course-btn";
    btn.textContent = tut.name;
    if (t === currentTutorial) btn.classList.add("active");
    btn.addEventListener("click", () => {
      if (t === currentTutorial) return;
      currentTutorial = t;
      tutIndex = 0;
      $("tutEditor").value = "";
      loadTutStep(0);
      runTut();
    });
    wrap.appendChild(btn);
  });
  $("tutStepsLabel").textContent = tutorials[currentTutorial].name + " steps:";
}

function renderTutSteps() {
  const list = $("tutStepList");
  list.innerHTML = "";
  curSteps().forEach((step, i) => {
    const li = document.createElement("li");
    li.textContent = step.title;
    if (i === tutIndex) li.classList.add("active");
    if (tutDone.has(tutKey(currentTutorial, i))) li.classList.add("done");
    li.addEventListener("click", () => loadTutStep(i));
    list.appendChild(li);
  });
}

function loadTutStep(i) {
  tutIndex = i;
  const step = curSteps()[i];
  $("tutProgress").textContent = `Step ${i + 1} of ${curSteps().length}`;
  $("tutTitle").textContent = step.title;
  $("tutInstruction").innerHTML = step.instruction;
  $("tutCode").textContent = step.code;
  renderTutPicker();
  renderTutSteps();
}

function runTut() {
  $("tutPreview").srcdoc = $("tutEditor").value + `<!--${++renderCount}-->`;
  tutDone.add(tutKey(currentTutorial, tutIndex));
  renderTutSteps();
}

function showTutorialMode() {
  hideAllModes();
  $("tutorialTab").classList.add("active");
  $("tutSidebar").style.display = "";
  $("tutorialView").style.display = "";
  loadTutStep(tutIndex);
  runTut();
}

$("learnTab").addEventListener("click", showLearnMode);
$("tutorialTab").addEventListener("click", showTutorialMode);
$("tutInsert").addEventListener("click", () => {
  $("tutEditor").value = curSteps()[tutIndex].code;
  runTut();
});
$("tutRun").addEventListener("click", runTut);
$("tutNext").addEventListener("click", () => {
  if (tutIndex < curSteps().length - 1) loadTutStep(tutIndex + 1);
});
$("tutBack").addEventListener("click", () => {
  if (tutIndex > 0) loadTutStep(tutIndex - 1);
});
$("buildTab").addEventListener("click", showBuildMode);
document.querySelectorAll(".ed-tab").forEach((t) =>
  t.addEventListener("click", () => selectEditor(t.dataset.ed)));
$("runProjBtn").addEventListener("click", runProject);
$("saveProjBtn").addEventListener("click", saveProject);
$("newProjBtn").addEventListener("click", () => {
  resetBuilder();
  renderProjectList();
  runProject();
});

// On page load: if someone was logged in last time, jump straight back in
const remembered = localStorage.getItem(CURRENT_KEY);
if (remembered && getUsers()[remembered]) {
  startSession(remembered);
} else {
  $("loginScreen").style.display = "flex";
}
