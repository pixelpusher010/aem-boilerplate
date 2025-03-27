const isActiveExperiment = () => document.body.classList.contains('experiment-hero-test');
const isChallenger = () => document.body.classList.contains('variant-challenger-1');

export default function decorate(block) {
    if(isActiveExperiment() && isChallenger()) {
    const createHeroDiv = document.createElement('div');
    createHeroDiv.innerHTML = '<div class="rounded-element">Rounded Element</div>';
    block.append(createHeroDiv);
    }
}