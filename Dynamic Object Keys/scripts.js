const phase = {
    loading: true,
    phaseName: '',
    time: null
}

const updatePhase = (key, value) =>{
    phase[key] = value;
}

updatePhase('phaseName', 'ready');
updatePhase('loading', false);
updatePhase('time', "10s");

console.log(phase);

// Create new key value pair
updatePhase('temperature', '30deg');
console.log(phase);