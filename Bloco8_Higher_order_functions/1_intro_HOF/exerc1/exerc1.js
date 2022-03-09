const idGenerator = (name) => {
    const email = name.toLowerCase().replace(' ', '_');
    return { name, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(idGenerator));