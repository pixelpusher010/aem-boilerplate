const isActiveExperiment = () => document.body.classList.contains('experiment-hero-test');
const isChallenger = () => document.body.classList.contains('variant-challenger-1');

const HTMLContent = `
    <div class="rounded-element">Rounded Element</div>
    `;
export default function decorate(block) {
    if(isActiveExperiment() && isChallenger()) {
        block.style.setProperty('style', 'display: grid; place-items: center;');
        block.innerHTML = '<div class="rounded-element">Rounded Element</div>';
    }
}