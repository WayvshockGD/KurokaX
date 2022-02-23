export function genURL(id: string) {
    return `https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=8&scope=bot`
}