function decodeBase64(str) {
  return atob(str);
}

document.addEventListener("DOMContentLoaded", function () {
  const contacts = [
    {
      location: "Latvia",
      name: "Edgars Petrinčiks",
      emailB64: "RWRnYXJzLlBldHJpbmNpa3NAcml4bWluZC5jb20="
    },
    {
      location: "Kazakhstan",
      name: "Jurijs Lediņš",
      emailB64: "SnVyaWpzLkxlZGluc0ByaXhtaW5kLmNvbQ=="
    },
    {
      location: "Bulgaria",
      name: "Dimitar Kushvaliev",
      emailB64: "RGltaXRhci5LdXNodmFsaWV2QHJpeG1pbmQuY29t"
    },
    {
      location: "DACH region",
      name: "Justs Cielēns",
      emailB64: "SnVzdHMuQ2llbGVuc0ByaXhtaW5kLmNvbQ=="
    }
  ];

  const container = document.getElementById("contact-list");

  contacts.forEach(({ location, name, emailB64 }) => {
    const email = decodeBase64(emailB64);

    const entry = document.createElement("div");
    entry.className = "location-entry"; // 🟦 Apply container styling

    entry.innerHTML = `
      <p><strong>${location}</strong></p>
      <p><span class="contact-label">Contact:</span> <a href="mailto:${email}" class="email-link">${name}</a></p>
    `;

    container.appendChild(entry);
  });
});
