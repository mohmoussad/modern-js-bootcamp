const notes = getSavedNotes();

const user = {
  name: "Mohammad",
  age: 25,
};

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  notes.push({
    id: id,
    title: "",
    body: "",
  });

  saveNotes(notes);
  // renderNotes(notes, filters);
  location.assign(`/notes-app/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});