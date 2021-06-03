interface Boss {
    name: string,
    title: string,
    image: string,
    health: number,
    str: number,
    dex: number,
    int: number,
    damage: number,
    defense: number,
    drops: Array<{ item: string, description: string }>,
    skills: Array<{ skill: string, description: string }>,
    id: string,
}

export default Boss;