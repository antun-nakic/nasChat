var glavnoSucelje = document.getElementById("chatApp");
glavnoSucelje.style.display = "none";

const User = {
  nickname: "",
  password: "",
  identSes: null,
  trenSobaId: null,
  trenSoba: "",
  dohvatiSobe: function () {},
  posaljiPoruku: function () {},
  prijava: function (event) {
    event.preventDefault();

    this.nickname = document.getElementById("nick").value;
    this.password = document.getElementById("pass").value;
    this.identSes = 1;
  },
  odjava: function () {},
};

document
  .getElementById("prijava")
  .addEventListener("click", (event) => User.prijava(event));
