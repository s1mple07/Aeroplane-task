function allocate() {
  var n = document.getElementById("no_of_passengers_id").value;
  console.log(n);
  var column_a = document.getElementById("column_a");
  var column_b = document.getElementById("column_b");
  var column_c = document.getElementById("column_c");
  column_a.innerHTML = "";
  column_b.innerHTML = "";
  column_c.innerHTML = "";

  var table1 = document.createElement("TABLE");
  table1.remove();
  table1.border = "1";
  var table2 = document.createElement("TABLE");
  table1.remove();
  table2.border = "1";
  var table3 = document.createElement("TABLE");
  table1.remove();
  table3.border = "1";

  var table1body = document.createElement("TBODY");
  var table2body = document.createElement("TBODY");
  var table3body = document.createElement("TBODY");

  table1.appendChild(table1body);
  table2.appendChild(table2body);
  table3.appendChild(table3body);

  if (11 <= n && n <= 200) {
    for (var i = 1; i <= n / 10 + 1; i++) {
      var tr = document.createElement("TR");
      table1body.appendChild(tr);
      for (var j = 1; j <= 3; j++) {
        var td = document.createElement("TD");
        if (j == 1) {
          if ((i - 1) * 10 + 5 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 5));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode("\u00A0"));
            tr.appendChild(td);
          }
        } else if (j == 2) {
          if ((i - 1) * 10 + 1 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 1));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
        } else if (j == 3) {
          if ((i - 1) * 10 + 7 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 7));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
        }
      }
    }

    column_a.appendChild(table1);

    for (var i = 1; i <= n / 10 + 1; i++) {
      var tr = document.createElement("TR");
      table2body.appendChild(tr);
      for (var j = 1; j <= 4; j++) {
        var td = document.createElement("TD");
        if (j == 1) {
          if ((i - 1) * 10 + 8 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 8));
            tr.appendChild(td);
          } else {
            console.log("enter");
            td.appendChild(document.createTextNode("\u00A0"));
            tr.appendChild(td);
          }
        } else if (j == 2) {
          if ((i - 1) * 10 + 2 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 2));
            tr.appendChild(td);
          } else {
            console.log("enter");
            td.appendChild(document.createTextNode("  "));
            tr.appendChild(td);
          }
        } else if (j == 3) {
          if ((i - 1) * 10 + 3 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 3));
            tr.appendChild(td);
          } else {
            console.log("enter");
            td.appendChild(document.createTextNode("  "));
            tr.appendChild(td);
          }
        } else if (j == 4) {
          if ((i - 1) * 10 + 9 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 9));
            tr.appendChild(td);
          } else {
            console.log("enter");
            td.appendChild(document.createTextNode("  "));
            tr.appendChild(td);
          }
        }
      }
    }
    column_b.appendChild(table2);

    for (var i = 1; i <= n / 10 + 1; i++) {
      var tr = document.createElement("TR");
      table3body.appendChild(tr);
      for (var j = 1; j <= 3; j++) {
        var td = document.createElement("TD");
        if (j == 1) {
          if ((i - 1) * 10 + 10 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 10));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode("\u00A0 "));
            tr.appendChild(td);
          }
        } else if (j == 2) {
          if ((i - 1) * 10 + 4 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 4));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
        } else if (j == 3) {
          if ((i - 1) * 10 + 6 <= n) {
            td.appendChild(document.createTextNode((i - 1) * 10 + 6));
            tr.appendChild(td);
          } else {
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
        }
      }
    }
    column_c.appendChild(table3);
  }
}
