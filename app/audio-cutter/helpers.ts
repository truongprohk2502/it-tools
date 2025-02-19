import toWav from "audiobuffer-to-wav";

export const audioBufferToBlob = (aBuffer: AudioBuffer) => {
  const wavArrayBuffer = toWav(aBuffer);
  const blob = new Blob([wavArrayBuffer], { type: "audio/wav" });
  return blob;
};

export const sliceAudioBuffer = (
  audioBuffer: AudioBuffer,
  start: number,
  end: number,
) => {
  const newBuffer = new AudioContext().createBuffer(
    audioBuffer.numberOfChannels,
    end - start,
    audioBuffer.sampleRate,
  );

  for (let i = 0; i < audioBuffer.numberOfChannels; i += 1) {
    newBuffer.copyToChannel(audioBuffer.getChannelData(i).slice(start, end), i);
  }

  return newBuffer;
};
