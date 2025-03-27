const isActiveExperiment = () => document.body.classList.contains('experiment-hero-test');
const isChallenger = () => document.body.classList.contains('variant-challenger-1');

export default async function runHeroTest () {
    await loadEager(document);
    if (isActiveExperiment()) {
        if (isChallenger()) {
            // eslint-disable-next-line no-console
            console.log('Challenger 1');
            document.getElementsByClassName('hero block').innerHTML = '<div class = "rounded element"><h1>Test</h1></div>';
            // eslint-disable-next-line no-console
        } else {
            // eslint-disable-next-line no-console
            console.log('Control');
            // eslint-disable-next-line no-console
            console.log('Hero test complete');
        }
    }
}