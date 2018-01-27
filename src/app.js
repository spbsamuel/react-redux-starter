function helloWorldComponent() {
  const HelloWorldHeader = document.createElement('h1');
  HelloWorldHeader.textContent = 'Hello World';
  return HelloWorldHeader
}

document.body.appendChild(helloWorldComponent());