function generateRandomByte() {
    return Math.floor(Math.random() * 256);
}

function generateRandomIP() {
    // Generate 4 bytes for IPv4
    // We avoid 0.x.x.x, 10.x.x.x, 127.x.x.x, 169.254.x.x, 172.16-31.x.x, 192.168.x.x (Private/Reserved ranges) minimally for "realism" 
    // but user asked for random, so we keep it mostly random but valid-looking.
    // Let's just do pure random for the user's request context, maybe avoiding 0 and 255 as first octet.
    
    const part1 = Math.floor(Math.random() * 223) + 1; // 1-223 (Class A, B, C)
    const part2 = generateRandomByte();
    const part3 = generateRandomByte();
    const part4 = generateRandomByte();
    
    return `${part1}.${part2}.${part3}.${part4}`;
}