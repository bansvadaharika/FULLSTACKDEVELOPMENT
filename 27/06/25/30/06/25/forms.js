const heading = document.createElement("h2");
heading.classList.add("form-heading"); 
const form = document.createElement("form");
form.classList.add("student-form");
const fld = [
  { label: "Name:", type: "text", id: "Name"  },
  { label: "Roll No:", type: "text", id: "rollNo" },
  { label: "Gmail:", type: "email", id: "gmail" },
  { label: "Contact:", type: "tel", id: "contact" },
  { label: "DOB:", type: "date", id: "dob" },
  { label: "Address:", type: "text", id: "Address" },
  { label: "Dept Name:", type: "text", id: "deptName" },
  { label: "Year percentage:", type: "number", id: "enter your percentage" },
];
fld.forEach(fld => {
  const label = document.createElement("label");
  label.textContent = fld.label;
  const input = document.createElement("input");
  input.type = fld.type;
  input.id = fld.id;
  input.name = fld.id;
  form.appendChild(label);
  form.appendChild(input);
});
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);
document.body.appendChild(heading);
document.body.appendChild(form);