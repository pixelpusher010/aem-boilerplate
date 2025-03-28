const isActiveExperiment = () => document.body.classList.contains('experiment-hero-test');
const isChallenger = () => document.body.classList.contains('variant-challenger-1');

export default function decorate(block) {
    if(isActiveExperiment() && isChallenger()) {
      block.innerHTML = '<div class="rounded-element">Rounded Element</div>';
      block.setAttribute('style', 'display: grid; place-items: center;');
    }
}