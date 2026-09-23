// Create a buffer of 2 bytes
const buffer = new ArrayBuffer(2);

// View it as 8-bit integers (shows the split bytes)
const view8 = new Uint8Array(buffer);
view8[0] = 244;
view8[1] = 1;

const view = new DataView(buffer);

console.log(view.getUint16(0, true)); // Start reading from byte offset 0.

/**
 * to store value using dataview 
 * setUint16(
    ① byteOffset,
    ② value,
    ③ littleEndian
)
 */

// View the exact same buffer as a 16-bit integer
const view16 = new Uint16Array(buffer);
console.log(view16[0]);
