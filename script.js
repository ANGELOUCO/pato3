// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'quack-quack.mp3');
    audioElement.setAttribute('preload', 'auto');
    document.body.appendChild(audioElement);

    model.addEventListener('update', (event) => {
        const animation = event.detail.animations[0];
        const currentTime = animation.currentTime;

        if (animation.playing) {
            // Se a anima��o estiver sendo executada, verifique se o �udio est� pausado ou se j� foi iniciado
            if (audio.paused || audio.currentTime === 0) {
                audio.play();
            }
            // Defina o tempo de reprodu��o do �udio com base no tempo atual da anima��o
            audio.currentTime = currentTime / 1000; // A dura��o do �udio � em segundos, portanto, divida por 1000 para obter segundos
        } else {
            // Se a anima��o n�o estiver sendo executada, pause o �udio e defina o tempo de reprodu��o como 0 para reiniciar o �udio
            audio.pause();
            audio.currentTime = 0;
        }
    });


};
document.querySelector('model-viewer').addEventListener('progress', onProgress);