onload = () => {
  const c = setTimeout(() => {
    const kata = document.querySelector(".kata");
    const text =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split(
        ""
      );

    let index = 0; // Initialize index for the appendTitle function

    function appendTitle() {
      if (index < text.length) {
        const span = document.createElement("span");
        if (text[index] === " ") {
          span.style.marginRight = "20px"; // Add spacing for the space character
        } else {
          span.textContent = text[index];
          span.classList.add("fade-in"); // Add the fade-in class
        }
        kata.appendChild(span); // Append the span to the kata element
        index++;
        setTimeout(appendTitle, 200); // 300ms delay for each character
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
