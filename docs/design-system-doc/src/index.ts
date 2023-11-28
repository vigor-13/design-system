const main = (): void => {
  const appElement = document.querySelector<HTMLDivElement>('#app');

  if (appElement === null) return;

  appElement.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
};

main();
