const audioContext = new AudioContext();

const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
});

const source = audioContext.createMediaElementSource(stream);
const gainNode = audioContext.createGain();
const analyser = audioContext.createAnalyser();

source.connect(audioContext.destination);

source.connect(gainNode);
gainNode.gain.value = 0.5;
gainNode.connect(audioContext.destination);

source.connect(analyser);
analyser.connect(audioContext.destination);

gainNode.gain.value = 0.5;
