const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);

const bytes = new Uint8Array(buffer);

bytes[0] = "shivam";
bytes[1] = 200;

console.log(bytes);
console.log(buffer);