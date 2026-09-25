const { parentPort } = require("node:worker_threads");

parentPort.on("message", (buffer) => {
  const arr = new Uint8Array(buffer);
  arr[1] = 200;
  Atomics.add(arr, 1, 1);

  console.log("This change is done by worker", arr);

  parentPort.postMessage("done");
});
