const messageForm = document.getElementById("Table-container");
const container = document.getElementById("getTeams");
async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(messageForm);
    const body = Object.fromEntries(formData);
    const response = await fetch("http://localhost:8080/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body),
    });
    console.log(response);
}
async function getTeams() {
for (let i = 0; i < team.length; i++) {
     const title = team[i].title;
     const position = team[i].position;
     const p =document.createElement("p");
     p.textContent = `${team} by ${position}`;
     messageForm.appendChild(p);}


 }
 getTeams();

messageForm.addEventListener("submit", handleSubmit);

