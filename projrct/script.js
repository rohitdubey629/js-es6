console.log("script is working");
let a = [];
function sub() {
  let fees = new Map([
    ["name", "Harry"],
    ["email", "rohit"],
    ["roll", 101],
    ["course", "bca"],
  ]);
  // const d = document.getElementById("data");
  const x = document.getElementById("name");
  const em = document.getElementById("email");
  const ro = document.getElementById("roll");
  const co = document.getElementById("course");

  // const data = d.value;
  const name = x.value;
  const email = em.value;
  const roll = ro.value;
  const course = co.value;
  console.log(name, email, roll, course);

  fees.set("name", name);
  fees.set("email", email);
  fees.set("roll", roll);
  fees.set("course", course);
  a.push(fees);
  console.log(fees);
  x.value = "";
  em.value = "";
  ro.value = "";
  co.value = "";
  console.log(a);
}
function Delete(ref) {
  console.log(ref.id);
  rl = parseInt(ref.id) - 1;
  delete a[rl];
  console.log(a)
  view()
}

function view() {
  const l = document.getElementById("view");
  console.log("left");
  let m = "";
  a.map(function (student) {
    q = `<tr style="border: 1px solid black;">
    <td>${student.get("name")}</td>
    <td>${student.get("email")}</td>
    <td>${student.get("roll")}</td>
    <td>${student.get("course")}</td>
    <td><input type="button" value="Delete" onclick="Delete(this)" id="${student.get("roll")}" />
    </td>
  </tr>`;
    m = m + q;
  });
  l.innerHTML = `
  <table style="border: 1px solid black;">
    <tr style="border: 1px solid black;">
      <th>Name</th>
      <th>Email</th>
      <th>Roll</th>
      <th>Course</th>
      <th>Action</th>
    </tr> 
    ${m}
  </table>`;
}
