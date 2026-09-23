const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("Hello");
    controller.enqueue("Boss");
    controller.enqueue("How");
    controller.enqueue("are");
    controller.enqueue("you?");

    controller.close();
  },
});

const reader = stream.getReader();

while (true) {
  const { value, done } = await reader.read();

  if (done) {
    break;
  }

  console.log(value);
}

structuredClone;
