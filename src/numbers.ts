export function toNumber(value: string) : Number{
    let converted = Number(value)
    if (Number.isNaN(converted)) {
        converted = Number(value.replace(/[^(\,0-9)]*/g, '').replace(',', '.'))
    }
    return converted
}