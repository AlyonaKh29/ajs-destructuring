export function showAvailableAttacks(destructor) {
    const { special: attacks } = destructor;
    const result = [];
    for (let attack of attacks) {
        let { id, name, icon, description='Описание недоступно' } = attack;
        result.push({id, name, description, icon});
    }
    return result;
}