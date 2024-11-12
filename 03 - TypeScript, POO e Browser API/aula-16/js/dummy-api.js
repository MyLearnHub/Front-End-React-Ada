async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: { "app-id": "63f77cc1b7f489f0b351b30f" },
  });
  const users = await resposta.json();

  console.log(users);
}

getUsers();

async function getUser() {
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/63f77cc1b7f489f0b351b30d",
    {
      headers: { "app-id": "63f77cc1b7f489f0b351b30f" },
    }
  );
  const user = await resposta.json();

  console.log(user);
}

getUser()

async function createUser() {
  const userData = {
    firstName: "Paulo",
    lastName: "Alvares",
    email: "paulo@test.com",
  };

  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "63f77cc1b7f489f0b351b30f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo usuário:", erro);
  }
}

createUser();
